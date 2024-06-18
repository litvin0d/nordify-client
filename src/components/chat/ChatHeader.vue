<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed, ref } from 'vue';
import { useGetUsers } from '@/api/messages/useGetUsers';
import type { User } from '@/api/types';
import { useWebSocket } from '@/socket/useWebSocket';
import { IconBack } from '@/components/ui/icons';

const route = useRoute();

const { getCachedUsers, getUsers, users } = useGetUsers();
const cachedUsers = getCachedUsers();

const user = ref<User | undefined>(undefined);

if (cachedUsers) {
	user.value = cachedUsers.find(u => u.id === route.params.userId);
}
else {
	getUsers().then(() => {
		user.value = users.value?.find(u => u.id === route.params.userId);
	});
}

const { onlineUsers } = useWebSocket();

const isOnline = computed(() => user.value && onlineUsers.value.includes(user.value.id));
</script>

<template>
	<div class="chat-header">
		<router-link to="../" class="chat-header__back btn btn--color-tertiary">
			<IconBack class="btn__icon" />
		</router-link>

		<img
			v-if="user"
			:src="user.profilePic"
			:alt="`Аватар пользователя ${user.fullName}`"
			width="24px"
			height="24px"
			class="chat-header__avatar"
		>

		<span class="chat-header__name">
			{{ user?.fullName ?? 'Загрузка...' }}
		</span>

		<span
			v-if="user"
			class="chat-header__status"
			:class="{ 'chat-header__status--online': isOnline }"
		>
			{{ isOnline ? 'online' : 'offline' }}
		</span>
	</div>
</template>

<style scoped lang="sass">
.chat-header
	display: flex
	align-items: center
	gap: 16px
	padding: 12px
	max-height: 48px

	border-radius: var(--radius-circle)

	background-color: var(--color-neutral-600)

	&__avatar
		max-width: 24px
		width: 100%
		height: auto
		aspect-ratio: 1 / 1

		border-radius: var(--radius-circle)

		object-fit: cover

	&__name
		overflow: hidden

		font-size: var(--font-size-text-mob)
		font-weight: 500
		white-space: nowrap
		text-overflow: ellipsis

	&__status
		margin-left: auto
		margin-right: 8px

		color: var(--color-neutral-400)
		font-size: var(--font-size-text-mob)

		transition: color .3s ease

		&--online
			color: var(--color-primary-200)

	&__back
		--btn-px: 0
		--btn-py: 0
		--btn-radius: var(--radius-circle)
		--btn-icon-size: 20px

		display: none

		@media screen and (max-width: 600px)
			display: block
</style>
