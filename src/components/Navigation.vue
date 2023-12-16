<template>
	<nav class="
		flex justify-between gap-1
		rounded-t-md overflow-clip
		backdrop-blur-xl
	">
		<RouterLink
			v-for="link in links"
			:key="link.to"
			class="
				w-full p-4
				text-center
				bg-black/20
			"
			:class="{
				'bg-black/10': $route.path === link.to
			}"
			:to="link.to"
		>
			{{ link.name }}
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
		}
	}
</script>

<style scoped>

</style>