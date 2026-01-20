<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="header">
    <nav class="nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/posts">Posts</RouterLink>
    </nav>
  </header>
    <RouterView />
</template>

<style scoped>
  .header { padding: 1rem 2rem; border-bottom: 1px solid #eee; }
  .nav { display: flex; gap: 1rem; font-family: system-ui, sans-serif; }
</style>