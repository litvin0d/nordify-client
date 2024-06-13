<script setup lang="ts">
import { ref } from 'vue';
import { IconSearch } from '@/components/ui/icons';

const searchValue = ref('');
</script>

<template>
	<form class="users-list-search" @submit.prevent>
		<input
			id="users-list-search-input"
			v-model="searchValue"
			type="text"
			inputmode="text"
			autocomplete="off"
			placeholder="Введите имя..."
			required
			class="users-list-search__input"
		>
		<button
			type="submit"
			class="users-list-search__submit btn btn--color-primary"
			:disabled="!searchValue"
		>
			<IconSearch class="btn__icon" />
		</button>
	</form>
</template>

<style scoped lang="sass">
.users-list-search
	position: sticky
	top: 0
	z-index: 1

	display: flex
	align-items: center
	max-width: 100%
	gap: 8px
	padding: 16px 16px 0

	background-color: inherit

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
		--btn-px: 13px
		--btn-py: 13px
		--btn-icon-size: 16px
		--btn-radius: var(--radius-circle)

		min-width: 48px
</style>
