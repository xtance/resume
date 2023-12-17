import { defineStore } from "pinia";
import { ref } from "vue";

export const useGalleryStore = defineStore('gallery', () => {

	const isEnabled = ref(true);
	const images = ref([] as string[]);

	const enable = (_images: string[]) => {
		images.value = _images;
		isEnabled.value = true;
	}

	const disable = () => {
		isEnabled.value = false;
	}

	return {
		isEnabled,
		images,
		enable,
		disable,
	}
});