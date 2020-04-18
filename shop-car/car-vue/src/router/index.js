import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/doing',
    name: 'doing',
    component: ()=>import('../views/doing.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home.vue'),
    children:[
        {
          path: '/home/main',
          name: 'main',
          component: () => import('../views/main.vue')
        },
        {
          path: '/home/list',
          name: 'list',
          component: () => import('../views/list.vue')
        },
        {
          path: '/home/car',
          name: 'car',
          component: () => import('../views/car.vue')
        },
        {
          path:'/home',
          redirect:'/home/main'
        }
    ]
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

export default router
