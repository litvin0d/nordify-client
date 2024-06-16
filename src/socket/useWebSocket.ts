import type { Socket } from 'socket.io-client';
import { io } from 'socket.io-client';
import { ref, watch } from 'vue';
import { useGetUser } from '@/api/auth/useGetUser';

export function useWebSocket() {
	const socketRef = ref<Socket | null>(null);
	const onlineUsers = ref<Array<string>>([]);

	const { user, isGettingUser } = useGetUser();

	watch([user, isGettingUser], () => {
		if (user.value && !isGettingUser.value) {
			const socket = io(import.meta.env.VITE_API_BASE_URL ?? '/', {
				query: {
					userId: user.value.id,
				},
			});

			socketRef.value = socket;

			socket.on('getOnlineUsers', (users: string[]) => {
				onlineUsers.value = users;
			});

			return () => {
				socket.close();
				socketRef.value = null;
			};
		}
		else if (!user.value && !isGettingUser.value) {
			if (socketRef.value) {
				socketRef.value.close();
				socketRef.value = null;
			}
		}
	}, { immediate: true });

	return {
		socketRef,
		onlineUsers,
	};
}
