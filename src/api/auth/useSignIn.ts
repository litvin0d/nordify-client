import { useMutation } from '@tanstack/vue-query';
import type { SignInData, User } from '@/api/types';
import { queryClient } from '@/api';

async function signInRequest(data: SignInData): Promise<User> {
	const response = await fetch('/api/auth/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	return response.json();
}

export function useSignIn() {
	const signInMutation = useMutation({
		mutationFn: signInRequest,
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ['user'] });
		},
	});

	const signIn = (data: SignInData) => signInMutation.mutate(data);

	return {
		signIn,
		isSigningIn: signInMutation.isPending,
	};
}
