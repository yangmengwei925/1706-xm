import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Mockurl}  from "@/until"

// 使用vant 
// 1安装 npm i vant -S
// 2安装 npm i babel-plugin-import -S
// 3 在babel.config.js 配置 实现按需加载
//4 用什么组件引入什么组件
//5 use

import {Button,Field,NavBar,Tabbar, TabbarItem,Icon} from 'vant'
Vue.use(Button).use(Field).use(NavBar).use(Tabbar).use(TabbarItem).use(Icon)

Vue.config.productionTip = false
Vue.prototype.$Mockurl   = Mockurl


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
