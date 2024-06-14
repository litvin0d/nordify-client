<script setup lang="ts">
import { IconLogout } from '@/components/ui/icons';
import { useLogout } from '@/api/auth/useLogout';

const { logout, isLoggingOut } = useLogout();
</script>

<template>
	<button
		class="users-list-logout btn btn--color-tertiary"
		:disabled="isLoggingOut"
		type="button"
		@click="logout"
	>
		<IconLogout class="users-list-logout__icon btn__icon" />
	</button>
</template>

<style scoped lang="sass">
.users-list-logout
	--btn-px: 13px
	--btn-py: 13px
	--btn-icon-size: 16px
	--btn-radius: var(--radius-circle)

	position: sticky
	left: 28px
	bottom: 28px

	align-self: flex-start
	min-width: 48px
	margin-top: auto

	&__icon
		transform: rotate(180deg) translateX(8%)
</style>
