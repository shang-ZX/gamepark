import VueRouter from 'vue-router'
import Vue from 'vue'
import routes from './routes'

//1.通过Vue.use(插件)来安装插件
Vue.use(VueRouter)
//2.创建VueRouter对象
const router = new VueRouter({
  //routes用来配置组件之间的映射关系
  routes,
  //mode用来指定路由模式，当前使用history模式
  // mode: 'history'
})

router.beforeEach((to, from, next) => {
  //该写法在有嵌套路由的前提下会出现BUG
  // document.title = to.meta.title;
  //该方法可以解决有嵌套路由的问题
  document.title = to.matched[0].meta.title
  next()
})

//3.将router对象导出，并传入到Vue实例中
export default router
