<template>
  <div class="nav">
    <div class="navleft">游戏<span class="navspan">公园</span></div>
    <div class="navright">
      <!-- 引入具名插槽 -->
      <slot name="home"></slot>
      <slot name="list"></slot>
      <slot name="about"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style>
/* @import '../css/base.css'; */
.nav {
  background-color: #333;
  height: 80px;
}
.navleft {
  width: 45%;
  margin-left: 150px;
  padding-top: 5px;
  font-size: 50px;
  color: #fff;
  float: left;
}
.navright {
  width: 30%;
  padding-top: 30px;
  font-size: 15px;
  float: right;
  text-align: center;
}
.navspan {
  color: #ea4c89;
}
</style>
