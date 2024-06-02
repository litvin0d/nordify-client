<script setup lang="ts">

</script>

<template>
	<fieldset class="form-fields">
		<slot />
	</fieldset>
</template>

<style scoped lang="sass">
.form-fields
  display: flex
  flex-direction: column
  gap: 24px
  padding: 0
  margin: 0
  border: none

  @media screen and (max-width: 768px)
    gap: 12px
</style>
