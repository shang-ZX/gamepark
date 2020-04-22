<template>
  <div class="details">
    <div class="detailsleft">
      <img
        :src="$store.state.baseUrl + 'images/' + $store.state.game[$store.state.gameid].img"
      />
    </div>
    <div class="detailsright">
      <h2>{{ $store.state.game[$store.state.gameid].content }}</h2>
      <el-rate
        v-model="value"
        disabled
        show-score
        text-color="#ff9900"
        score-template="{value}"
      ></el-rate>
      <h4>{{ $store.state.game[$store.state.gameid].details }}</h4>
      <h2>价格：{{ $store.state.game[$store.state.gameid].price | pricefilter }}</h2>
      <h3>库存：{{ $store.state.game[$store.state.gameid].stock }}</h3>
      <el-row>
        <el-button
          type="success"
          @click="addshop($store.state.game[$store.state.gameid], $store.state.gameid)"
          :disabled="$store.state.game[$store.state.gameid].stock == 0"
        >加入购物车</el-button>
        <el-button
          type="success"
          @click="shop($store.state.game[$store.state.gameid], $store.state.gameid)"
          :disabled="$store.state.game[$store.state.gameid].stock == 0"
        >立即购买</el-button>
      </el-row>
    </div>
    <div class="detailsbottom">
      <h1>游戏详情</h1>
      <h3>{{ $store.state.game[$store.state.gameid].present }}</h3>
      <h3>{{ $store.state.game[$store.state.gameid].details }}</h3>
      <Ratecount></Ratecount>
    </div>
  </div>
</template>

<script>
import store from '../vuex/store'
import Ratecount from './Ratecount'
export default {
  name: 'Details',
  store,
  components: {
    Ratecount
  },
  methods: {
    addshop(game, id) {
      let isadd = true
      if (this.$store.state.user[this.$store.state.userid].shopcar == 0) {
        const obj = {
          id,
          img: game.img,
          name: game.content,
          price: game.price,
          num: 1
        }
        this.$store.commit('addshopcar', obj)
        this.$message('加入购物车成功！')
      } else {
        for (let i in this.$store.state.user[this.$store.state.userid]
          .shopcar) {
          if (
            game.content ==
            this.$store.state.user[this.$store.state.userid].shopcar[i].name
          ) {
            if (
              this.$store.state.user[this.$store.state.userid].shopcar[i].num ==
              this.$store.state.user[this.$store.state.userid].shopcar[i].stock
            ) {
              this.$message('库存不足！')
            } else {
              this.$store.commit('addnum', i)
              this.$message('加入购物车成功！')
            }
            isadd = false
            break
          }
        }
        if (isadd == true) {
          const obj = {
            id,
            img: game.img,
            name: game.content,
            price: game.price,
            num: 1
          }
          this.$store.commit('addshopcar', obj)
          this.$message('加入购物车成功！')
        }
      }
    },
    shop(game, id) {
      const order = {
        id: this.$store.state.user[this.$store.state.userid].order.length + 1,
        content: [
          {
            img: game.img,
            name: game.content,
            price: game.price,
            num: 1
          }
        ],
        totalprice: this.price
      }
      this.$store.commit('shop', { order, id })
      this.$message('购买成功！')
      this.$router.push('/about')
    }
  },
  computed: {
    value() {
      let grade = 0
      for (
        let i = 0;
        i < this.$store.state.game[this.$store.state.gameid].comment.length;
        i++
      ) {
        grade += this.$store.state.game[this.$store.state.gameid].comment[i]
          .rate
      }
      let avg = +(
        grade / this.$store.state.game[this.$store.state.gameid].comment.length
      ).toFixed(1)
      return avg
    }
  }
}
</script>

<style>
/* @import '../css/base.css'; */
.details {
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 50px;
}
.details img {
  float: left;
  margin-right: 15px;
}
.detailsright {
  height: 273px;
  text-align: left;
}
.detailsright button {
  display: block;
  float: left;
  margin: 10px;
  width: 180px;
  height: 40px;
}
.detailsbottom {
  margin-top: 100px;
}
.detailsbottom button {
  margin: 0 auto;
  display: block;
  width: 150px;
}
.grade {
  margin: 0 auto;
}
.detailsleft {
  float: left;
  height: 300px;
}
</style>
