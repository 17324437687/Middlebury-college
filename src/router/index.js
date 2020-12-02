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
      {
        path: '/course',
        name: "course",
        component: () => import("../views/course/addCourse")
      },
      {
        path: '/courselist',
        name: "courselist",
        component: () => import("../views/course/courselist")
      },
      {
        path: '/elective',
        name: "elective",
        component: () => import("../views/Elective/Elective")
      },
      {
        path: '/electivelist',
        name: "electivelist",
        component: () => import("../views/Elective/Electivelist")
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router