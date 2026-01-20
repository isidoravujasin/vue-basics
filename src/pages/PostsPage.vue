<script setup>
    import { onMounted, ref } from 'vue'
    import { getPosts } from '@/services/api'
    import { RouterLink } from 'vue-router'

    const posts = ref([])
    const isLoading = ref(true)
    const error = ref(null)

    onMounted(async () => {
      try {
        posts.value = await getPosts()
      } catch (err) {
        error.value = 'Failed to load posts.'
      } finally {
        isLoading.value = false
      }
    })
</script>

<template>
  <main class="page">
  <h1>Posts</h1>

  <p v-if="isLoading"> Loading... </p>
  <p v-else-if="error" class="error"> Error: {{ error }} </p>

    <ul v-else class="list">
        <li v-for="post in posts" :key="post.id">
            <RouterLink :to="`/posts/${post.id}`">
        {{ post.title }}
            </RouterLink>
        </li>
    </ul>
  </main>
</template>

<style scoped>
.page { padding: 2rem; font-family: system-ui, sans-serif; }
.list { padding-left: 1.2rem; }
.error { color: #b00020; }
</style>