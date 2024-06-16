<script setup lang="ts">
import ChatHeader from '@/components/chat/ChatHeader.vue';
import ChatMessages from '@/components/chat/ChatMessages.vue';
import ChatSendMessage from '@/components/chat/ChatSendMessage.vue';
import UsersList from '@/components/users/UsersList.vue';
</script>

<template>
	<div class="main">
		<main class="main__window">
			<UsersList />
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

	&__chat
		display: flex
		flex-direction: column
		grid-column: 5 / -1
		padding: 16px
		gap: 16px

		background-color: var(--color-neutral-700)
		border-radius: var(--radius-xl)
</style>
