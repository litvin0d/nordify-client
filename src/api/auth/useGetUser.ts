import { useQuery } from '@tanstack/vue-query';
import type { User } from '@/api/types';

async function getUserRequest(): Promise<User> {
	const response = await fetch('/api/auth/me');

	return response.json();
}

export function useGetUser() {
	const getUserQuery = useQuery({
		queryKey: ['user'],
		queryFn: getUserRequest,
		enabled: false,
	});

	const getUser = () => getUserQuery.refetch();

	return {
		getUser,
		isGettingUser: getUserQuery.isPending,
	};
}
