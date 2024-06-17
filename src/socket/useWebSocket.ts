import type { Socket } from 'socket.io-client';
import { io } from 'socket.io-client';
import { computed, ref, watch } from 'vue';
import { useDocumentVisibility } from '@vueuse/core';
import { useGetUser } from '@/api/auth/useGetUser';

export function useWebSocket() {
	const socketRef = ref<Socket | null>(null);
	const onlineUsers = ref<Array<string>>([]);

	const { user, isGettingUser, getCachedUser } = useGetUser();

	const isOnline = computed(() => useDocumentVisibility().value === 'visible');

	watch([isOnline, user], () => {
		const cachedUser = getCachedUser();

		if (isOnline.value && cachedUser && !isGettingUser.value) {
			const socket = io(import.meta.env.VITE_API_BASE_URL ?? '/', {
				query: {
					userId: cachedUser.id,
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
		else if (!isOnline.value || !cachedUser) {
			if (socketRef.value) {
				socketRef.value.close();
				socketRef.value = null;
			}
		}
	}, { immediate: true, deep: true });

	return {
		socketRef,
		onlineUsers,
	};
}
