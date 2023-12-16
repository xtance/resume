<template>
	<div class="flex items-center gap-4">
		<i class="mi text-4xl">{{ icon }}</i>
		<div class="">
			<div class="text-xl light ">{{ title }}</div>
			<div class="text-lg opacity-80">{{ subtitle }}</div>
		</div>
	</div>
</template>

<script lang="ts">
	export default {
		props: {
			icon: {
				type: String,
				required: true,
			},
			title: {
				type: String,
				required: true,
			},
			subtitle: {
				type: String,
				required: true,
			},
		}
	}
</script>

<style lang="scss" scoped>

</style>