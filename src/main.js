// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'





import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify, {
  theme: {
    primary: colors.indigo.base,
    info: colors.blue.lighten2,
    accent: colors.green.lighten1,
    error: colors.red.darken2
  }
});


Vue.use(Vuetify)


Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  axios,
  router,
  Vuetify,
  components: { App },
  template: '<App/>'
})
