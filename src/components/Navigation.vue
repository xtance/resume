<template>
	<nav class="
		flex justify-between gap-1
		overflow-clip
		backdrop-blur-xl 
	">
		<RouterLink
			v-for="link in links"
			:key="link.to"
			class="
				w-full
				text-center
				duration-100
				hover:bg-white/5 rounded-t-md
			"
			:to="link.to"
		>
			<div class="p-4">{{ link.name }}</div>
			<div class="h-[1px]  rounded-full" :class="[$route.path === link.to ? 'bg-white' : 'bg-white/50']"></div>
			
		</RouterLink>
	</nav>

</template>

<script lang="ts">
	export default {
		data(){
			return {
				links: [
					{ to: "/", name: "Обо мне" },
					{ to: "/portfolio", name: "Портфолио" },
					{ to: "/contacts", name: "Контакты" },
				]
			}
		},
	}
</script>

<style scoped>

</style>