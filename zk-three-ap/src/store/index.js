// 1 先写store 2 引入store 3 连接store

import { createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

let reducer = function(state,action){

    if(action.type==='CHANGE_LIST'){
      state.list = [...action.value]
    }
    
    return {...state}
}

let initstate = {
    list:[
        {name:'花呗',icon:'',type:'my'},
        {name:'借呗',icon:'',type:'more'},
        {name:'蚂蚁森林',icon:'',type:'more'},
        {name:'城市服务',icon:'',type:'more'}
      ]
}
let store = createStore(reducer,initstate,applyMiddleware(thunk))

export default store

