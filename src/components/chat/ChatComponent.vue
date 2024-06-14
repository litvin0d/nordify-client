<script setup lang="ts">
import ChatHeader from '@/components/chat/ChatHeader.vue';
import ChatMessages from '@/components/chat/ChatMessages.vue';
</script>

<template>
	<section class="chat">
		<ChatHeader />
		<ChatMessages />
	</section>
</template>

<style scoped lang="sass">
.chat
	display: flex
	flex-direction: column
	grid-column: 5 / -1
	padding: 16px
	gap: 16px

	background-color: var(--color-neutral-700)
	border-radius: var(--radius-xl)

	&__avatar
		max-width: 48px
		width: 100%
		height: auto
		aspect-ratio: 1 / 1

		object-fit: cover
</style>
