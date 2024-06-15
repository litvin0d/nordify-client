<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useGetUsers } from '@/api/messages/useGetUsers';

const route = useRoute();

const { getCachedUsers } = useGetUsers();
const users = getCachedUsers();

const user = users?.find(u => u.id === route.params.userId);
</script>

<template>
	<div v-if="user" class="chat-header">
		<img
			:src="user.profilePic"
			:alt="`Аватар пользователя ${user.fullName}`"
			width="24px"
			height="24px"
			class="chat-header__avatar"
		>

		<span class="chat-header__name">
			{{ user.fullName }}
		</span>

		<span
			class="chat-header__status chat-header__status--online"
		>
			online
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
</style>
