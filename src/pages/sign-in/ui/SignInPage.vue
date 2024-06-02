<script setup lang="ts">
import { SignInForm } from '@/features/auth';
</script>

<template>
	<main class="sign-in">
		<SignInForm />
	</main>
</template>

<style scoped lang="sass">
.sign-in
  display: flex
  align-items: center
  justify-content: center
  height: var(--app-height)
</style>
