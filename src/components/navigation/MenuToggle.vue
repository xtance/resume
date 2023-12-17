<template>
	<div class="flex items-center gap-4 md:hidden w-full p-4 cursor-pointer" @click="$emit('toggle', !isOpened)">
			<i class="mi text-2xl">menu</i>
			<div class="text-lg flex-grow"><slot/></div>
			<i class="mi text-2xl">{{ isOpened ? 'expand_less' : 'expand_more' }}</i>
		</div>
</template>

<script lang="ts">
	export default {
		props: {
			isOpened: {
				type: Boolean,
			}
		},
		emits: {
			toggle(payload: boolean){
				return true;
			}
		},
	}
</script>

<style scoped>

</style>