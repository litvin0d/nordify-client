import { useMutation } from '@tanstack/vue-query';
import { useRouter } from 'vue-router';
import { queryClient } from '@/api';
import type { LogoutResponse } from '@/api/types';
import { RouteNames } from '@/router/types';

async function logoutRequest(): Promise<LogoutResponse> {
	const response = await fetch('/api/auth/logout', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	return response.json();
}

export function useLogout() {
	const router = useRouter();

	const logoutMutation = useMutation({
		mutationFn: logoutRequest,
		onSuccess: async () => {
			queryClient.clear();
			await router.push({ name: RouteNames.SIGN_IN_PAGE });
		},
	});

	const logout = () => logoutMutation.mutate();

	return {
		logout,
		isLoggingOut: logoutMutation.isPending,
	};
}
