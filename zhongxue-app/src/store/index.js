import Vue from 'vue'
import Vuex from 'vuex'
import {Mockurl} from '@/until'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      username:'',
      list:[],
      sex:true
  },
  mutations: {
      changeUser(state,acitons){
        state.username = acitons.username
      },
      changeList(state,actions){
         state.list = actions.data
      }
  },
  actions: {
      criGetdata(store){
        Mockurl('/list/data').then(data=>{
            store.commit('changeList',{data})
        })
      }
  },
  getters:{
    returnSex(state){
        return state.sex?'猴子':'女'
    }
  }
})
