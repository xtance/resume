import type { IProject } from "@/interfaces/IProject";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useProjectStore = defineStore('project', () => {
	const commercial = ref<IProject[]>([
		{
			title: "Планшет для проекта Cloud RP",
			text: "Заказ по вёрстке компонента для интерфейса игрового сервера Cloud RP Germany. Теперь в Open Source!",
			images: [ "tablet3.png", "tablet0.png", "tablet1.png", "tablet2.png", "tablet4.png",  ],
			icons: [ 'vue', 'ts', 'tw' ],
			link: {
				href: 'https://github.com/xtance/',
				name: 'GitHub (TODO)',
			}
		},
		{
			title: "Сайт мебельного салона «SoulSwedMebel»",
			text: "Новая версия сайта с поиском по товарам, галереей, формой обратной связи. ",
			images: [ "soul0.png", "soul1.png", "soul2.png", ],
			icons: [ 'vue', 'ts', 'tw' ],
			link: {
				href: 'https://soulswedmebel.ru',
				name: 'Сайт',
			}
		},
		{
			title: "Панель управления серверами CS2",
			text: "Дашборд для проекта xPRO. Предоставляет функции для администраторов: управление метками, RCON связь с сервером. Позволяет просматривать статистику, список игроков. Включает в себя систему автоматической покупки привилегий через Enot.io",
			images: [ "xpro0.png", "xpro1.png", "xpro2.png", "xpro3.png" ],
			icons: [ 'svelte', 'ts', 'tw' ],
			link: {
				href: 'https://cs.xpro.pw',
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