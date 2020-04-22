<template>
  <div class="shopdown">
    <h1>猜你喜欢</h1>
    <ul>
      <li v-for="item in $store.state.game2" :key="item.img">
        <div class="shadow">
          <el-tooltip
            class="item"
            effect="dark"
            :content="item.price | pricefilter"
            placement="bottom"
          >
            <img :src="$store.state.baseUrl + 'images/' + item.img" />
          </el-tooltip>
          <div class="shopdowndiv">
            <h2>{{ item.content }}</h2>
            <br />
            <h5>{{ item.present }}</h5>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '../vuex/store'
export default {
  name: 'home',
  store
}
</script>

<style>
/* @import '../css/base.css'; */
.shopdown ul {
  width: 1430px;
  margin: 0 auto;
  list-style: none;
}
.shopdown ul li {
  margin: 10px;
  float: left;
}
.shopdowndiv {
  width: 450px;
  height: 120px;
  text-align: center;
}
</style>
