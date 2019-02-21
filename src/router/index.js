import Vue from 'vue'
import Router from 'vue-router'
import loginForm from '@/components/loginForm'
import home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/loginform',
      name: 'loginForm',
      component: loginForm
    },
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
})
