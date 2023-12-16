<template class="">
	<Background />
  <div class="
    w-full md:w-3/4 2xl:w-1/2
    m-auto
    mt-8 md:mt-16
  ">
    <SelfInfo />
    <Navigation />
    <RouterView />
    <Footer />
  </div>
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navigation from './components/navigation/Navigation.vue';
import SelfInfo from './components/SelfInfo.vue';
import Background from './components/Background.vue';
import Footer from './components/Footer.vue';
export default {
  components: {
    RouterLink,
    RouterView,
    Navigation,
    SelfInfo,
    Background,
    Footer,
  }
}
</script>

<style>
nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>