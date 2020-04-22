<template>
  <div class="about">
    <div class="aboutdiv">
      <img
        :src="$store.state.baseUrl + 'images/' + this.$store.state.user[this.$store.state.userid].headimg"
        class="aboutimg"
      />
      <h1>{{ this.$store.state.user[this.$store.state.userid].name }}</h1>
      <el-dropdown class="swicthbtn">
        <el-button type="primary">
          切换账号
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            @click.native="click(i)"
            v-for="(item, i) in this.$store.state.user"
            :key="item.name"
          >{{ item.name }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div>
      <Order></Order>
      <History></History>
    </div>
  </div>
</template>

<script>
import store from '../vuex/store'
import History from './History'
import Order from './Order'
export default {
  name: 'About',
  store,
  components: {
    History,
    Order
  },
  methods: {
    click(i) {
      this.$store.commit('uesrswitch', i)
    }
  }
}
</script>

<style>
/* @import '../css/base.css'; */
.aboutdiv {
  padding: 50px;
  width: 100%;
  height: 150px;
  background-color: rgb(235, 224, 224);
}
.aboutdiv h1 {
  float: left;
  font-size: 50px;
  margin-left: 30px;
  margin-top: 40px;
}
.aboutimg {
  float: left;
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.swicthbtn {
  margin-top: 57px;
}
</style>
