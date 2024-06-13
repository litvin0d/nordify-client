import type { Middleware } from '@/router/middleware/types';
import { RouteNames } from '@/router/types';
import { useGetUser } from '@/api/auth/useGetUser';

export const isLoggedOut: Middleware = ({ from, next, abort }) => {
	if (
		from.meta.loginFailed
		|| [RouteNames.SIGN_UP_PAGE, RouteNames.SIGN_IN_PAGE].includes(from.name as RouteNames)
	) {
		next();
		return;
	}

	const { getCachedUser, refetchUser } = useGetUser();

	if (getCachedUser()) {
		abort({ name: RouteNames.MAIN_PAGE });
	}
	else {
		refetchUser()
			.then(() => {
				if (getCachedUser()) {
					abort({ name: RouteNames.MAIN_PAGE });
				}
				else {
					next();
				}
			})
			.catch(() => {
				next();
			});
	}
};
