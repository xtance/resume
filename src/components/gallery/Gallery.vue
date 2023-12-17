<template>
	<div
		v-if="galleryStore.isEnabled"
		class="
			fixed top-0 left-0 z-40
			w-full h-full
			 bg-black/70
			p-2 lg:p-16
			backdrop-blur-sm
		"
		@click="galleryStore.disable()"
	>
		<!-- фото -->
		<div
			class="
				top-0 left-0 w-full h-full
				flex flex-col justify-center
				bg-contain bg-center bg-no-repeat
				rounded-md overflow-hidden
			"
			:style="`background-image: url('/screenshots/${galleryStore.current}')`"
		>
			<div class="">
				<!-- <img class="object-contain rounded-md shadow-xl" :src="`/screenshots/${galleryStore.current}`" /> -->
			</div>
		</div>
		

		<div class="
			absolute bottom-0 left-0
			w-screen h-screen
			flex justify-between items-center
			
		">
			<GalleryButton @click.stop="galleryStore.previous()" icon="arrow_back" />
			<!-- <GalleryButton @click.stop="galleryStore.disable()" icon="close" /> -->
			<GalleryButton @click.stop="galleryStore.next()" icon="arrow_forward" />
		</div>
	</div>
</template>

<script lang="ts">
	import { useGalleryStore } from '@/stores/gallery';
	import { mapStores } from 'pinia';
	import GalleryButton from './GalleryButton.vue';
	export default {
    computed: {
        ...mapStores(useGalleryStore)
    },
    components: { GalleryButton }
}
</script>

<style lang="scss" scoped>
</style>