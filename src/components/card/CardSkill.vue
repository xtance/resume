<template>
	<div
		
		@mouseenter="hover = true"
		@mouseleave="hover = false"
		class="
			rounded-md 
			flex flex-col items-center justify-start
			p-4 py-8 cursor-pointer select-none
		"
		:class="hover ? 'bg-white/10' : 'bg-gradient-to-b from-white/5'"
	>
		<!-- <div class="mi text-2xl">
			{{ icon }}
		</div> -->
		<img width="50" height="50" :src="icon" :class="hover ? '' : 'grayscale'" />
		<div class="text-xl py-2 bold">
			{{ title }}
		</div>
		<p v-html="text" class="text-sm leading-4 text-center duration-100" :class="{
			'opacity-100': hover,
			'opacity-70': !hover,
		}">
			
		</p>
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
			text: {
				type: String,
				required: true,
			},
		},
		data(){
			return {
				hover: false,
			}
		}
	}
</script>

<style scoped>

</style>