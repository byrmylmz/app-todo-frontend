import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoList from '@/views/TodoList.vue'
import LandingPage from '@/views/marketing/LandingPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
  },
  {
    path: '/todo',
    name: 'TodoList',
    component: TodoList,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
