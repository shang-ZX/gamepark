import Vue from 'vue'
import App from './App.vue'
import common from './js/common'
import router from './router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
//解决vue-router跳转后页面不在顶部的问题
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
Vue.prototype.common = common
Vue.filter('pricefilter', function(price) {
  return '￥' + price.toFixed(2)
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
