<template>
	<div class="mt-8 px-4 md:px-0">

		<IconDouble
			icon="arrow_downward"
			title="Коммерческие проекты"
			subtitle="Заказы, выполненные для компаний или ИП"
			class="mb-8"
		/>

		<!-- Проект -->
		<div class="">
				<CardProject
					v-for="project in projectStore.commercial"
					:key="project.title"
					:project="project"
					class="mb-4"
				/>
		</div>

		<IconDouble
			icon="arrow_downward"
			title="Личные проекты"
			subtitle="Заказы, выполненные в свободное время"
			class="mb-8"
		/>

		<div class="">
				<CardProject
					v-for="project in projectStore.hobby"
					:key="project.title"
					:project="project"
					class="mb-4"
				/>
		</div>
	</div>
</template>

<script lang="ts">
import CardProject from '@/components/card/CardProject.vue';
import IconDouble from '@/components/icon/IconDouble.vue';
import { useProjectStore } from '@/stores/project';
import { mapStores } from 'pinia';

export default {
	computed: {
		...mapStores(useProjectStore)
	},
	data(){
		return {

		}
	},
	components: { CardProject, IconDouble }
}
</script>

<style lang="scss" scoped>

</style>