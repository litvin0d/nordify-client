import { useMutation } from '@tanstack/vue-query';
import { useRouter } from 'vue-router';
import type { LogoutResponse } from '@/api/types';
import { RouteNames } from '@/router/types';
import { queryClient } from '@/api';

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

	const { mutate, isPending } = useMutation({
		mutationFn: logoutRequest,
		onSuccess: async () => {
			queryClient.clear();
			await router.push({ name: RouteNames.SIGN_IN_PAGE });
		},
	});

	return {
		logout: () => mutate(),
		isLoggingOut: isPending,
	};
}
