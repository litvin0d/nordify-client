<script setup lang="ts">
import { ref } from 'vue';

interface BaseInputProps {
	id?: string;
	type?: 'text' | 'password';
	autocomplete?: 'on' | 'given-name' | 'username' | 'new-password' | 'current-password' | 'off';
	label?: string;
	placeholder?: string;
	required?: boolean;
}

withDefaults(defineProps<BaseInputProps>(), {
	id: '',
	type: 'text',
	autocomplete: 'off',
	label: '',
	placeholder: '',
	required: false,
});

const innerValue = ref<string>();
const modelValue = defineModel<string>({
	get(v) {
		return v ?? innerValue.value;
	},
	set(v) {
		innerValue.value = v;
		return v;
	},
});
</script>

<template>
	<label class="form-input">
		<span v-if="label" class="form-input__label">
			{{ label }}
		</span>
		<input
			:id
			v-model="modelValue"
			:type
			inputmode="text"
			:autocomplete
			:placeholder
			:required
			class="form-input__input"
		>
	</label>
</template>

<style scoped lang="sass">
.form-input
  display: flex
  flex-direction: column
  gap: 6px

  &__label
    color: var(--color-neutral-400)
    font-size: var(--font-size-text-mob)

  &__input
    padding: 13px 19px

    background-color: var(--color-neutral-800)
    border-radius: var(--radius-l)
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
</style>
