import Vue from 'vue'
import VuePrism from './index'
import * as App from './App.vue'

// import 'highlight.js/styles/darcula.css'

Vue.use(VuePrism)

new Vue({
  el: '#app',
  render: h => h(App)
})
