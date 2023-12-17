<template>
	<nav
		ref="nav"
		class="
			block
			z-10 
			sticky top-0
			select-none
		"
		:class="[ isSticky ? 'backdrop-blur-sm bg-zinc-800/90 rounded-b-md' : 'bg-black/5 md:bg-transparent', isOpened ? '' : '']" 
	><!-- bg-zinc-900 -->

			<MenuToggle :is-opened="isOpened" @toggle="(b) => isOpened = b">
				{{ isOpened ? 'Меню' : currentPageName }}
			</MenuToggle>

			<div class="w-full justify-between gap-1 md:flex" :class="[ isOpened ? 'block' : 'hidden ']">
				<Links :links="links" :isSticky="isSticky" />
			</div>
		
	</nav>

</template>

<script lang="ts">
	import Links from '@/components/navigation/Links.vue';
	import MenuToggle from './MenuToggle.vue';
	export default {
		data(){
			return {
				isOpened: false,
				isSticky: false,
				links: [
					{ to: "/", name: "Обо мне" },
					{ to: "/portfolio", name: "Портфолио" },
					{ to: "/contacts", name: "Контакты" },
				]
			}
		},
		computed: {
			currentPageName(){
				return this.links.find(link => link.to === this.$route.path)?.name || '?'
			}
		},
		components: {
			Links,
			MenuToggle,
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