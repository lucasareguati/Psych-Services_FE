import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import NosotrosView from '../views/NosotrosView.vue'
import ProfessionalView from '../views/ProfessionalView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contacto',
      name: 'contact',
      component: ContactView
    },
    {
      path:'/nosotros',
      name: 'nosotros',
      component: NosotrosView
    },
    {
      path: '/profesionales',
      component: ProfessionalView
    },
  ]
})

export default router
