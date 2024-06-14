<script setup lang="ts">
import UsersList from '@/components/users/UsersList.vue';
import ChatComponent from '@/components/chat/ChatComponent.vue';
</script>

<template>
	<div class="main">
		<main class="main__window">
			<UsersList />
			<ChatComponent />
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
</style>
