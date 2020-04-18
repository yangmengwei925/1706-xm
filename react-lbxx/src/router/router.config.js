import React from 'react'
import Home from '../views/home'
import Login from '../views/login'
import User from '../views/user'
import OfficeList from '../views/officelist'
import {LoginIn} from '../until'

let Routers = [
    {
        type:'route',
        path:'/home',
        component:LoginIn(Home),
        children:[
            {
                type:'route',
                path:'/home/user',
                component:LoginIn(User),
            },
            {
                type:'route',
                path:'/home/role',
                component:()=><div>角色列表</div>
            },
            {
                type:'route',
                path:'/home/addrole',
                component:()=><div>添加角色</div>
            },
            {
                type:'route',
                path:'/home/zhiyuan',
                component:LoginIn(OfficeList)
            },
            {
                type:'route',
                path:'/home/addzhiyuan',
                component:()=><div>添加职员</div>
            },
            {
                type:'route',
                path:'/home/list',
                component:()=><div>剧情列表</div>
            },
            {
                type:'route',
                path:'/home/addlist',
                component:()=><div>添加剧情</div>
            },
            {
                type:'redirect',
                from:'/home',
                to:'/home/user'
            }
        ]
    },
    {
        type:'route',
        path:'/login',
        component:Login
    },
    {
        type:'route',
        path:'/detail',
        component:()=><div>detail</div>
    },
    {
        type:'redirect',
        from:'/',
        to:'/login' 
    }
]

export default Routers