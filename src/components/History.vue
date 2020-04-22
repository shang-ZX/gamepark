<template>
  <div class="historydiv">
    <h1>我的足迹</h1>
    <div v-show="!$store.state.user[$store.state.userid].history.length">
      <h2>您目前还没有留下任何足迹</h2>
    </div>
    <div>
      <ul class="historyul">
        <li
          v-for="item in $store.state.user[$store.state.userid].history"
          :key="item.img"
        >
          <div class="shadow">
            <img :src="$store.state.baseUrl + 'images/' + item.img" />
            <div class="historylidiv">
              <h2>{{ item.content }}</h2>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import store from '../vuex/store'
export default {
  name: 'History',
  store
}
</script>

<style>
/* @import '../css/base.css'; */
.historydiv {
  text-align: center;
  margin-top: 50px;
}
.historylidiv {
  height: 100px;
  text-align: center;
}
.historyul {
  width: 1290px;
  margin: 0 auto;
  list-style: none;
}
.historyul li {
  margin: 10px;
  float: left;
  border: 1px black solid;
}
.historyul img {
  width: 300px;
}
</style>
