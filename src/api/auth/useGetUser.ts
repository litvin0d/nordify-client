import type { UseQueryReturnType } from '@tanstack/vue-query';
import { useQuery } from '@tanstack/vue-query';
import type { ErrorResponse, User } from '@/api/types';
import { queryClient } from '@/api';

async function getUserRequest(): Promise<User> {
	const response = await fetch('/api/auth/me');

	if (!response.ok) {
		const errorResponse = await response.json() as ErrorResponse;
		return Promise.reject(new Error(errorResponse.error));
	}

	return await response.json();
}

export function useGetUser() {
	const { refetch, isPending, data, isError }: UseQueryReturnType<User, ErrorResponse> = useQuery<User, ErrorResponse>({
		queryKey: ['user'],
		queryFn: getUserRequest,
		retry: 0,
		enabled: false,
	});

	const getCachedUser = () => queryClient.getQueryData<User>(['user']) ?? null;

	return {
		user: data,
		getCachedUser,
		refetchUser: refetch,
		isGettingUser: isPending,
		isUserError: isError,
	};
}
