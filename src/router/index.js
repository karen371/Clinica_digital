import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue'),
    },
    {
      path: '/agendar',
      name: 'agendar',
      component: () => import('../views/AgendarView.vue'),
    },
    {
      path: '/historial-citas',
      name: 'historial',
      component: () => import('../views/HistorialView.vue'),
    },
  ],
})

export default router
