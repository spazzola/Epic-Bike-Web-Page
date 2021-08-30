import { createRouter, createWebHistory } from 'vue-router'
import AboutCompany from '../views/content/AboutCompany.vue'
import TheServices from '../views/content/TheServices.vue'
import TheContact from '../views/content/TheContact.vue'

const routes = [
  {
    path: '/about', alias: '/',
    name: 'AboutCompany',
    component: AboutCompany
  },
  {
    path: '/prices',
    name: 'ThePrices',
    component: TheServices
  },
  {
    path: '/contact',
    name: 'TheContact',
    component: TheContact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
