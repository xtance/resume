<template>
	<div>
		{{ text }}
	</div>
</template>

<script lang="ts">
	export default {
		props: {
			text: {
				type: String,
				required: true
			},
		}
	}
</script>

<style lang="scss" scoped>

</style>