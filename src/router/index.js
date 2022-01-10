import Vue from 'vue'
import VueRouter from 'vue-router'

//components list
import TodoList from '@/views/TodoList.vue'
import LandingPage from '@/views/marketing/LandingPage'
import About from '@/views/marketing/About'
import Pricing from '@/views/marketing/Pricing'
import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'
import TestTodosVariable from '@/views/marketing/TestTodosVariable'
import Logout from '@/components/auth/Logout'


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
    meta:{
      requiresAuth:true,
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: Pricing,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    props:true,
    meta:{
      requiresVisitor:true,
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta:{
      requiresVisitor:true,
    }
  },
  {
    path: '/todos/:id',
    name: 'todos',
    component: TestTodosVariable,
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
