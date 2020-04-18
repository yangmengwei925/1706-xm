import React from 'react'
import Home  from '../views/home'
import Main  from '../views/main'
import Money from '../views/money'
import More from '../component/more'
const Routers = [
    { 
        path:'/home',
        component:Home,
        children:[
            {
                path:'/home/main',
                component:Main
            },
            {
                path:'/home/money',
                component:Money
            },
            {
                path:'/home/talk',
                component:()=><div>口碑</div>
            },
            {
                path:'/home/friend',
                component:()=><div>朋友</div>
            },
            {
                path:'/home/my',
                component:()=><div>我的</div>
            },
            {
                from:'/home',
                to:'/home/main'
            }
        ]
    },
    {
        path:'/more',
        component:More
    },
    {
        from:'/',
        to:'/home'
    }
]


export default Routers