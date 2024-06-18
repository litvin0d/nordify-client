<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';
import { computed } from 'vue';
import ChatHeader from '@/components/chat/ChatHeader.vue';
import ChatMessages from '@/components/chat/ChatMessages.vue';
import ChatSendMessage from '@/components/chat/ChatSendMessage.vue';
import UsersList from '@/components/users/UsersList.vue';

const { width } = useWindowSize();
const showUsersList = computed(() => width.value > 600);
</script>

<template>
	<div class="main">
		<main class="main__window">
			<UsersList v-if="showUsersList" />
			<section class="main__chat">
				<ChatHeader />
				<ChatMessages />
				<ChatSendMessage />
			</section>
		</main>
	</div>
</template>

<style scoped lang="sass">
.main
	display: flex
	align-items: center
	justify-content: center
	height: var(--app-height)

	&__window
		display: grid
		grid-template-columns: repeat(12, minmax(0, 1fr))
		gap: 16px
		max-width: 1024px
		width: 100%
		max-height: 80svh
		height: 100%

		@media screen and (max-width: 1024px)
			max-height: unset
			height: 100svh

	&__chat
		display: flex
		flex-direction: column
		grid-column: 5 / -1
		padding: 16px
		gap: 16px

		background-color: var(--color-neutral-700)
		border-radius: var(--radius-xl)

		@media screen and (max-width: 1024px)
			grid-column: 6 / -1
			border-radius: 0

		@media screen and (max-width: 768px)
			grid-column: 7 / -1

		@media screen and (max-width: 600px)
			grid-column: 1 / -1

		@media screen and (max-width: 460px)
			padding: 12px
			gap: 12px
</style>
