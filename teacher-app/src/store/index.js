import Vue from 'vue'
import Vuex from 'vuex'
import {Mocknetwork} from '@/until'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
     list:[]
  },
  mutations: {
    changeList(state,actions){
        state.list = actions.data
    }
  },
  actions: {
     getdata(store,actions){
        Mocknetwork('/list/data',actions).then(data=>{
            store.commit('changeList',{data:data})
        })
     },
     stepChange(store,actions){
      Mocknetwork('/list/change/count',actions).then(data=>{
            store.commit('changeList',{data:data.data})
      })
  }
  }
})
