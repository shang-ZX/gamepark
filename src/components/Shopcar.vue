<template>
  <div class="shopcar">
    <div class="shopcarup">
      <br />
      <h1>购物车</h1>
      <div v-if="$store.state.user[$store.state.userid].shopcar.length">
        <table border="2" class="shopcaruptable">
          <tr>
            <th></th>
            <th>商品名称</th>
            <th>价格</th>
            <th>数量</th>
            <th>移除</th>
          </tr>
          <tr
            v-for="(item, i) in $store.state.user[$store.state.userid].shopcar"
            :key="item.name"
          >
            <td>
              <img
                :src="$store.state.baseUrl + 'images/' + item.img"
                :class="{ imgfilter: !$store.state.game[item.id].stock }"
              />
            </td>
            <td>{{ item.name }}</td>
            <td>{{ price(item) }}</td>
            <td>
              <el-input-number
                v-model="item.num"
                @change="value => numberChange(value, i)"
                :min="1"
                :max="$store.state.game[item.id].stock"
                v-if="$store.state.game[item.id].stock"
                size="small"
              ></el-input-number>
              <h3 v-else>已售罄</h3>
            </td>
            <td>
              <el-button
                icon="el-icon-delete"
                size="small"
                slot="reference"
                @click="remove(i)"
              >移除</el-button>
            </td>
          </tr>
        </table>

        <br />
        <h2 class="shopcartotalprice">总价格：{{ totalprice }}</h2>
        <br />
        <el-button
          type="success"
          class="shopcarbuy"
          @click="buy(totalprice, totalbuy)"
          :disabled="isbutbuy"
        >立即购买</el-button>
      </div>
      <div v-else class="shopcarelse">
        <h2>当前购物车为空</h2>
        <br />
        <el-button type="danger" plain @click="tohome()"
        >去首页看看</el-button>
      </div>
      <br /><br />
    </div>
    <Shopdown></Shopdown>
  </div>
</template>

<script>
import store from '../vuex/store'
import Shopdown from './Shopdown'
export default {
  name: 'Shopcar',
  store,
  components: {
    Shopdown
  },
  methods: {
    numberChange(value, i) {
      const obj = {
        value,
        i
      }
      this.$store.commit('numberChange', obj)
    },
    tohome() {
      this.$router.push('/home')
    },
    remove(i) {
      this.$confirm('此操作将移除该商品, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$store.commit('remove', i)
          this.$message({
            type: 'success',
            message: '移除成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消移除操作。'
          })
        })
    },
    buy(totalprice, totalbuy) {
      const order = {
        id: this.$store.state.user[this.$store.state.userid].order.length + 1,
        content: totalbuy,
        totalprice
      }
      const id = new Array()
      for (let i in totalbuy) {
        id[i] = totalbuy[i].id
      }
      this.$store.commit('buy', { order, id })
      this.$message('购买成功！')
      this.$router.push('/about')
    }
  },
  computed: {
    price() {
      return function(item) {
        return '￥' + (item.price * item.num).toFixed(2)
      }
    },
    totalprice() {
      let totalprice = 0
      for (let i in this.$store.state.user[this.$store.state.userid].shopcar) {
        totalprice +=
          this.$store.state.user[this.$store.state.userid].shopcar[i].price *
          this.$store.state.user[this.$store.state.userid].shopcar[i].num
      }
      return '￥' + totalprice.toFixed(2)
    },
    totalbuy() {
      let totalbuy = new Array()
      for (let i in this.$store.state.user[this.$store.state.userid].shopcar) {
        totalbuy[i] = this.$store.state.user[this.$store.state.userid].shopcar[i]
      }
      return totalbuy
    },
    isbutbuy() {
      let isbutbuy = false
      let id = new Array()
      for (let i in this.$store.state.user[this.$store.state.userid].shopcar) {
        id[i] = this.$store.state.user[this.$store.state.userid].shopcar[i].id
      }
      for (let i in id) {
        if (this.$store.state.game[id[i]].stock == 0) {
          this.$store.commit('zero', i)
          isbutbuy = true
          break
        }
      }
      return isbutbuy
    }
  }
}
</script>

<style>
/* @import '../css/base.css'; */
.shopcarup {
  background-color: rgb(235, 224, 224);
}
.shopcaruptable {
  margin: 0 auto;
  margin-top: 50px;
}
.shopcaruptable th {
  width: 200px;
}
.shopcaruptable td {
  text-align: center;
}
.shopcaruptable .shopcarremove {
  width: 35px;
}
.imgfilter {
  filter: grayscale(1);
}
.shopcarelse {
  text-align: center;
}
.shopcarelse h2 {
  margin-top: -30px;
}
.shopcarelse button {
  margin: 0 auto;
  display: block;
  color: #000;
  font-weight: bold;
}
.shopcartotalprice {
  text-align: center;
}
.shopcarbuy {
  display: block;
  margin: 0 auto;
  width: 150px;
}
</style>
