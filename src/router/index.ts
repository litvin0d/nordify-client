import { type RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import { RouteNames } from '@/router/types';
import { isLoggedIn } from '@/router/middleware/isLoggedIn';
import type { Middleware } from '@/router/middleware/types';
import middlewarePipeline from '@/router/middleware/middlewarePipeline';
import { isLoggedOut } from '@/router/middleware/isLoggedOut';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: RouteNames.MAIN_PAGE,
		redirect() {
			return { name: RouteNames.CHAT_PAGE };
		},
		meta: {
			name: 'Главная | Nordify',
			middleware: [isLoggedIn],
		},
		children: [
			{
				path: '/chat',
				children: [
					{
						path: '',
						name: RouteNames.CHAT_PAGE,
						component: () => import('@/views/MainView.vue'),
					},
					{
						path: ':userId?',
						name: RouteNames.CHAT_SELECTED_PAGE,
						component: () => import('@/views/ChatView.vue'),
					},
				],
			},
		],
	},
	{
		path: '/sign-in',
		name: RouteNames.SIGN_IN_PAGE,
		component: () => import('@/views/SignInView.vue'),
		meta: {
			name: 'Вход | Nordify',
			middleware: [isLoggedOut],
		},
	},
	{
		path: '/sign-up',
		name: RouteNames.SIGN_UP_PAGE,
		component: () => import('@/views/SignUpView.vue'),
		meta: {
			name: 'Регистрация | Nordify',
			middleware: [isLoggedOut],
		},
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeResolve((to, _, next) => {
	if (to.meta.name)
		document.title = to.meta.name.toString();

	next();
});

router.beforeEach((to, from, next) => {
	const additionalMiddleware: Array<Middleware> = (to.meta.middleware as Middleware[]) || [];
	const middlewares = [...additionalMiddleware];

	const context = {
		to,
		from,
		next,
		abort: next,
	};

	if (middlewares.length === 0) {
		next();
	}
	else {
		middlewares[0]({
			...context,
			next: middlewarePipeline(context, middlewares, 1),
		});
	}
});

export default router;
