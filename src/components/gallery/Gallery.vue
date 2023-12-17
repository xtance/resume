<template>
	<div
		v-if="galleryStore.isEnabled"
		class="fixed top-0 left-0 z-50"
	>
		gallery!
	</div>
</template>

<script lang="ts">
	import { useGalleryStore } from '@/stores/gallery';
	import { mapStores } from 'pinia';
	export default {
		computed: {
			...mapStores(useGalleryStore)
		}
	}
</script>

<style lang="scss" scoped>

</style>