<script setup lang="ts">
import { reactive, toRaw } from 'vue';
import {
	BaseForm,
	BaseFormActions,
	BaseFormDescription,
	BaseFormError,
	BaseFormFields,
	BaseFormInput,
	BaseFormSubmit,
	BaseFormTitle,
} from '@/components/ui/form';
import { RouteNames } from '@/router/types';
import { useSignIn } from '@/api/auth/useSignIn';
import type { SignInData } from '@/api/types';

const formData = reactive<SignInData>({
	username: '',
	password: '',
});

const { signIn, isSigningIn, signInError } = useSignIn();

function submitHandler() {
	if (formData.username.trim() && formData.password.trim()) {
		signIn(toRaw(formData));
	}
}
</script>

<template>
	<BaseForm class="sign-in-form" @submit.prevent="submitHandler">
		<BaseFormTitle>
			Nordify
		</BaseFormTitle>

		<BaseFormDescription>
			Войдите в свой аккаунт в мессенджере
		</BaseFormDescription>

		<BaseFormError
			v-if="signInError"
			:error="signInError.message"
		/>

		<BaseFormFields>
			<BaseFormInput
				id="sign-up-username"
				v-model="formData.username"
				type="text"
				autocomplete="username"
				label="Имя пользователя"
				placeholder="Введите имя пользователя"
				required
			/>
			<BaseFormInput
				id="sign-up-password"
				v-model="formData.password"
				type="password"
				autocomplete="new-password"
				label="Пароль"
				placeholder="Введите пароль"
				required
			/>
		</BaseFormFields>

		<BaseFormActions :disabled="isSigningIn">
			<BaseFormSubmit>
				Войти в аккаунт
			</BaseFormSubmit>
			<router-link :to="{ name: RouteNames.SIGN_UP_PAGE }" class="sign-in-form__redirect btn btn--color-secondary">
				Создать аккаунт
			</router-link>
		</BaseFormActions>
	</BaseForm>
</template>

<style scoped lang="sass">
.sign-in-form
  &__redirect
    --btn-line-height: unset
</style>
