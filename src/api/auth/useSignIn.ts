import { useMutation } from '@tanstack/vue-query';
import { useRouter } from 'vue-router';
import type { ErrorResponse, SignInData, User } from '@/api/types';
import { queryClient } from '@/api';
import { RouteNames } from '@/router/types';

async function signInRequest(data: SignInData): Promise<User> {
	const response = await fetch('/api/auth/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	if (!response.ok) {
		const errorResponse: ErrorResponse = await response.json();
		return Promise.reject(new Error(errorResponse.error));
	}

	return response.json();
}

export function useSignIn() {
	const router = useRouter();

	const { mutate, isPending, error } = useMutation({
		mutationFn: signInRequest,
		onSuccess: async (data) => {
			queryClient.setQueryData(['user'], () => data);
			await router.push({ name: RouteNames.MAIN_PAGE });
		},
	});

	const signIn = (data: SignInData) => mutate(data);

	return {
		signIn,
		isSigningIn: isPending,
		signInError: error,
	};
}
