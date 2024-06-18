import { onUnmounted, watchEffect } from 'vue';
import { useWebSocket } from '@/socket/useWebSocket';
import type { Message } from '@/api/types';
import { queryClient } from '@/api';

export function useListenMessages(userId: string) {
	const { socketRef } = useWebSocket();

	watchEffect(() => {
		const socket = socketRef.value;
		if (!socket)
			return;

		const handleMessageReceived = (newMessage: Message) => {
			queryClient.setQueryData(['messages', userId], (oldMessages: Array<Message> = []) => {
				return [...oldMessages, newMessage];
			});
		};

		socket.on('newMessage', handleMessageReceived);

		onUnmounted(() => {
			socket.off('newMessage', handleMessageReceived);
		});
	});
}
