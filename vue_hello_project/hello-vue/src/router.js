import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [

        {
          path: 'List',
          name: 'List',
          component: () => import(/* webpackChunkName: 'List' */ './views/List.vue')
          // 这种形式是懒加载
        },
        {
          path: 'User',
          name: 'User',
          component: () => import(/* webpackChunkName: 'User' */ './views/User.vue')
        }
      ]
    },
    {
      path: '/Add',
      name: 'Add',
      component: () => import('./views/Add.vue')

    }
  ]
})
