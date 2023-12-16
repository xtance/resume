<template>
	<nav ref="nav" class="
		z-10 
		sticky top-0
	" >
		<div
			class="flex w-full justify-between gap-1"
			:class="[ isSticky ? 'backdrop-blur' : '']" 
		><!-- bg-zinc-900 -->
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
		</div>
		
	</nav>

</template>

<script lang="ts">
	export default {
		data(){
			return {
				isSticky: false,
				links: [
					{ to: "/", name: "Обо мне" },
					{ to: "/portfolio", name: "Портфолио" },
					{ to: "/contacts", name: "Контакты" },
				]
			}
		},
		mounted() {
				// отслеживание панели навигации
				const nav = this.$refs.nav as HTMLElement;
				if (!nav) return;
				new IntersectionObserver(
					(entries) => {
						const entry = entries[0];
						if (!entry) return;
						this.isSticky = !entry.isIntersecting;
					},
					{
						rootMargin: '-1px 0px 0px 0px',
  					threshold: [1],
					}
				).observe(nav);
		},
	}
</script>

<style scoped>

</style>