import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Announcement from '../views/Announcement.vue'
import Books from '../views/Books.vue'
import Archives from '../views/Archives.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/lost-and-found',
    name: 'lost-and-found',
    component: LostAndFound
  }
  
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router

