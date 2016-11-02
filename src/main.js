import Vue from 'vue'
import App from './App'
import router from './router'

import './style/main.scss'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
