<script setup lang="ts">
import type { User } from '@/api/types';

export interface UsersListItemProps {
	userData: User;
}

defineProps<UsersListItemProps>();
</script>

<template>
	<article class="users-list-item">
		<div class="users-list-item__avatar users-list-item__avatar--online">
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
	</article>
</template>

<style scoped lang="sass">
.users-list-item
	display: flex
	align-items: center
	gap: 16px
	padding: 12px

	border-radius: var(--radius-l)

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
