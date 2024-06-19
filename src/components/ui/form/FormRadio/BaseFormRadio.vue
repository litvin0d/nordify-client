<script setup lang="ts">
interface BaseFormRadioProps {
	id?: string;
	name?: string;
	label?: string;
	value?: string | number;
	disabled?: boolean;
}

withDefaults(defineProps<BaseFormRadioProps>(), {
	id: '',
	name: '',
	label: '',
	value: '',
	disabled: false,
});

const modelValue = defineModel<string | number>();
</script>

<template>
	<label
		class="form-radio"
		:class="{ 'form-radio--disabled': disabled }"
	>
		<input
			:id
			v-model="modelValue"
			type="radio"
			:name
			:value
			class="form-radio__input"
		>
		<span v-if="label" class="form-radio__label">
			{{ label }}
		</span>
	</label>
</template>

<style scoped lang="sass">
.form-radio
  display: flex
  align-items: center
  gap: 4px
  cursor: pointer

  &--disabled
    pointer-events: none

  &__label
    color: var(--color-neutral-400)

  &__input
    -webkit-appearance: none
    appearance: none

    display: grid
    place-content: center

    width: 1.15em
    height: 1.15em
    margin: 0

    background-color: transparent
    border: 0.15em solid var(--color-primary-500)
    border-radius: var(--radius-circle)

    color: currentColor
    font: inherit

    transform: translateY(-0.075em)

    &::before
      content: ""
      width: 0.65em
      height: 0.65em

      border-radius: var(--radius-circle)
      box-shadow: inset 1em 1em var(--color-primary-500)

      transform: scale(0)
      transition: transform 120ms ease-in-out

    &:checked
      &::before
        transform: scale(1)
</style>
