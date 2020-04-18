
import Home from '../views/home'
import Doing from '../views/doing'
import Login from '../views/login'
import Ownswipers from '../views/ownswipers'
import Detail from '../views/detail'
import Secondlist from '../views/secondlist'
import Re from '../views/re'

import {LoginLanJie} from '../until'

const routers = [
    {
        path:'/login',
        component:Login,
        children:[]
    },
    {
        path:'/home',
        component:LoginLanJie(Home)
    },
    {
        path:'/detail',
        component:LoginLanJie(Detail)
    },
    {
        path:'/secondlist',
        component:LoginLanJie(Secondlist)
    },
    {
        path:'/doing',
        component:Doing
    },
    {
        path:'/swipers',
        component:Ownswipers
    },
    {
        path:'/re',
        component:Re
    },
    {
        to:'/doing',
        from:'/'
    }
]

export default routers