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
      component: () => import('@/views/home/Home.vue'),
      meta: {
        keepAlive: true,
        title: '首页'
      }
    }
  ]
})
