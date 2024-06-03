import { type RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import { RouteNames } from '@/router/types';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: RouteNames.MAIN_PAGE,
		component: () => import('@/views/MainView.vue'),
		meta: {
			name: 'Главная | Nordify',
		},
	},
	{
		path: '/sign-in',
		name: RouteNames.SIGN_IN_PAGE,
		component: () => import('@/views/SignInView.vue'),
		meta: {
			name: 'Вход | Nordify',
		},
	},
	{
		path: '/sign-up',
		name: RouteNames.SIGN_UP_PAGE,
		component: () => import('@/views/SignUpView.vue'),
		meta: {
			name: 'Регистрация | Nordify',
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

export default router;
