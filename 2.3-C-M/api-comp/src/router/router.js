import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Player from '@/components/Player.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/player/:id',
    name: 'Player',
    component: Player,
    props: true  // Allows us to pass route params as props to the Player component
  },
  {
    path: '/:catchAll(.*)',  // Catch all 404s
    name: 'NotFound',
    component: () => import('@/components/NotFound.vue')  // Lazy-loaded, good for error pages
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
