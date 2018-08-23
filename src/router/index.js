import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  linkActiveClass: 'isActive',
  mode: 'history',
  routes: [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: resolve => require(['@/views/home/Home.vue'], resolve),
        meta: {
            keepAlive: true,
            title: '首页'
        }
    },
    // {
    //     path: '/analysis/analysis',
    //     component: resolve => require(['@/views/analysis/analysis.vue'], resolve),
    // }
  ]
})
