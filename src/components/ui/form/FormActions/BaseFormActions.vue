<script setup lang="ts">
export interface BaseFormActionsProps {
	disabled?: boolean;
}

withDefaults(defineProps<BaseFormActionsProps>(), {
	disabled: false,
});
</script>

<template>
	<div
		class="form-actions"
		:class="{ 'form-actions--disabled': disabled }"
	>
		<slot />
	</div>
</template>

<style scoped lang="sass">
.form-actions
  display: flex
  flex-direction: column
  gap: 16px

  &--disabled
    opacity: .5
    pointer-events: none

  @media screen and (max-width: 768px)
    gap: 8px
</style>
