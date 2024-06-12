import { useMutation } from '@tanstack/vue-query';
import { queryClient } from '@/api';
import type { LogoutResponse } from '@/api/types';

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
	const logoutMutation = useMutation({
		mutationFn: logoutRequest,
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ['user'] });
		},
	});

	const logout = () => logoutMutation.mutate();

	return {
		logout,
		isLoggingOut: logoutMutation.isPending,
	};
}
