<script setup>
    import { RouterLink } from 'vue-router'

    defineProps({
        posts: {
            type: Array,
            required: true
        }
    })
</script>

<template>
    <ul class="list">
        <li v-for="post in posts" :key="post.id" class="item">
            <RouterLink :to="`/posts/${post.id}`" class="link">
                {{ post.title }}
            </RouterLink>
        </li>
    </ul>
</template>

<style scoped>
.list { padding-left: 1.2rem; }
.item { margin: 0.35rem 0; }
.link { text-decoration: none; }
.link:hover { text-decoration: underline; }
</style>