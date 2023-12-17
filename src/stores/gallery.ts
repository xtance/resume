import { defineStore } from "pinia";
import { ref } from "vue";
import { Arr } from "@/helpers/Arr";

export const useGalleryStore = defineStore('gallery', () => {

	const isEnabled = ref(false);
	const images = ref([] as string[]);
	const current = ref('');

	const enable = (_images: string[], _index: number = 0) => {
		images.value = _images;
		isEnabled.value = true;
		current.value = _images[_index];
		const body = document.body;
		if (body) body.style.overflowY = 'hidden';
	}

	const disable = () => {
		isEnabled.value = false;
		const body = document.body;
		if (body) body.style.overflowY = 'scroll';
	}

	const next = () => {
		current.value = Arr.getNext(images.value, current.value);
	}

	const previous = () => {
		current.value = Arr.getPrevious(images.value, current.value);
	}

	return {
		isEnabled,
		images,
		current,
		enable,
		disable,
		next,
		previous,
	}
});