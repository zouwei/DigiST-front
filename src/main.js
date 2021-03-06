// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'
// vant组件
import './vant'
// 全局组件
import './components/global'
import 'style/global.scss'

Vue.use(VueAxios, axios)
Vue.prototype.$http.defaults.baseURL = 'http://digist.onela.cn'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data() {
    return {
      globalData: {}
    }
  }
})
