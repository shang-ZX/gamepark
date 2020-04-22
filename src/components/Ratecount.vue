<template>
  <div>
    <h1>
      <el-badge
        :value="$store.state.game[$store.state.gameid].comment.length"
        class="ratecount"
      >评论</el-badge>
    </h1>
    <div
      v-for="item in $store.state.game[$store.state.gameid].comment"
      :key="item.id"
    >
      <img
        :src="$store.state.baseUrl + 'images/' + item.headimg"
        style="width: 70px"
      />
      <h2>{{ item.name }}</h2>
      <h4>{{ item.content }}</h4>
      <el-rate v-model="item.rate" show-text disabled></el-rate>
      <br />
      <br />
    </div>
    <h1>回复</h1>
    <div class="detailstext">
      <textarea class="text" placeholder="请输入您的回复"></textarea>
      <br />
      <h4>请您对游戏进行评分：</h4>
      <el-rate v-model="value" show-text></el-rate>
      <br />
    </div>
    <el-row>
      <el-button 
        type="info" 
        round 
        @click="btnsubmit()" 
        icon="el-icon-edit"
      >发布</el-button>
    </el-row>
  </div>
</template>

<script>
import store from '../vuex/store'
export default {
  name: 'Ratecount',
  data() {
    return {
      value: null
    }
  },
  store,
  methods: {
    btnsubmit() {
      const obj = {
        id: this.$store.state.game[this.$store.state.gameid].comment.length,
        headimg: this.$store.state.user[this.$store.state.userid].headimg,
        name: this.$store.state.user[this.$store.state.userid].name,
        content: document.getElementsByClassName('text')[0].value,
        rate: this.value
      }
      const id = this.$store.state.gameid
      if (obj.content.length == 0) {
        this.$message('请输入评论内容！')
      } else if (this.value == 0) {
        this.$message('请输入游戏评分！')
      } else {
        this.$store.commit('addcomment', { obj, id })
        this.value = 0
        document.getElementsByClassName('text')[0].value = ''
      }
    }
  }
}
</script>

<style>
.ratecount {
  margin-top: 10px;
  margin-right: 40px;
}
.detailstext {
  text-align: center;
}
.text {
  width: 500px;
  height: 100px;
}
</style>
