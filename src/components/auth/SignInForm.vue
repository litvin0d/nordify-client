<script setup lang="ts">
import {
	BaseForm,
	BaseFormActions,
	BaseFormDescription,
	BaseFormFields,
	BaseFormInput,
	BaseFormSubmit,
	BaseFormTitle,
} from '@/components/ui/form';
import { RouteNames } from '@/router/types';
</script>

<template>
	<BaseForm class="sign-in-form">
		<BaseFormTitle>
			Nordify
		</BaseFormTitle>

		<BaseFormDescription>
			Войдите в свой аккаунт в мессенджере
		</BaseFormDescription>

		<BaseFormFields>
			<BaseFormInput
				id="sign-up-username"
				type="text"
				autocomplete="username"
				label="Имя пользователя"
				placeholder="Введите имя пользователя"
				required
			/>
			<BaseFormInput
				id="sign-up-password"
				type="password"
				autocomplete="new-password"
				label="Пароль"
				placeholder="Введите пароль"
				required
			/>
		</BaseFormFields>

		<BaseFormActions>
			<BaseFormSubmit>Войти в аккаунт</BaseFormSubmit>
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
