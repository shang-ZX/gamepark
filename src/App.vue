<template>
  <div id="app">
    <Nav>
      <!-- 具名插槽的使用 -->
      <span slot="home">
        <router-link to="/home" class="a">主页</router-link>
      </span>
      <span slot="list">
        <router-link to="/Shopcar" class="a">购物车</router-link>
      </span>
      <span slot="about">
        <router-link to="/about" class="a">关于我</router-link>
      </span>
    </Nav>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Nav from './components/Nav'
import Footer from './components/Footer'
export default {
  name: 'app',
  components: {
    Nav,
    Footer
  },
  //生命周期函数，当页面挂载完成时回调
  mounted() {
    //当浏览器刷新时，使网页重定向到首页位置
    window.addEventListener('load', () => {
      if (this.$route.path != '/home') {
        this.$router.replace('/home')
      }
    })
  }
}
</script>

<style>
.a {
  color: #fff;
  text-decoration: none;
  margin-right: 50px;
}
.router-link-active {
  color: red;
}
#app {
  position: absolute;
  width: 100%;
}
</style>
