import { useQuery } from '@tanstack/vue-query';
import type { ErrorResponse, User } from '@/api/types';

async function getUsersRequest(): Promise<Array<User>> {
	const response = await fetch('/api/messages/conversations');

	if (!response.ok) {
		const errorResponse = await response.json() as ErrorResponse;
		return Promise.reject(new Error(errorResponse.error));
	}

	return await response.json();
}

export function useGetUsers() {
	const { data, isPending } = useQuery({
		queryKey: ['users'],
		queryFn: getUsersRequest,
		retry: 1,
	});

	return {
		users: data,
		isGettingUsers: isPending,
	};
}
