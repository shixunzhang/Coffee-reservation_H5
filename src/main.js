// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//导入路由
import router from './router'
//导入vuex
import store from './store'
//导入axios
import axios from 'axios'
import VueAxios from 'vue-axios'


//导入mock文件
import Mock from './mock'
//导入自定义lib-flexible
import '@/assets/script/flexible'
//导入mint-ui作为ui组件库
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//导入清除默认css样式文件
import '@/assets/styles/reset.css'
//解决一像素边框问题：引入一项素解决方案的border.css文件
import '@/assets/styles/border.css'

// 导入v-viewer解决图片点击放大问题
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
import VCharts from 'v-charts'
//日期选择控件
import Calendar from 'vue2-datepick';

import echarts from 'echarts'


Vue.prototype.$echarts = echarts

require('echarts-wordcloud')
// 通过use方法加载axios插件
Vue.use(VueAxios,axios);

Vue.use(MintUI)
Vue.use(VCharts)
Vue.use(Calendar);

Vue.use(Viewer);
Viewer.setDefaults({
  Options: { "inline": true, "button": true, "navbar": false, "title": true, "toolbar": false, "tooltip": true, "movable": false, "zoomable": true, "rotatable": true, "scalable": false, "transition": true, "fullscreen": true, "keyboard": false, "url": "data-source" }
});


Vue.config.productionTip = false
Vue.prototype.$API = 'http://app.dxzjjl.cc'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
