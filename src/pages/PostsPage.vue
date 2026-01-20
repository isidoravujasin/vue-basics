<script setup>
    import { onMounted, ref } from 'vue'
    import { getPosts } from '@/services/api'
    import { RouterLink } from 'vue-router'

    import PostList from '@/components/PostList.vue'

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

  <PostList v-else :posts="posts" />
  </main>
</template>

<style scoped>
.page { padding: 2rem; font-family: system-ui, sans-serif; }
.list { padding-left: 1.2rem; }
.error { color: #b00020; }
</style>