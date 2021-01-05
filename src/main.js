import Vue from "vue"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import App from "./App.vue"
import axios from 'axios'
import router from './router/index.js'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$api = axios.create({
  baseURL: 'http://localhost:3000/api'
})

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app")
