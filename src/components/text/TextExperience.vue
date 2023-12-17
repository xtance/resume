<template>
	<div class="p-4 border-b border-white/5">
		<div class="opacity-80 bold flex gap-2 items-center pb-2">
			<i class="mi text-xl">today</i>
			<slot name="year"/>
		</div>
		<div>
			<slot name="info"/>
		</div>
	</div>
</template>

<script lang="ts">
	export default {
		
	}
</script>

<style scoped>

</style>