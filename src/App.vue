<template class="bg-red-400">
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/test">Test</RouterLink>
    </nav>
  </header>
  <div class="flex justify-center">
    <div class="
      w-full md:w-3/4 2xl:w-1/2
      bg-white shadow-lg
      rounded-md overflow-clip
    ">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
export default {
  components: {
    RouterLink,
    RouterView
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