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
  </div>
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue';
import SelfInfo from './components/SelfInfo.vue';
import Background from './components/Background.vue';
export default {
  components: {
    RouterLink,
    RouterView,
    Navigation,
    SelfInfo,
    Background,
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