<script setup lang="ts">
export interface BaseFormErrorProps {
	error: string;
}

withDefaults(defineProps<BaseFormErrorProps>(), {
	error: '',
});
</script>

<template>
	<div class="form-error">
		<p class="form-error__text">
			{{ error }}
		</p>
	</div>
</template>

<style scoped lang="sass">
.form-error
	padding: 13px 19px

	border: 2px solid var(--color-negative)
	border-radius: var(--radius-l)

	&__text
		color: var(--color-negative)
		font-weight: 500
		text-align: center
</style>
