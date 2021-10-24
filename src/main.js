import Vue from 'vue'
import Master from './Master.vue'
import router from './router'
import store from './store'
import '@/assets/css/tailwind.css'
import './index.css'

window.eventBus=new Vue()


Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.loggedIn) {
      next({
        path: '/login',
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (store.getters.loggedIn) {
      next({
        path: '/todo',
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})


new Vue({
  store,
  router,
  render: h => h(Master)
}).$mount('#app')
