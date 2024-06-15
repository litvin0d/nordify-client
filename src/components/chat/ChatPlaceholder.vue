<script setup lang="ts">

</script>

<template>
	<div class="chat-placeholder">
		<p class="chat-placeholder__text">
			Выберите, кому хотели бы написать
		</p>
	</div>
</template>

<style scoped lang="sass">
.chat-placeholder
	display: flex
	align-items: center
	justify-content: center
	flex: 1

	background-color: var(--color-neutral-800)
	border-radius: var(--radius-l)

	&__text
		color: var(--color-neutral-400)
		font-weight: 500

		opacity: .5
</style>
