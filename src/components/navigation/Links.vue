<template>
	<Link
			v-for="link in links"
			:key="link.to"
			:link="link"
			:isSticky="isSticky"
	/>
</template> 

<script lang="ts">
	import type { PropType } from 'vue';
	import type { ILink } from '@/interfaces/ILink';
	import Link from './Link.vue';
	export default {
		props: {
			links: {
				type: Object as PropType<ILink[]>,
				required: true,
			},
			isSticky: {
				type: Boolean,
				required: true,
			}
		},
		components: {
			Link,
		}
	}
</script>

<style lang="scss" scoped>

</style>../../interfaces/ILink