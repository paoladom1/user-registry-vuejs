import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  data: {
    show: true
  },
  render: h => h(App),
}).$mount('#app')
