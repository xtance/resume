<template>
	<a :href="href" class="flex items-center gap-2 opacity-80 hover:opacity-100">
		<i class="mi">{{ icon }}</i>
		<div class="">{{ text }}</div>
	</a>
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
			href: {
				type: String,
				required: true,
			},
		}
	}
</script>

<style lang="scss" scoped>

</style>