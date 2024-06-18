import { useQuery } from '@tanstack/vue-query';
import type { ErrorResponse, Message } from '@/api/types';

async function getMessagesRequest(userId: string): Promise<Array<Message>> {
	const response = await fetch(`/api/messages/${userId}`);

	if (!response.ok) {
		const errorResponse = await response.json() as ErrorResponse;
		return Promise.reject(new Error(errorResponse.error));
	}

	return await response.json();
}

export function useGetMessages(userId: string) {
	const { data, refetch } = useQuery({
		queryKey: ['messages', userId],
		queryFn: () => getMessagesRequest(userId),
		retry: 1,
	});

	return {
		messages: data,
		getMessages: refetch,
	};
}
