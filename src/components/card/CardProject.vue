<template>
	<div class="grid grid-cols-3">
		<img
			loading="lazy"
			class="rounded-md"
			:src=" '/screenshots/' + project.images[0] "
		/>
		<div class="p-4">
			<div class="bold opacity-80 text-xl">
				{{ project.title }}
			</div>
			<div v-html="project.text" class="text-lg">
				
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import type { IProject } from '@/interfaces/IProject';
	export default {
		props: {
			project: {
				type: Object as PropType<IProject>,
				required: true,
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>