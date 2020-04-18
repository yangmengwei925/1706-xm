import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Mockurl} from '@/until'
import {Field,Button} from 'vant'
Vue.use(Field).use(Button)
Vue.config.productionTip = false
Vue.prototype.$Mockurl = Mockurl
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
