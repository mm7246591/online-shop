<template>
  <el-menu class="el-menu-demo" mode="horizontal">
    <el-menu-item index="/"
      ><router-link to="/">YanShop</router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link :to="{ name: 'Main' }"> 熱銷商品 </router-link>
    </el-menu-item>
    <el-menu-item index="3">1+1折扣</el-menu-item>
    <el-menu-item index="4">換季商品</el-menu-item>
    <el-menu-item index="5" class="icon">
      <i class="fa-solid fa-user"></i>
      會員
    </el-menu-item>
    <el-menu-item index="6">
      <i class="fa-solid fa-cart-shopping"></i>
      購物車
    </el-menu-item>
  </el-menu>
</template>

<script>
// import { ref } from "@vue/reactivity";
export default {
  name: "Header",
  components: {},
  setup() {},
};
</script>
<style scoped>
.el-menu {
  font-family: "Times New Roman", Times, serif;
  position: relative;
}
.el-menu-item {
  font-size: 20px;
}
.el-menu-item > a {
  text-decoration: none;
}
.el-menu--horizontal > .el-menu-item.icon {
  margin-left: auto;
}
</style>
