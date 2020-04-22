export default {
  gameid(state, i) {
    state.gameid = i
  },
  addcomment(state, obj) {
    state.game[obj.id].comment.push(obj.obj)
  },
  addshopcar(state, obj) {
    state.user[state.userid].shopcar.push(obj)
  },
  addnum(state, i) {
    state.user[state.userid].shopcar[i].num++
  },
  remove(state, i) {
    state.user[state.userid].shopcar.splice(i, 1)
  },
  addhistory(state, obj) {
    state.user[state.userid].history.unshift(obj)
  },
  addhistory2(state, obj) {
    state.user[state.userid].history.splice(obj.i, 1)
    state.user[state.userid].history.unshift(obj.item)
  },
  buy(state, obj) {
    state.user[state.userid].order.push(obj.order)
    for (let i in obj.id) {
      state.game[obj.id[i]].stock -= obj.order.content[i].num
    }
    state.user[state.userid].shopcar.splice(0)
  },
  shop(state, obj) {
    state.user[state.userid].order.push(obj.order)
    state.game[obj.id].stock--
  },
  deleteorder(state, i) {
    state.user[state.userid].order.splice(i, 1)
  },
  numberChange(state, obj) {
    state.user[state.userid].shopcar[obj.i].num = obj.value
  },
  uesrswitch(state, i) {
    state.userid = i
  },
  zero(state, i){
    state.user[state.userid].shopcar[i].num = 0
  }
}
