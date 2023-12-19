<template>
	<div
		id="background"
		style="top: 0; right: 0; left: 0; bottom: 0"
	>
		
	</div>
</template>

<script lang="ts">
export default {
}
</script>

<style scoped>
	#background {
		position: fixed;
		z-index: -1;
		background: rgb(93,97,108);
		background: radial-gradient(circle, rgba(93,97,108,1) 0%, rgba(38,42,51,1) 76%, rgba(30,34,43,1) 100%);
	}
</style>