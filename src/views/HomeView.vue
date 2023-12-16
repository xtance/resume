<template>
	<div class="flex mt-8">
		<!-- информация -->
		<div class="
			w-3/5
			p-4
		">
			<p class="text-justify">
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
			w-2/5
			p-4
			flex flex-col items-end
		">
			<Heading>Связь</Heading>
			<IconLink icon="phone" text="+79011990955" href="tel:+79011990955" />
			<IconLink icon="telegram" text="Telegram" href="https://t.me/xtance" />
			<IconLink icon="data_object" text="GitHub" href="https://t.me/xtance" />
		</div>
		
	</div>

	<div class="p-4">
		Навыки
	</div>

	<div class="">
		<div class="grid grid-cols-4 gap-1">
			<CardSkill icon="phone" title="TypeScript" text="Разработка приложений на фронтенде и бэкенде" />
			<CardSkill icon="phone" title="Vue" text="Знание Options и Composition API, компонентный подход" />
			<CardSkill icon="phone" title="CSS" text="Адаптивная вёрстка по стандартам CSS" />
			<CardSkill icon="phone" title="Tailwind" text="Быстрая стилизация компонентов на TW 3+" />
			<CardSkill icon="phone" title="Node.JS" text="Использование системных API, работа с Express и Fastify" />
			<CardSkill icon="phone" title="Svelte+Kit" text="Создание фронтенда на Svelte, перенос приложения с React/Vue" />
			<CardSkill icon="phone" title="CEF" text="Адаптация веб-приложения под Chromium Embedded Framework" />
			<CardSkill icon="phone" title="HTTP" text="Взаимодействие клиент-сервер, <br>REST API" />
		</div>
	</div>

	<div class="bg-gradient-to-b from-white/5 rounded-t-md">
		<Heading class="p-4 border-b border-white/5">Опыт работы</Heading>
		<p class="p-4">
			Обо мне <br>
			Обо мне <br>
			Обо мне <br>
			Обо мне <br>
			Обо мне <br>
			Обо мне <br>
			Обо мне <br>
			Обо мне <br>
			Обо мне <br>
			Обо мне <br>
			Обо мне <br>
			Обо мне <br>
			Обо мне <br>
			Обо мне <br>
			Обо мне <br>
			Обо мне <br>
		</p>
	</div>
</template>

<script lang="ts">
import IconText from '@/components/icon/IconText.vue';
import Heading from '@/components/Heading.vue';
import CardSkill from '@/components/CardSkill.vue';
import IconLink from '@/components/icon/IconLink.vue';
export default {
	components: { IconText, Heading, CardSkill, IconLink }
}
</script>

<style scoped></style>