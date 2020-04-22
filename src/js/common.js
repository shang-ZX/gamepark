import store from '../vuex/store'
import router from '../router/index'
export default {
  todetails(i, item) {
    let isrepeat = false
    store.commit('gameid', i)
    if (store.state.user[store.state.userid].history.length == 0) {
      store.commit('addhistory', item)
    } else {
      for (let i in store.state.user[store.state.userid].history) {
        if (item.img == store.state.user[store.state.userid].history[i].img) {
          isrepeat = true
          store.commit('addhistory2', { item, i })
          break
        }
      }
      if (isrepeat == false) {
        store.commit('addhistory', item)
      }
    }
    router.push('/details')
  }
}
