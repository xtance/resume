<template>
	<div class="flex flex-wrap mt-8">
		<!-- информация -->
		<div class="
			w-full sm:w-3/5
			p-4
		">
			<p class="">
				Как веб-разработчик, я специализируюсь на создании пользовательских интерфейсов.
				Используя современные фреймворки для работы с JS/TS, я могу превратить макет
				в полноценное приложение с адаптивной вёрсткой. <br>  <br>
				Я регулярно изучаю новые технологии для расширения своих навыков.  <br>
				Окончив колледж по специальности «техник-программист», я готов
				к работе над новыми интересными проектами в сфере веб-разработки.
			</p>
		</div>

		<!-- связь -->
		<div class="
			w-full sm:w-2/5
			p-4
			flex flex-col sm:items-end
		">
			<IconLink icon="place" text="Санкт-Петербург" href="#" />
			<IconLink icon="phone" text="+79011990955" href="tel:+79011990955" />
			<IconLink icon="telegram" text="Telegram" href="https://t.me/xtance" />
			<IconLink icon="data_object" text="GitHub" href="https://github.com/xtance" />
		</div>
		
	</div>

	<div class="p-4">
		Навыки:
	</div>

	<div class="grid grid-cols-2 lg:grid-cols-4 mx-2 lg:mx-0 gap-1 mb-2">
		<CardSkill icon="/icons/ts.svg" title="TypeScript" text="Разработка приложений на фронтенде и бэкенде" />
		<CardSkill icon="/icons/vue.svg" title="Vue" text="Знание Options и Composition API, компонентный подход" />
		<CardSkill icon="/icons/css.svg" title="CSS" text="Адаптивная вёрстка по стандартам CSS" />
		<CardSkill icon="/icons/tw.svg" title="Tailwind" text="Быстрая стилизация компонентов на TW 3+" />
		<CardSkill icon="/icons/node.svg" title="Node.JS" text="Использование системных API, работа с Express и Fastify" />
		<CardSkill icon="/icons/svelte.svg" title="Svelte+Kit" text="Создание фронтенда на Svelte, перенос приложения с React/Vue" />
		<CardSkill icon="/icons/chrome.svg" title="CEF" text="Адаптация веб-приложения под Chromium Embedded Framework" />
		<CardSkill icon="/icons/nginx.svg" title="HTTP" text="Взаимодействие клиент-сервер, <br>настройка NGINX" />
	</div>

	<div class="bg-gradient-to-b from-white/5 rounded-t-md mx-2 lg:mx-0">
		<div class="p-4 border-b border-white/5">
			<Heading class="pb-2">Опыт разработки проектов</Heading>
			<RouterLink to="/portfolio" class="flex items-center gap-2 animate-pulse">
				<i class="mi">arrow_forward_ios</i>
				<div>Подробнее в портфолио</div>
			</RouterLink>
		</div>

		<TextExperience>
			<template v-slot:year>2022-2023</template>
			<template v-slot:info>Разрабатывал панель управления серверами для администраторов и игроков на SvelteKit.</template>
		</TextExperience>

		<TextExperience>
			<template v-slot:year>2022</template>
			<template v-slot:info>Участвовал в региональном этапе WorldSkills Russia VII в компетенции "Веб-технологии" (2 место).</template>
		</TextExperience>

		<TextExperience>
			<template v-slot:year>2022</template>
			<template v-slot:info>Верстал интерфейс по макету Figma для немецкого проекта Cloud RP на Vue + Tailwind.</template>
		</TextExperience>

		<TextExperience>
			<template v-slot:year>2021-2022</template>
			<template v-slot:info>Работал над сайтом мебельного салона в Санкт-Петербурге на Vue 3, с адаптивной CSS-вёрсткой.</template>
		</TextExperience>

		<TextExperience>
			<template v-slot:year>2021</template>
			<template v-slot:info>Проходил практику в Санкт-Петербургском информационно-аналитическом центре (СПб ИАЦ), работал с базами данных.</template>
		</TextExperience>

		<TextExperience>
			<template v-slot:year>2020</template>
			<template v-slot:info>Разрабатывал интерфейс для сервера alt:V с помощью CEF, на фреймворке Svelte 3. <br>Построено взаимодействие с серверной частью на событиях, реализован механизм RPC.</template>
		</TextExperience>

		<TextExperience>
			<template v-slot:year>2018-2022</template>
			<template v-slot:info>Проходил обучение в Политехническом Колледже Городского Хозяйства (СПб ГБПОУ «ПКГХ»). <br>В основном изучал веб-технологии, но был практический опыт с C# и C++.</template>
		</TextExperience>

		<TextExperience>
			<template v-slot:year>2017</template>
			<template v-slot:info>Начал знакомство с программированием с плагинов на SourcePawn, скриптов на PHP. <br>Изучал SQL-запросы. Занимался в основном бэкендом, в дальнейшем решил перейти на фронтэнд и веб-дизайн</template>
		</TextExperience>
		
	</div>
</template>

<script lang="ts">
import IconText from '@/components/icon/IconText.vue';
import Heading from '@/components/Heading.vue';
import CardSkill from '@/components/card/CardSkill.vue';
import IconLink from '@/components/icon/IconLink.vue';
import TextExperience from '@/components/text/TextExperience.vue';
export default {
	components: { IconText, Heading, CardSkill, IconLink, TextExperience }
}
</script>

<style scoped></style>