import { createRouter, createWebHistory } from 'vue-router';
import ListView from '@/components/list/ListView.vue';
import ViewNote from '@/components/common/ViewNote.vue';

const routes = [
  { path: '/', component: ListView },
  { path: '/note/:id', name: 'ViewNote', component: ViewNote }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;