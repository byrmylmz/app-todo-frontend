import Vue from 'vue'
import VueRouter from 'vue-router'
// import App from './App' 
import TodoList from '@/components/TodoList.vue'
import LandingPage from '@/components/marketing/LandingPage'
import Master from '@/components/layouts/Master'
import store from './store'
import './index.css'

window.eventBus=new Vue()


Vue.config.productionTip = false

Vue.use(VueRouter)

const routes=[
  {path:'/', name:'LandingPage', component:LandingPage },
  {path:'/todo',name:'TodoList', commponent:TodoList },
]

const router =new VueRouter({
  routes
})

new Vue({
  store,
  router,
  render: h => h(Master)
}).$mount('#app')
