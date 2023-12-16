<template>
	<div class="grid grid-cols-3">
		<img
			loading="lazy"
			class="rounded-md"
			:src=" '/screenshots/' + project.images[0] "
		/>
		<div class="p-4">
			<div class="text-xl light">
				{{ project.title }}
			</div>
			<div v-html="project.text" class="text-lg opacity-80">
				
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