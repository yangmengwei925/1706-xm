import Vue       from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/doing',
    name: 'doing',
    component: () => import('../views/doing.vue')
  },
  {
    path: '/ownswipers',
    name: 'ownswipers',
    component: () => import('../views/ownswipers.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/re',
    name: 're',
    component: () => import('../views/re.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home.vue'),
    meta:{
      isLogin:true
    }
  },
  {
    path: '/erlist',
    name: 'erlist',
    component: () => import('../views/erlist.vue'),
    meta:{
      isLogin:true
    }
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/detail.vue'),
    meta:{
      isLogin:true
    }
  },
  {
    path:'/',
    redirect:'/doing'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
    //需要路由拦截
    if(to.matched.some(item=>item.meta.isLogin)){
      //用户已登录
      if(localStorage.getItem('username')!==null){
          next()
          return
      }
      //没有登陆过 去登录
      next('/login')
      return
    }
    
    //不需要路有拦截
    next() 
})

export default router
