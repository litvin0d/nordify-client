import { ref, watch } from 'vue';
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query';
import type { SignInData, SignUpData, User } from '@/api/types';
import { apiClient } from '@/api';

export function useAuth() {
	const user = ref<User | null>(null);
	const queryClient = useQueryClient();

	const signInMutation = useMutation({
		mutationFn: async (data: SignInData) => {
			const response = await apiClient.post<User>('/auth/login', data);
			return response.data;
		},
		onSuccess: async (data) => {
			user.value = data;
			await queryClient.invalidateQueries({ queryKey: ['user'] });
		},
	});

	const signUpMutation = useMutation({
		mutationFn: async (data: SignUpData) => {
			const response = await apiClient.post<User>('/auth/signup', data);
			return response.data;
		},
		onSuccess: async (data) => {
			user.value = data;
			await queryClient.invalidateQueries({ queryKey: ['user'] });
		},
	});

	const logoutMutation = useMutation({
		mutationFn: async () => {
			await apiClient.post<User>('/auth/logout');
		},
		onSuccess: async () => {
			user.value = null;
			await queryClient.invalidateQueries({ queryKey: ['user'] });
		},
	});

	const getUserQuery = useQuery({
		queryKey: ['user'],
		queryFn: async () => {
			const response = await apiClient.get<User>('/auth/me');
			return response.data;
		},
		enabled: false,
	});

	watch(() => getUserQuery.data, (data) => {
		if (data.value)
			user.value = data.value;
	});

	const signIn = (data: SignInData) => signInMutation.mutate(data);
	const signUp = (data: SignUpData) => signUpMutation.mutate(data);
	const logout = () => logoutMutation.mutate();
	const getUser = () => getUserQuery.refetch();

	return {
		user,
		signIn,
		signUp,
		logout,
		getUser,
		isSigningIn: signInMutation.isPending,
		isSigningUp: signUpMutation.isPending,
		isLoggingOut: logoutMutation.isPending,
		isGettingUser: getUserQuery.isPending,
	};
}
