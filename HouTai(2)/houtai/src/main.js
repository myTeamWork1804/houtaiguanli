// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import './assets/css/reset.css'
import  './assets/css/base.css'
import './assets/css/iconfont.css'
import './assets/js/jquery-1.4.4.min'
import './assets/js/jquery.ztree.all.min'
import axios from "axios"
import echarts from"echarts"



Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.prototype.$axios = axios

/* eslint-disable no-new */





new Vue({
  el: '#app',
  router,
  render(h){return h(App)}

})
