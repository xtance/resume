<template>
	<i class="
		mi stroke text-4xl text-center
		p-4 md:p-8 cursor-pointer select-none
		opacity-80 hover:opacity-100 active:animate-ping
	">
		{{ icon }}
	</i>
</template>

<script lang="ts">
	export default {
		props: {
			icon: {
				type: String,
				required: true,
			}
		}
	}
</script>

<style scoped>
	.stroke, .stroke>* {
		text-shadow:
			#000 0px 0 2px, #000 0px 0px 2px, #000 0px 0px 2px,
			#000 0px 0px 2px, #000 0px 0px 1px !important;
		-webkit-font-smoothing: antialiased;
	}
</style>