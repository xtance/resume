<template>
	<div class="flex  my-1  backdrop-blur-xl">
		<!-- профиль -->
		<div class="
			w-2/5
			p-4
		">
			<Heading>???</Heading>
			<IconText icon="phone" text="+7911" />
		</div>
		<!-- информация -->
		<div class="
			w-3/5
			p-4
		">
			<Heading>Текст</Heading>
			<p>
				С 2017 года я пишу код, зачем-то.
			</p>
			
		</div>
	</div>

	<div class="p-4">
		Навыки
	</div>

	<div class="backdrop-blur-xl">
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
		</p>
	</div>
</template>

<script lang="ts">
import IconText from '@/components/IconText.vue';
import Heading from '@/components/Heading.vue';
import CardSkill from '@/components/CardSkill.vue';
export default {
	components: { IconText, Heading, CardSkill }
}
</script>

<style scoped></style>