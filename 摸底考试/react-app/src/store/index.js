import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

let reducer = function(state,action){
    if(action.type==='INITDATA'){
        state.list = [...action.list]
    }
    return {...state}
}
let initstate = {
    list:[]
}

export default createStore(reducer,initstate,applyMiddleware(thunk))