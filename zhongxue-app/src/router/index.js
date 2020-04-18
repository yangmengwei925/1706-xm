import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home.vue'),
    children:[ 
      {
        path:'/home/my',
        name: 'homeMy',
        component: () => import('../views/my.vue'),
      },
      {
        path:'/home/cri',
        name: 'homeCri',
        component: () => import('../views/cri.vue'),
      },
      {
        path:'/home',
        redirect:'/home/cri'
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/mymessage',
    name: 'mymessage',
    component: () => import('../views/message.vue')
  },
  {
    path: '/changepwd',
    name: 'changepwd',
    component: () => import('../views/changepwd.vue')
  },
  {
    path:'/',
    redirect:'/login'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
