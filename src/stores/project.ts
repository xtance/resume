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
				href: 'https://github.com/xtance/cloud-tablet',
				name: 'GitHub',
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
			title: "Интерфейс для сервера alt:V",
			text: "GUI отображается поверх игры через Chromium Embedded Framework. Проект включает в себя меню сервера с вкладками, инвентарь с drag-n-drop, крафт предметов, форму регистрации, диалоговые меню, открытие кейсов.",
			images: [ "altv1.png", "altv2.png", "altv3.png", "altv4.png", "altv5.png", "altv0.png",  ],
			icons: [ 'svelte', 'node', 'chrome' ],
			link: {
				href: 'https://altv.run/1mYtfig',
				name: 'Сервер alt:V',
			}
		},
		{
			title: "Онлайн-игра «Пазлы»",
			text: "Курсовая работа в колледже. Браузерная игра на нативном JS - сбор пазлов на скорость в одиночку или против соперника. Для связи с Node.JS сервером используется Socket.IO",
			images: [ "puzzle0.png", "puzzle1.png", "puzzle2.png", ],
			icons: [ 'js', 'node', 'socketio' ],
			link: {
				href: 'https://github.com/xtance/Puzzle',
				name: 'GitHub',
			}
		},
		{
			title: "Плагины для SourceMod",
			text: "Open Source плагины к srcds с различным функционалом. ЯП - <a href='https://github.com/alliedmodders/sourcepawn'>SourcePawn (C)</a>. Более 3000 скачиваний с 2018",
			images: [ "plugin0.png",  ],
			icons: [ 'c' ],
			link: {
				href: 'https://hlmod.net/resources/authors/xtance.95049/',
				name: 'HLmod',
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