<template class="">
	<Background />
  <div class="flex justify-center mt-8 md:mt-16">
    <div class="
      w-full md:w-3/4 2xl:w-1/2
      overflow-clip
    ">
      <header class="">
        <SelfInfo />
        <Navigation />
      </header>
      <RouterView />
    </div>
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