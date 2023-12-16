<template>
	<div class="flex flex-wrap mt-8">
		<!-- информация -->
		<div class="
			w-full sm:w-3/5
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
			w-full sm:w-2/5
			p-4
			flex flex-col sm:items-end
		">
			<IconLink icon="phone" text="+79011990955" href="tel:+79011990955" />
			<IconLink icon="telegram" text="Telegram" href="https://t.me/xtance" />
			<IconLink icon="data_object" text="GitHub" href="https://t.me/xtance" />
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
		<Heading class="p-4 border-b border-white/5">Опыт разработки проектов</Heading>

		<TextExperience>
			<template v-slot:year>2022-2023</template>
			<template v-slot:info>Разработка веб-панели</template>
		</TextExperience>

		<TextExperience>
			<template v-slot:year>2022</template>
			<template v-slot:info>Участие в WorldSkills VI</template>
		</TextExperience>

		<TextExperience>
			<template v-slot:year>2022</template>
			<template v-slot:info>Вёрстка макета планшета</template>
		</TextExperience>

		<TextExperience>
			<template v-slot:year>2021-2022</template>
			<template v-slot:info>Разработка сайта мебельного салона</template>
		</TextExperience>

		<TextExperience>
			<template v-slot:year>2021</template>
			<template v-slot:info>Практика в ГУП ИАЦ</template>
		</TextExperience>

		<TextExperience>
			<template v-slot:year>2020</template>
			<template v-slot:info>Сервер alt:V</template>
		</TextExperience>

		<TextExperience>
			<template v-slot:year>2018-2022</template>
			<template v-slot:info>Проекты в колледже</template>
		</TextExperience>

		<TextExperience>
			<template v-slot:year>2017</template>
			<template v-slot:info>Сервер в CS</template>
		</TextExperience>
		
	</div>
</template>

<script lang="ts">
import IconText from '@/components/icon/IconText.vue';
import Heading from '@/components/Heading.vue';
import CardSkill from '@/components/CardSkill.vue';
import IconLink from '@/components/icon/IconLink.vue';
import TextExperience from '@/components/text/TextExperience.vue';
export default {
	components: { IconText, Heading, CardSkill, IconLink, TextExperience }
}
</script>

<style scoped></style>