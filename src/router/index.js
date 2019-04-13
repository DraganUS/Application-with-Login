import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
})
