<script setup lang="ts">
interface BaseFormRadiosProps {
	title?: string;
}

withDefaults(defineProps<BaseFormRadiosProps>(), {
	title: '',
});
</script>

<template>
	<div class="form-radios">
		<span v-if="title" class="form-radios__title">
			{{ title }}
		</span>
		<slot />
	</div>
</template>

<style scoped lang="sass">
.form-radios
  display: grid
  grid-template-columns: repeat(3, minmax(0, 1fr))
  gap: 16px

  @media screen and (max-width: 768px)
    gap: 8px

  &__title
    grid-column: 1 / -1
    color: var(--color-neutral-400)
    font-size: var(--font-size-text-mob)
</style>
