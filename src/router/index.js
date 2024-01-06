// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/PageHome.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
