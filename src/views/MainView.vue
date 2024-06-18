<script setup lang="ts">
import { useRouter } from 'vue-router';
import { computed, onMounted } from 'vue';
import { useWindowSize } from '@vueuse/core';
import UsersList from '@/components/users/UsersList.vue';
import ChatPlaceholder from '@/components/chat/ChatPlaceholder.vue';

const router = useRouter();

onMounted(() => {
	router.push({ params: { userId: '' } });
});

const { width } = useWindowSize();
const showPlaceholder = computed(() => width.value > 600);
</script>

<template>
	<div class="main">
		<main class="main__window">
			<UsersList />
			<ChatPlaceholder v-if="showPlaceholder" />
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
</style>
