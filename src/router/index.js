import Vue from 'vue'
import VueRouter from 'vue-router'

//components list
import TodoList from '@/views/TodoList.vue'
import LandingPage from '@/views/marketing/LandingPage'
import About from '@/views/marketing/About'
import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'
import TestTodosVariable from '@/views/marketing/TestTodosVariable'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingPage,
  },
  {
    path: '/todo',
    name: 'todo',
    component: TodoList,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/todos/:id',
    name: 'todos',
    component: TestTodosVariable,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
