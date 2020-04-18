import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import( '../views/home.vue'),
    children:[
      {
        path:'/home/main',
        name:'HomeMain',
        component:()=>import('@/views/main.vue'),
        children:[
          {
            path:'/home/main/look',
            name:'Look',
            component:()=>import('@/views/look.vue')
          }
        ],
        meta:{
          isLogin:true
        }
      },
      {
        path:'/home/my',
        name:'HomeMy',
        component:()=>import('@/views/my.vue'),
        meta:{
          isLogin:true
        }
      },
      {
        path:'/home',
        redirect:'/home/main'
      }
    ],
    meta:{
      isLogin:true
    }
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import( '@/views/detail.vue'),
    meta:{
      isLogin:true
    }
  },{
    path: '/login',
    name: 'login',
    component: () => import( '@/views/login.vue')
  },
  {
    path:'/',
    redirect:'/home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.matched.some(res=>res.meta.isLogin)){//判断是否需要登录
      if (localStorage['username']) {
          next();
          return 
      }
      next("/login");
      return 
  }
  next() 
});

export default router
