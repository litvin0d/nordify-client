<script setup lang="ts">
import { useDateFormat } from '@vueuse/core';

export interface ChatMessageProps {
	mode?: 'received' | 'sent';
	text?: string;
	datetime?: string;
}

const props = withDefaults(defineProps<ChatMessageProps>(), {
	mode: 'received',
	text: '',
	datetime: '00:00 00.00.00',
});

const dateTime = useDateFormat(new Date(props.datetime), 'H:mm DD.MM.YY');
</script>

<template>
	<article
		class="chat-message"
		:class="{ 'chat-message--sent': mode === 'sent' }"
	>
		<p class="chat-message__text">
			{{ text }}
		</p>
		<span class="chat-message__datetime">
			{{ dateTime }}
		</span>
	</article>
</template>

<style scoped lang="sass">
.chat-message
	display: flex
	flex-direction: column
	align-self: flex-start
	max-width: 60%
	gap: 4px
	padding: 16px

	background-color: var(--color-neutral-600)
	border-radius: var(--radius-xl) var(--radius-xl) var(--radius-xl) var(--radius-s)

	&:first-child
		margin-top: auto

	&--sent
		align-self: flex-end

		background-color: var(--color-primary-500)
		border-radius: var(--radius-xl) var(--radius-xl) var(--radius-s) var(--radius-xl)

	&__text
		line-height: var(--line-height-xl)

	&__datetime
		align-self: flex-end

		opacity: .5

		color: var(--color-neutral-400)
		font-size: var(--font-size-text-mob)
</style>
