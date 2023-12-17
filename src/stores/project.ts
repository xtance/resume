import type { IProject } from "@/interfaces/IProject";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useProjectStore = defineStore('project', () => {
	const commercial = ref<IProject[]>([
		{
			title: "Мебельный салон",
			text: "...",
			images: [ "soul0.png", "soul1.png", "soul1.png","soul1.png", ],
			icons: [ 'vue' ],
			link: {
				href: 'https://soulswedmebel.ru',
				name: 'Сайт',
			}
		},
		{
			title: "Планшет",
			text: "...",
			images: [ "tablet3.png", "tablet0.png", "tablet1.png", "tablet2.png", "tablet4.png",  ],
			icons: [ 'vue' ],
			link: {
				href: 'https://soulswedmebel.ru',
				name: 'Сайт',
			}
		},
	]);
	const hobby = ref<IProject[]>([
		{
			title: "Мебельный салон",
			text: "...",
			images: [ "soul0.png", "soul1.png" ],
			icons: [ 'vue' ],
			link: {
				href: 'https://soulswedmebel.ru',
				name: 'Сайт',
			}
		},
		{
			title: "Планшет",
			text: "...",
			images: [ "tablet3.png", "tablet1.png" ],
			icons: [ 'vue' ],
			link: {
				href: 'https://soulswedmebel.ru',
				name: 'Сайт',
			}
		},
	]);
	return {
		commercial,
		hobby,
	}
});

/* export const useProjectStoreOptions = defineStore('project', {
	state: () => ({
		//
	}),
	getters: {
		get(state){
			return state.projects
		}
	},
	actions: {

	}
}); */