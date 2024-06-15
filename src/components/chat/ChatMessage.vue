<script setup lang="ts">
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

const formattedDatetime = `${new Date(props.datetime).toLocaleTimeString('ru-RU', {
	hour: '2-digit',
	minute: '2-digit',
	hour12: false,
	timeZone: 'UTC',
}).replace(',', '')} ${new Date(props.datetime).toLocaleDateString('ru-RU', {
	day: '2-digit',
	month: '2-digit',
	year: '2-digit',
	timeZone: 'UTC',
})}`;
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
			{{ formattedDatetime }}
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
