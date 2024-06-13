import { effectScope } from 'vue';
import type { Middleware } from '@/router/middleware/types';
import { useGetUser } from '@/api/auth/useGetUser';
import { RouteNames } from '@/router/types';

export const isLoggedIn: Middleware = ({ from, next, abort }) => {
	const scope = effectScope();

	scope.run(() => {
		const { getCachedUser, refetchUser } = useGetUser();

		if (getCachedUser()) {
			next();
		}
		else {
			refetchUser()
				.then(() => {
					if (getCachedUser()) {
						next();
					}
					else {
						from.meta.loginFailed = true;
						abort({ name: RouteNames.SIGN_IN_PAGE });
					}
				})
				.catch(() => {
					from.meta.loginFailed = true;
					abort({ name: RouteNames.SIGN_IN_PAGE });
				});
		}
	});

	scope.stop();
};
