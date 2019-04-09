// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// mint-ui 开始
// 引入全局样式
import '../static/css/global.css'
// 引入Mint-ui
import Mint from 'mint-ui'
// 引入css
import 'mint-ui/lib/style.css'
// 安装插件
// 注册所有的全局组件，和给Vue.prototype挂载一些对象，方便你使用 组件内的this.xxx就能用了
Vue.use(Mint)
// mint-ui 结束

// axios 开始
import Axios from 'axios'
// 给Vue的原型挂载$axios属性
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = 'https://api.12355.net/'
// axios 结束

// 引入自己的插件安装器
import Installer from '@/plugins/installer'
Vue.use(Installer)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
