<script setup lang="ts">
import {
	BaseForm,
	BaseFormActions,
	BaseFormDescription,
	BaseFormFields,
	BaseFormInput,
	BaseFormRadio,
	BaseFormRadios,
	BaseFormSubmit,
	BaseFormTitle,
} from '@/shared/ui/form';
import { RouteNames } from '@/app/providers/router/types';
</script>

<template>
	<BaseForm class="sign-up-form">
		<BaseFormTitle>
			Nordify
		</BaseFormTitle>

		<BaseFormDescription>
			Создайте новый аккаунт в мессенджере
		</BaseFormDescription>

		<BaseFormFields>
			<BaseFormInput
				id="sign-up-username"
				type="text"
				autocomplete="username"
				label="Имя пользователя"
				placeholder="Придумайте имя пользователя"
				required
			/>
			<BaseFormInput
				id="sign-up-full-name"
				type="text"
				autocomplete="given-name"
				label="Имя"
				placeholder="Введите своё имя"
				required
			/>
			<BaseFormInput
				id="sign-up-password"
				type="password"
				autocomplete="new-password"
				label="Пароль"
				placeholder="Придумайте пароль"
				required
			/>
			<BaseFormInput
				id="sign-up-password-confirm"
				type="password"
				autocomplete="new-password"
				label="Подтверждение пароля"
				placeholder="Повторите пароль"
				required
			/>
			<BaseFormRadios title="Выберите пол">
				<BaseFormRadio
					id="sign-up-gender-male"
					name="gender"
					label="Мужской"
					value="male"
				/>
				<BaseFormRadio
					id="sign-up-gender-female"
					name="gender"
					label="Женский"
					value="female"
				/>
				<BaseFormRadio
					id="sign-up-gender-other"
					name="gender"
					label="Другой"
					value="other"
				/>
			</BaseFormRadios>
		</BaseFormFields>

		<BaseFormActions>
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
