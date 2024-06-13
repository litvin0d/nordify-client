<script setup lang="ts">
import { reactive, toRaw } from 'vue';
import { RouteNames } from '@/router/types';
import {
	BaseForm,
	BaseFormActions,
	BaseFormDescription,
	BaseFormError,
	BaseFormFields,
	BaseFormInput,
	BaseFormRadio,
	BaseFormRadios,
	BaseFormSubmit,
	BaseFormTitle,
} from '@/components/ui/form';
import type { SignUpData } from '@/api/types';
import { useSignUp } from '@/api/auth/useSignUp';

const formData = reactive<SignUpData>({
	username: '',
	fullName: '',
	password: '',
	confirmPassword: '',
	gender: 'male',
});

const { signUp, isSigningUp, signUpError } = useSignUp();

function submitHandler() {
	if (
		formData.username.trim()
		&& formData.fullName.trim()
		&& formData.password.trim()
		&& formData.confirmPassword.trim()
		&& formData.gender.trim()
		&& formData.password === formData.confirmPassword
	) {
		signUp(toRaw(formData));
	}
}
</script>

<template>
	<BaseForm class="sign-up-form" @submit.prevent="submitHandler">
		<BaseFormTitle>
			Nordify
		</BaseFormTitle>

		<BaseFormDescription>
			Создайте новый аккаунт в мессенджере
		</BaseFormDescription>

		<BaseFormError
			v-if="signUpError"
			:error="signUpError.message"
		/>

		<BaseFormFields>
			<BaseFormInput
				id="sign-up-username"
				v-model="formData.username"
				type="text"
				autocomplete="username"
				label="Имя пользователя"
				placeholder="Придумайте имя пользователя"
				required
			/>
			<BaseFormInput
				id="sign-up-full-name"
				v-model="formData.fullName"
				type="text"
				autocomplete="given-name"
				label="Имя"
				placeholder="Введите своё имя"
				required
			/>
			<BaseFormInput
				id="sign-up-password"
				v-model="formData.password"
				type="password"
				autocomplete="new-password"
				label="Пароль"
				placeholder="Придумайте пароль"
				required
			/>
			<BaseFormInput
				id="sign-up-password-confirm"
				v-model="formData.confirmPassword"
				type="password"
				autocomplete="new-password"
				label="Подтверждение пароля"
				placeholder="Повторите пароль"
				required
			/>
			<BaseFormRadios title="Выберите пол">
				<BaseFormRadio
					id="sign-up-gender-male"
					v-model="formData.gender"
					name="gender"
					label="Мужской"
					value="male"
				/>
				<BaseFormRadio
					id="sign-up-gender-female"
					v-model="formData.gender"
					name="gender"
					label="Женский"
					value="female"
				/>
				<BaseFormRadio
					id="sign-up-gender-other"
					name="gender"
					label="Другой"
					value="other"
					disabled
				/>
			</BaseFormRadios>
		</BaseFormFields>

		<BaseFormActions :disabled="isSigningUp">
			<BaseFormSubmit>Создать аккаунт</BaseFormSubmit>
			<router-link :to="{ name: RouteNames.SIGN_IN_PAGE }" class="sign-up-form__redirect btn btn--color-secondary">
				Войти в аккаунт
			</router-link>
		</BaseFormActions>
	</BaseForm>
</template>

<style scoped lang="sass">
.sign-up-form
  &__redirect
    --btn-line-height: unset
</style>
