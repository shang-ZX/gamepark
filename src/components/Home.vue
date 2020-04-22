<template>
  <div class="home">
    <Homeup></Homeup>
    <h1>最新游戏</h1>
    <ul class="homeul">
      <li v-for="(item, i) in $store.state.game" :key="item.img">
        <div class="shadow">
          <img
            :src="$store.state.baseUrl + 'images/' + item.img"
            @mouseover="mover(i)"
          />
          <div :id="i" class="licontent" @mouseout="mout(i)">
            <h1>{{ item.content }}</h1>
            <h3>{{ item.present }}</h3>
          </div>
          <div class="lidiv">
            <h2>{{ item.content }}</h2>
            <h3>{{ item.price | pricefilter }}</h3>
            <el-button type="primary" @click="common.todetails(i, item)">查看详情</el-button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
//导入store
import store from '../vuex/store'
import Homeup from './Homeup'
import todetails from '../js/common'
export default {
  name: 'home',
  //注册store
  store,
  components: {
    Homeup
  },
  methods: {
    mover(i) {
      document.getElementById(i).style.display = 'inline'
    },
    mout(i) {
      document.getElementById(i).style.display = 'none'
    }
  }
}
</script>

<style>
@import '../css/base.css';
.homeul {
  width: 1280px;
  margin: 0 auto;
  list-style: none;
}
.homeul li {
  margin: 10px;
  float: left;
  border: 1px black solid;
}
.homeul li img {
  z-index: 1;
}
.licontent {
  position: absolute;
  margin-left: -400px;
  width: 400px;
  height: 274px;
  background-color: red;
  color: black;
  z-index: 2;
  display: none;
}
.licontent h3 {
  margin-left: 25px;
  margin-right: 25px;
  margin-top: -30px;
}
.lidiv {
  height: 120px;
  text-align: center;
}
.lidiv button {
  display: block;
  margin: 0 auto;
  margin-top: 5px;
}
</style>
