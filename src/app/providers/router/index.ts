import { type RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import { RouteNames } from '@/app/providers/router/types';
import { SignUpPage } from '@/pages/sign-up';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: RouteNames.SIGN_UP_PAGE,
		component: SignUpPage,
	},
	{
		path: '/sign-in',
		name: RouteNames.SIGN_IN_PAGE,
		component: () => import('@/pages/sign-in/ui/SignInPage.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
