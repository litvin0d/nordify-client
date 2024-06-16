import { useMutation } from '@tanstack/vue-query';
import type { ErrorResponse, Message, SendMessageData } from '@/api/types';
import { queryClient } from '@/api';

async function sendMessageRequest(data: SendMessageData): Promise<Message> {
	const response = await fetch(`/api/messages/send/${data.receiverId}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ message: data.message }),
	});

	if (!response.ok) {
		const errorResponse: ErrorResponse = await response.json();
		return Promise.reject(new Error(errorResponse.error));
	}

	return response.json();
}

export function useSendMessage(receiverId: string) {
	const { mutate, isPending } = useMutation({
		mutationFn: sendMessageRequest,
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ['messages', receiverId] });
		},
	});

	return {
		sendMessage: (data: SendMessageData) => mutate(data),
		isSendingMessage: isPending,
	};
}
