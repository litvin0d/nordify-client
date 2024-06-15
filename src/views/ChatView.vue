<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import ChatHeader from '@/components/chat/ChatHeader.vue';
import ChatMessages from '@/components/chat/ChatMessages.vue';
import ChatSendMessage from '@/components/chat/ChatSendMessage.vue';
import ChatPlaceholder from '@/components/chat/ChatPlaceholder.vue';

const route = useRoute();
const isSelected = computed(() => !!route.params.userId);
</script>

<template>
	<section class="chat">
		<template v-if="isSelected">
			<ChatHeader />
			<ChatMessages />
			<ChatSendMessage />
		</template>

		<ChatPlaceholder v-else />
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
