<template>
	<div class="mt-8 px-4 md:px-0">

		<IconDouble
			icon="arrow_downward"
			title="Коммерческие проекты"
			subtitle="Заказы, выполненные для компаний или ИП"
			class="mb-8"
		/>

		<!-- Проект -->
		<div class="overflow-hidden">
				<CardProject
					v-for="project in projects"
					:key="project.title"
					:project="project"
					class="mb-4"
				/>
		</div>
	</div>
</template>

<script lang="ts">
import CardProject from '@/components/card/CardProject.vue';
import type { IProject } from '@/interfaces/IProject';
import IconDouble from '@/components/icon/IconDouble.vue';

export default {
	data(){
		return {
			projects: [
			{
					title: "Мебельный салон",
					text: "...",
					images: [ "soul0.png", "soul1.png" ]
				},
				{
					title: "Мебельный салон",
					text: "...",
					images: [ "soul0.png", "soul1.png" ]
				},
			] as IProject[]
		}
	},
	components: { CardProject, IconDouble }
}
</script>

<style lang="scss" scoped>

</style>