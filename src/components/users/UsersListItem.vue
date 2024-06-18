<script setup lang="ts">
import { computed } from 'vue';
import type { User } from '@/api/types';
import { RouteNames } from '@/router/types';
import { useWebSocket } from '@/socket/useWebSocket';

export interface UsersListItemProps {
	userData: User;
}

const props = defineProps<UsersListItemProps>();

const { onlineUsers } = useWebSocket();

const isOnline = computed(() => onlineUsers.value.includes(props.userData.id));
</script>

<template>
	<router-link :to="{ name: RouteNames.CHAT_SELECTED_PAGE, params: { userId: userData.id } }" class="users-list-item">
		<div
			class="users-list-item__avatar"
			:class="{ 'users-list-item__avatar--online': isOnline }"
		>
			<img
				:src="userData.profilePic"
				:alt="`Аватар пользователя ${userData.fullName}`"
				width="48px"
				height="48px"
				class="users-list-item__avatar-img"
			>
		</div>
		<span class="users-list-item__name">
			{{ userData.fullName }}
		</span>
	</router-link>
</template>

<style scoped lang="sass">
.users-list-item
	display: flex
	align-items: center
	gap: 16px
	padding: 12px

	border-radius: var(--radius-l)

	color: inherit
	text-decoration: none

	cursor: pointer

	transition: background-color .3s ease

	@media (hover: hover)
		&:hover
			background-color: var(--color-neutral-600)

	&:active
		background-color: var(--color-neutral-600)

	&__avatar
		position: relative

		max-width: 48px
		max-height: 48px
		width: 48px
		height: 48px

		background-color: var(--color-neutral-500)
		border-radius: var(--radius-circle)

		&::after
			content: ""
			position: absolute
			right: 0
			bottom: 0

			display: block
			min-width: 12px
			min-height: 12px

			opacity: 0

			background-color: var(--color-positive)
			border: 1px solid var(--color-neutral-700)
			border-radius: var(--radius-circle)

			transition: opacity .3s ease

		&--online
			&::after
				opacity: 1

	&__avatar-img
		max-width: 48px
		width: 100%
		height: auto
		aspect-ratio: 1 / 1

		object-fit: cover

	&__name
		overflow: hidden

		font-weight: 500
		white-space: nowrap
		text-overflow: ellipsis
</style>
