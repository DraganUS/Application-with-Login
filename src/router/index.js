import Vue from 'vue'
import Router from 'vue-router'
import loginForm from '@/components/loginForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/loginform',
      name: 'loginForm',
      component: loginForm
    }
  ]
})
