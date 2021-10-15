import Vue from 'vue'
import Master from './Master.vue'
import router from './router'
import store from './store'
import '@/assets/css/tailwind.css'
import './index.css'

window.eventBus=new Vue()


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(Master)
}).$mount('#app')
