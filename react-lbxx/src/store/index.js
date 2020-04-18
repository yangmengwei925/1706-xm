import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

let reducer =function(state,action){
    if(action.type==='ADD'){
        ++state.count
    }
    return {...state}
}

let initState ={
    count:0,
    nav:[{
        name:'用户管理',
        icon:'user',
        subnav:[{name:'用户列表',to:'/home/user'}]
    },{
        name:'角色管理',
        icon:'laptop',
        subnav:[
            {name:'角色列表',to:'/home/role'},
            {name:'添加角色',to:'/home/addrole'}
        ]
    },{
        name:'职员管理',
        icon:'notification',
        subnav:[
            {name:'职员列表',to:'/home/zhiyuan'},
            {name:'添加职员',to:'/home/addzhiyuan'}
        ]
    },{
        name:'剧情管理',
        icon:'user',
        subnav:[
            {name:'剧情列表',to:'/home/list'},
            {name:'添加剧情',to:'/home/addlist'}
        ]
    }
]
}
let store = createStore(reducer,initState,applyMiddleware(thunk))

export default store