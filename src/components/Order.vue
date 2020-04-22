<template>
  <div class="order">
    <h1>我的订单</h1>
    <div v-if="$store.state.user[$store.state.userid].order.length">
      <table
        border="2"
        class="ordertable"
        v-for="(item, i) in $store.state.user[$store.state.userid].order"
        :key="item.id"
      >
        <tr>
          <th></th>
          <th>商品名称</th>
          <th>价格</th>
          <th>数量</th>
        </tr>
        <tr
          v-for="item2 in $store.state.user[$store.state.userid].order[i].content"
          :key="item2.ing"
        >
          <td><img :src="$store.state.baseUrl + 'images/' + item2.img" /></td>
          <td>{{ item2.name }}</td>
          <td>{{ item2.price | pricefilter }}</td>
          <td>{{ item2.num }}</td>
        </tr>
        <tr>
          <td colspan="3">
            订单总价格：
            {{ $store.state.user[$store.state.userid].order[i].totalprice }}
          </td>
          <td>
            <el-button
              icon="el-icon-delete"
              size="small"
              slot="reference"
              @click="deleteorder(i)"
            >删除</el-button>
          </td>
        </tr>
      </table>
    </div>
    <h2 v-else>您目前还没有任何订单</h2>
    <hr />
  </div>
</template>

<script>
import store from '../vuex/store'
export default {
  name: 'Order',
  store,
  methods: {
    deleteorder(i) {
      this.$confirm('此操作将永久删除该订单, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$store.commit('deleteorder', i)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除操作。'
          })
        })
    }
  }
}
</script>

<style>
/* @import '../css/base.css'; */
.order {
  text-align: center;
}
.order hr {
  margin-top: 50px;
}
.ordertable {
  margin: 0 auto;
  margin-top: 50px;
}
.ordertable th {
  width: 200px;
}
.ordertable td {
  text-align: center;
}
.ordertable img {
  width: 200px;
}
.ordertable td {
  height: 40px;
}
.ordertable tr td button {
  margin: 0 auto;
  display: block;
  width: 80px;
  height: 30px;
}
</style>
