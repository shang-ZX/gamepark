<template>
  <div class="homeup">
    <div class="cont">
      <div id="img" class="img" style="left: 0px;">
        <img
          v-for="(item, i) in $store.state.game"
          :key="item.img"
          :src="$store.state.baseUrl + 'images/' + item.img"
          @click="common.todetails(i, item)"
        />
      </div>
      <div id="spot" class="spot">
        <span :class="{ on: isspot[0] }"></span>
        <span :class="{ on: isspot[1] }"></span>
        <span :class="{ on: isspot[2] }"></span>
      </div>
    </div>
    <div class="lr">
      <img :src="$store.state.baseUrl + 'images/left.png'" id="left" />
      <img :src="$store.state.baseUrl + 'images/right.png'" id="right" />
    </div>
  </div>
</template>

<script>
//引入store
import store from '../vuex/store'
import vue from 'vue'
export default {
  name: 'homeup',
  data() {
    return {
      isspot: [true, false, false]
    }
  },
  //注册store
  store,
  mounted() {
    let _this = this
    let timer
    let img = document.getElementById('img')
    let left = document.getElementById('left')
    let right = document.getElementById('right')
    function animate(px) {
      let left = parseInt(img.style.left) + px
      if (left < -2400) {
        left = 0
      }
      if (left > 0) {
        left = -2400
      }
      img.style.left = left + 'px'
      let index = -left / 1200
      for (let i in _this.isspot) {
        //直接通过数组下标修改data里的数据vue是无法做出动态响应的
        // _this.isspot[i] = false;
        //使用vue.set修改data里的值是可以做到动态响应的
        vue.set(_this.isspot, i, false)
      }
      // _this.isspot[index] = true;
      vue.set(_this.isspot, index, true)
    }
    left.onclick = function() {
      animate(1200)
    }
    right.onclick = function() {
      animate(-1200)
    }
    function play() {
      timer = setInterval(() => {
        animate(-1200)
      }, 3000)
    }
    play()
  }
}
</script>

<style>
/* @import '../css/base.css'; */
.homeup {
  background-color: rgb(235, 224, 224);
}
.lr {
  position: relative;
  height: 25px;
  top: -200px;
}
#left {
  position: absolute;
  left: 30px;
  width: 50px;
}
#right {
  position: absolute;
  right: 30px;
  width: 50px;
}
.cont {
  position: relative;
  margin: 0 auto;
  top: 20px;
  width: 1200px;
  height: 360px;
  overflow: hidden;
}
.spot {
  position: relative;
  top: 320px;
  margin: 0 auto;
  width: 100px;
  height: 10px;
}
.spot span {
  float: left;
  margin-left: 10px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #333;
}
.spot .on {
  background-color: orangered;
}
.img {
  position: absolute;
  top: 20px;
  width: 3600px;
  height: 273px;
}
</style>
