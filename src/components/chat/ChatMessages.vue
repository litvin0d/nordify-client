<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import ChatMessage from '@/components/chat/ChatMessage.vue';
import { useGetMessages } from '@/api/messages/useGetMessages';
import { useGetUser } from '@/api/auth/useGetUser';

// SCROLL TO BOTTOM
const messagesContainer = ref<HTMLDivElement | null>(null);

onMounted(() => {
	if (messagesContainer.value)
		messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
});

// GETTING MESSAGES
const route = useRoute();
const { getMessages, messages } = useGetMessages(route.params.userId as string);
getMessages();

const { getCachedUser } = useGetUser();
const user = getCachedUser();
</script>

<template>
	<div ref="messagesContainer" class="chat-messages">
		<template v-if="messages">
			<ChatMessage
				v-for="message in messages"
				:key="message.id"
				:mode="message.senderId === user?.id ? 'sent' : 'received'"
				:text="message.body"
				:datetime="message.createdAt"
			/>
		</template>
	</div>
</template>

<style scoped lang="sass">
.chat-messages
	display: flex
	flex-direction: column
	gap: 8px
	padding: 16px
	flex: 1

	max-height: calc(80svh - 190px)
	overflow-y: auto

	background-color: var(--color-neutral-800)
	border-radius: var(--radius-l)

	scrollbar-width: thin
	scrollbar-color: var(--color-neutral-700) var(--color-neutral-800)
</style>
