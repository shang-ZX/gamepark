import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

//1.通过Vue.use(插件)来安装插件
Vue.use(Vuex)
//2.Vuex 实例化 Vuex.store
const store = new Vuex.Store({
  state,
  mutations,
  getters: {},
  actions: {},
  modules: {}
})

//3.导出Vuex对象导出，并传入到Vue实例中
export default store
