export enum RouteNames {
	MAIN_PAGE = 'MainView',
	SIGN_IN_PAGE = 'SignInView',
	SIGN_UP_PAGE = 'SignUpView',
}

export enum LayoutNames {
	MAIN_LAYOUT = 'MainLayout',
	AUTH_LAYOUT = 'AuthLayout',
}

export type BaseLayouts = (typeof LayoutNames)[keyof typeof LayoutNames];
