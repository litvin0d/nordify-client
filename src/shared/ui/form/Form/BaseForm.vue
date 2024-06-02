<script setup lang="ts">

</script>

<template>
	<form class="form">
		<slot />
	</form>
</template>

<style scoped lang="sass">
.form
  display: flex
  flex-direction: column
  gap: 32px
  padding: 32px

  max-width: 380px
  width: 380px

  background-color: var(--color-neutral-700)
  border-radius: var(--radius-xl)

  @media screen and (max-width: 768px)
    gap: 16px
    padding: 24px

  @media screen and (max-width: 480px)
    max-width: unset
    width: 100%
    border-radius: 0
    align-self: stretch
    justify-content: center
</style>
