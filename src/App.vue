<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/test">Test</RouterLink>
    </nav>
  </header>
  <div class="w-full p-2">
    <RouterView />
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