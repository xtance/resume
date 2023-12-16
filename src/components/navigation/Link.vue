<template>
	<RouterLink
			class="
				w-full
				duration-100
				hover:[&>*]:font-bold
			"
			:class="isActive ? 'bg-white/50 md:bg-transparent' : ''"
			:to="link.to"
		>
			<div class="flex items-center p-4 gap-4">
				<i class="text-2xl mi">navigate_next</i>
				<div class="text-lg" :class="[isActive ? 'bold' : '']">{{ link.name }}</div>
			</div>
			<div class="h-[1px] rounded-full hidden md:block" :class="[isActive ? 'bg-white' : 'bg-white/50']"></div>
			
		</RouterLink>
</template>

<script lang="ts">
	import type { PropType } from 'vue';
	import type { ILink } from './ILink';
	export default {
		computed: {
			isActive(){
				return this.$route.path === this.link.to;
			}
		},
		props: {
			link: {
				type: Object as PropType<ILink>,
				required: true,
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>