<script setup lang="ts">
import SignUpForm from '@/components/auth/SignUpForm.vue';
</script>

<template>
	<main class="sign-up">
		<SignUpForm />
	</main>
</template>

<style scoped lang="sass">
.sign-up
	display: flex
	align-items: center
	justify-content: center
	height: var(--app-height)
</style>
