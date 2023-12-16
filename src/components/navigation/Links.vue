<template>
	<Link
			v-for="link in links"
			:key="link.to"
			:link="link"
	/>
</template> 

<script lang="ts">
	import type { PropType } from 'vue';
	import type { ILink } from '@/components/ILink';
	import Link from './Link.vue';
	export default {
		props: {
			links: {
				type: Object as PropType<ILink[]>,
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