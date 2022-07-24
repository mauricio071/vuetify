import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Tarefas',
    component: () => import('../views/Tarefas.vue')
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/HomeTeste',
    name: 'HomeTeste',
    component: () => import('../views/HomeTeste.vue')
  },
  {
    path: '/Index',
    name: 'Index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/v-card',
    name: 'Vcard',
    component: () => import('../views/v-card.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
