<script setup lang="ts">

</script>

<template>
	<div class="form-actions">
		<slot />
	</div>
</template>

<style scoped lang="sass">
.form-actions
  display: flex
  flex-direction: column
  gap: 16px

  @media screen and (max-width: 768px)
    gap: 8px
</style>
