<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { IconSend } from '@/components/ui/icons';
import { useSendMessage } from '@/api/messages/useSendMessage';

const route = useRoute();
const messageValue = ref('');

const { sendMessage, isSendingMessage } = useSendMessage(route.params.userId as string);

function handleSubmit() {
	const receiverId = route.params.userId as string;

	if (!messageValue.value && !receiverId)
		return;

	sendMessage({
		receiverId,
		message: messageValue.value,
	});

	messageValue.value = '';
}
</script>

<template>
	<form class="chat-send-message" @submit.prevent="handleSubmit">
		<input
			id="chat-send-message-input"
			v-model="messageValue"
			type="text"
			inputmode="text"
			autocomplete="off"
			placeholder="Написать сообщение..."
			required
			class="chat-send-message__input"
		>
		<button
			type="submit"
			class="chat-send-message__submit btn btn--color-primary"
			:disabled="!messageValue || isSendingMessage"
		>
			<IconSend class="chat-send-message__icon btn__icon" />
		</button>
	</form>
</template>

<style scoped lang="sass">
.chat-send-message
	display: flex
	align-items: center
	max-width: 100%
	width: 100%
	gap: 8px

	&__input
		flex: 1
		padding: 13px 19px
		background-color: var(--color-neutral-800)
		border-radius: var(--radius-circle)
		border: 2px solid var(--color-neutral-800)
		outline: none
		outline-offset: 1px

		color: var(--color-neutral-200)

		transition: border-color .3s ease, outline-color .3s ease

		@media (hover: hover)
			&:hover
				border-color: var(--color-neutral-600)

		&:focus
			outline: none

		&:focus-visible
			border-color: var(--color-neutral-500)

	&__submit
		--btn-px: 5px
		--btn-py: 5px
		--btn-icon-size: 24px
		--btn-radius: var(--radius-circle)

		min-width: 48px

	&__icon
		transform: translateX(-5%)
</style>
