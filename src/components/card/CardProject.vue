<template>
	<div class="bg-gradient-to-t from-white/5  rounded-md">

		<!-- Галерея -->
		<div class="
			grid grid-cols-1 lg:grid-cols-3 grid-rows-1 gap-2 overflow-hidden
			
		">

			<img
				v-for="(image, index) in project.images.slice(0, maxImagesPerProject)"
				:key="image"
				loading="lazy"
				class="rounded-md cursor-pointer"
				:class="index > 0 ? 'hidden lg:block' : ''"
				:src=" '/screenshots/' + image "
				@click="galleryStore.enable(project.images, index)"
			/>
			
		</div>

		<!-- Текст -->
		<div class="p-4">
			<div class="text-xl light pb-2">
				{{ project.title }}
			</div>
			<div v-html="project.text" class="text-lg opacity-80">
				
			</div>
		</div>

		<!-- ссылки -->
		<div class="p-4 border-t border-white/5 flex justify-between">
			<div class="">
				<IconLink icon="open_in_new" :href="project.link.href" :text="project.link.name" class="text-xl" />
			</div>
			<div class="flex justify-center gap-2">
				<img width="24" height="24" :src="`/icons/${icon}.svg`" :alt="icon" v-for="icon in project.icons" :key="icon" />
			</div>
		</div>

	</div>
	

	
</template>

<script lang="ts">
import type { PropType } from 'vue';
import type { IProject } from '@/interfaces/IProject';
import IconLink from '../icon/IconLink.vue';
import { mapStores } from 'pinia';
import { useGalleryStore } from '@/stores/gallery';

	export default {
    data() {
        return {
            maxImagesPerProject: 3
        };
    },
    props: {
        project: {
            type: Object as PropType<IProject>,
            required: true,
        }
    },
		computed: {
			...mapStores(useGalleryStore),
		},
    components: { IconLink }
}
</script>

<style scoped>
</style>