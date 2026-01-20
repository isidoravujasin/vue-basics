import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/pages/HomePage.vue';
import PostsPage from '@/pages/PostsPage.vue';
import PostDetailPage from '@/pages/PostDetailPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/posts', name: 'posts', component: PostsPage },
    { path: '/posts/:id', name: 'post-detail', component: PostDetailPage }
  ],
})    

export default router