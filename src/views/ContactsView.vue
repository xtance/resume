<template>
	<div class="py-8">
		<IconDouble
			icon="arrow_downward"
			title="Коммерческие проекты"
			subtitle="Заказы, выполненные для компаний или ИП"
			class="mb-8"
		/>
	</div>
	<div class="grid grid-cols-3 gap-2">

	</div>
</template>

<script lang="ts">
import IconDouble from '@/components/icon/IconDouble.vue';

export default {
	components: {
		IconDouble
	},
	data(){
		return {
			contacts: [
				{
					
				}
			]
		}
	}
}
</script>

<style scoped>

</style>