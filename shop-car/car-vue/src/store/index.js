import Vue from 'vue'
import Vuex from 'vuex'
import {Mockurl} from '@/until';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    defaultIndex:0,
    nav:[
      {title:'主页',to:'/home/main'},
      {title:'列表',to:'/home/list'},
      {title:'购物车',to:'/home/car'}
    ],
    list:[],

    sub:[],
    //当前选项的下标
    subIndex:0,
    allprice:0
  },
  mutations: {
    //高亮
    changedefaultIndex(state,actions){
        state.defaultIndex = actions.defaultIndex
    },
    //初始化列表赋值
    changeList(state,actions){
      state.list = [...actions.list]
      state.sub  = [...actions.list[0].sub]
    },
    //每次点击选项卡 切换sub
    changeItem(state,actions){
      state.subIndex = state.list.findIndex(item=>item.title===actions.title)
      state.sub      = [...state.list[state.subIndex].sub]
    },
    dis(state,actions){
      let {list,subIndex} = state
      let ind = list[subIndex].sub.findIndex(item=>item.name === actions.name)
      if(list[subIndex].sub[ind].count>0){
        --list[subIndex].sub[ind].count
        this.commit('allprice')
      }
    },
    add(state,actions){
      let {list,subIndex} = state
      let ind = list[subIndex].sub.findIndex(item=>item.name === actions.name)
      ++list[subIndex].sub[ind].count
      this.commit('allprice')
    },
    allprice(state,actions){
      state.allprice = 0,
      state.list.forEach(item=>
        item.sub.forEach(k=>{
          if(k.check===true){
            state.allprice += k.count * k.price
          }
        })
        )
    },
    changeCheck(state,actions){
      let {list,subIndex}           = state
      let ind                       = list[subIndex].sub.findIndex(item=>item.name === actions.name)
      list[subIndex].sub[ind].check = !list[subIndex].sub[ind].check
      this.commit('allprice')
    }
  },
  actions: {
    initData(store){
      Mockurl('/list/list').then(data=>
          store.commit('changeList',{list:data})
        )
    }
  },
  modules: {
  }
})
