<script setup lang="ts">
import UsersListSearch from '@/components/users/UsersListSearch.vue';
import UsersListItem from '@/components/users/UsersListItem.vue';
import UsersListLogout from '@/components/users/UsersListLogout.vue';
</script>

<template>
	<aside class="users-list">
		<UsersListSearch />
		<div class="users-list__divider" />
		<section class="users-list__list">
			<UsersListItem v-for="i in 10" :key="i" />
		</section>
		<UsersListLogout />
	</aside>
</template>

<style scoped lang="sass">
.users-list
	position: relative

	display: flex
	flex-direction: column
	grid-column: 1 / 5
	gap: 16px
	margin-bottom: 88px
	overflow: auto

	background-color: var(--color-neutral-700)
	border-radius: var(--radius-xl) 0 0 var(--radius-xl)

	scrollbar-width: thin
	scrollbar-color: var(--color-neutral-800) var(--color-neutral-700)

	&__divider
		width: calc(100% - 32px)
		align-self: center
		min-height: 2px
		background-color: var(--color-neutral-500)

	&__list
		display: flex
		flex-direction: column
		gap: 8px
		padding: 0 16px 16px
</style>
