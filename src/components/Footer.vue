<template>
  <div class="footer">
    <div class="span">
      <span>主页<el-divider direction="vertical"></el-divider>购物车<el-divider direction="vertical"></el-divider>关于我</span><br />
      <span>游戏公园<el-divider direction="vertical"></el-divider>张锦山 - 广州航海学院</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
/* @import '../css/base.css'; */
.footer {
  position: absolute;
  bottom: 0;
  background-color: #333;
  height: 80px;
  width: 100%;
  margin-bottom: -100px;
  text-align: center;
}
.footer .span {
  color: #fff;
  font-size: 20px;
  margin-top: 12px;
}
</style>
