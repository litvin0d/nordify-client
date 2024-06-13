import { useMutation } from '@tanstack/vue-query';
import { useRouter } from 'vue-router';
import type { ErrorResponse, SignUpData, User } from '@/api/types';
import { queryClient } from '@/api';
import { RouteNames } from '@/router/types';

async function signUpRequest(data: SignUpData): Promise<User> {
	const response = await fetch('/api/auth/signup', {
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

export function useSignUp() {
	const router = useRouter();

	const { mutate, isPending, error } = useMutation({
		mutationFn: signUpRequest,
		onSuccess: async (data) => {
			queryClient.setQueryData(['user'], () => data);
			await router.push({ name: RouteNames.MAIN_PAGE });
		},
	});

	const signUp = (data: SignUpData) => mutate(data);

	return {
		signUp,
		isSigningUp: isPending,
		signUpError: error,
	};
}
