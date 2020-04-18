import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[
      {
        title:'今天周考了',
        time:'2019-11-05',
        count:0,
        content:'1706A今天周考了考的啥也不是',
        id:0
      },
      {
        title:'下周还周考',
        time:'2019-11-05',
        count:0,
        content:'1706A今天周考了考的啥也不是',
         id:1
      },
      {
        title:'sdfgfhjkjhgfd',
        time:'2019-11-05',
        count:0,
        content:'1706A今天周考了考的啥也不是',
         id:2
      },
      {
        title:'sdfgfhjkjhgfd',
        time:'2019-11-05',
        count:0,
        content:'1706A今天周考了考的啥也不是',
         id:3
      },
      {
        title:'4567890',
        time:'2019-11-05',
        count:0,
        content:'1706A今天周考了考的啥也不是',
         id:4
      }
    ]
  },
  mutations: {
    changeListCount(state,actions){
          ++state.list[actions.item.id].count
    }
  },
  actions: {
  },
  modules: {
  }
})
