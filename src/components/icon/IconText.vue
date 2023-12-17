<template>
	<div class="flex items-center gap-2">
		<i class="mi">{{ icon }}</i>
		<div class="">{{ text }}</div>
	</div>
</template>

<script lang="ts">
	export default {
		props: {
			icon: {
				type: String,
				required: true,
			},
			text: {
				type: String,
				required: true,
			},
		}
	}
</script>

<style scoped>

</style>