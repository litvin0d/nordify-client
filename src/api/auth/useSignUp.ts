import { useMutation } from '@tanstack/vue-query';
import type { SignUpData, User } from '@/api/types';
import { queryClient } from '@/api';

async function signUpRequest(data: SignUpData): Promise<User> {
	const response = await fetch('/api/auth/signup', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	return response.json();
}

export function useSignUp() {
	const signUpMutation = useMutation({
		mutationFn: signUpRequest,
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ['user'] });
		},
	});

	const signUp = (data: SignUpData) => signUpMutation.mutate(data);

	return {
		signUp,
		isSigningUp: signUpMutation.isPending,
	};
}
