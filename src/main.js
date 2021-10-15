import Vue from 'vue'
// import App from './App.vue'
import Master from './components/layouts/Master'
import store from './store'
import './index.css'
window.eventBus=new Vue()


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(Master)
}).$mount('#app')
