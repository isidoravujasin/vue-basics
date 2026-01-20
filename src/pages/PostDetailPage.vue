<script setup>
  import { onMounted, ref } from 'vue'
  import { useRoute, RouterLink } from 'vue-router'
    import { getPost } from '@/services/api'

    const route = useRoute()

    const post = ref(null)
    const isLoading = ref(true)
    const error = ref(null)

    onMounted(async () => {
      try {
        post.value = await getPost(route.params.id)
      } catch (err) {
        error.value = 'Failed to load post.'
      } finally {
        isLoading.value = false
      }
    })
</script>

<template>
  <main class="page">
    <RouterLink class="back"to="/posts">← Back to Posts</RouterLink>
  
  <p v-if="isLoading"> Loading... </p>
  <p v-else-if="error" class="error"> Error: {{ error }} </p>

  <article v-else class="post">
    <h1>{{ post.title }}</h1>
    <p class="body">{{ post.body }}</p>
  </article>
  </main>
</template>

<style scoped>
.page { padding: 2rem; font-family: system-ui, sans-serif; }
.back { display: inline-block; margin-bottom: 1rem; }
.body { white-space: pre-line; line-height: 1.5; }
.error { color: #b00020; }
</style>
