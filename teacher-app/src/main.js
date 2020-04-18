
import Vue from 'vue'
import router from './router'
import App from './App'
import store from './store'
import {Card,Tag,Button,Icon,GoodsAction,GoodsActionIcon,GoodsActionButton,Grid,GridItem,Search,Sticky,Stepper,Image} from 'vant'
import {Mocknetwork} from '@/until'

Vue.config.productionTip = false
Vue.prototype.$Mock      = Mocknetwork

Vue.use(Card).use(Tag).use(Button).use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(Icon).use(Grid).use(GridItem).use(Search).use(Sticky).use(Stepper).use(Image)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
