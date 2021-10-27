import Vue from 'vue'
import Master from './Master.vue'
import router from './router'
import store from './store'
import '@/assets/css/tailwind.css'
import './index.css'
import VeeValidate from 'vee-validate';
import CxltToastr from 'cxlt-vue2-toastr'


var toastrConfigs = {
  position: 'bottom right',
  showDuration: 2000,
  timeOut:5000,
  progressBar:true
}

window.eventBus=new Vue()
Vue.config.productionTip = false
Vue.use(VeeValidate);
Vue.use(CxltToastr, toastrConfigs)




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
