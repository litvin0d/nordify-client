<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { IconSearch } from '@/components/ui/icons';
import { useGetUsers } from '@/api/messages/useGetUsers';
import { RouteNames } from '@/router/types';

const searchValue = ref('');
const { getCachedUsers } = useGetUsers();
const router = useRouter();

function handleSubmit() {
	if (!searchValue.value)
		return;

	const cachedUsers = getCachedUsers();

	if (!cachedUsers)
		return;

	const user = cachedUsers.find(u => u.fullName.toLowerCase().includes(searchValue.value.toLowerCase()));

	if (!user)
		return;

	router.push({ name: RouteNames.CHAT_SELECTED_PAGE, params: { userId: user.id } });
	return searchValue.value = '';
}
</script>

<template>
	<form class="users-list-search" @submit.prevent="handleSubmit">
		<input
			id="users-list-search-input"
			v-model="searchValue"
			type="text"
			inputmode="text"
			autocomplete="off"
			placeholder="Поиск..."
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

	@media screen and (max-width: 460px)
		padding: 12px 12px 0

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
