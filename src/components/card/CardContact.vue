<template>
	<a
		@mouseenter="hover = true"
		@mouseleave="hover = false"
		:href="contact.href"
		target="_blank"
		class="
			flex flex-col justify-end aspect-square
			bg-white/5 rounded-md
			relative
			duration-200
			hover:scale-95
		"
		:style="hover ? `background-color: ${contact.color}90` : `background-color: ${contact.color}60`"
		ref="card"
	>
		<img
			class="
				absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
				w-8 md:w-16 
				h-8 md:h-16 
			"
			:src="`/icons/${contact.icon}`"
		/>
		<div class="w-full text-center pb-2 text-sm md:text-base">{{ contact.name }}</div>
	</a>
</template>

<script lang="ts">
import type { IContact } from '@/interfaces/IContact';
import type { PropType } from 'vue';
export default {
	data(){
		return {
			hover: false
		}
	},
	props: {
		contact: {
			type: Object as PropType<IContact>,
			required: true,
		}
	},
}
</script>

<style lang="scss" scoped>

</style>