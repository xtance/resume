<template>
	<div class="px-4 md:px-0">
		<IconDouble
			icon="call"
			title="Контакты"
			subtitle="Способы связаться со мной"
			class="py-8"
		/>
		<div class="grid grid-cols-2 md:grid-cols-3 gap-2">
			<CardContact
				v-for="contact in contacts"
				:key="contact.name"
				:contact="contact"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import CardContact from '@/components/card/CardContact.vue';
import IconDouble from '@/components/icon/IconDouble.vue';
export default {
	components: {
		IconDouble,
		CardContact,
	},
	data(){
		return {
			contacts: [
			{
					href: "https://t.me/xtance",
					icon: "tg.svg",
					name: "@xtance",
					color: "#28a8e9",
				},
				{
					href: "mailto:ni77ty@gmail.com",
					icon: "gmail.svg",
					name: "ni77ty@gmail.com",
					color: "#ea4335",
				},
				{
					href: "tel:+79011990955",
					icon: "phone.svg",
					name: "+79011990955",
					color: "#28cf66",
				},
				{
					href: "https://discordapp.com/users/268116822870458378",
					icon: "discord2.svg",
					name: "Discord: xtance",
					color: "#5865f2",
				},
				{
					href: "https://hlmod.net/members/xtance.95049/",
					icon: "hlmod.ico",
					name: "HLmod: xtance",
					color: "#e4e4e4",
				},
				{
					href: "https://github.com/xtance",
					icon: "github.svg",
					name: "GitHub",
					color: "#929292",
				},
			]
		}
	}
}
</script>

<style scoped>

</style>