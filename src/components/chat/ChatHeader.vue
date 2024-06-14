<script setup lang="ts">

</script>

<template>
	<div class="chat-header">
		<img
			src="https://avatar.iran.liara.run/public/boy?username=ivanov"
			alt="avatar"
			width="24px"
			height="24px"
			class="chat-header__avatar"
		>

		<span class="chat-header__name">
			Ivanov Ivan
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

		font-weight: 500
		white-space: nowrap
		text-overflow: ellipsis

	&__status
		margin-left: auto
		margin-right: 8px

		color: var(--color-neutral-400)

		transition: color .3s ease

		&--online
			color: var(--color-primary-200)
</style>
