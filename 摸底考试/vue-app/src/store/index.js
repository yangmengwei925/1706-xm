import Vue from 'vue'
import Vuex from 'vuex'
import {Mockurl} from '@/until'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[],
    erjiList:[]
  },
  mutations: {
    changeList(state,actions){
        state.list     = [...actions.list]
    },
    changeerList(state,actions){
        state.erjiList = [...actions.listdata]
    }
  },
  actions: {
    initData(store){
      Mockurl('/list/list').then(data =>store.commit('changeList',{list:data.data}))
    },
    erjiIntiData(store,actions){
      Mockurl('/list/list/data',actions).then(data =>store.commit('changeerList',{listdata:data.data}))
    },
    countData(store,actions){
      Mockurl('/list/count',actions).then(data =>store.commit('changeerList',{listdata:data.data}))
    }
  },
  modules: {
  }
})
