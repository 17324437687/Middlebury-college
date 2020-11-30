import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/index',
    component: () => import('../views/index'),
    children: [{
        path: '/home',
        name: 'Home',
        component: () => import("../views/Home")
      },
      {
        path: '/teacher',
        name: 'teacher',
        component: () => import("../views/teacher/Teacher")
      },
      {
        path: '/list',
        name: 'list',
        component: () => import("../views/teacher/List")
      },

    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router