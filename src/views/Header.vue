<template>
  <el-menu class="el-menu-demo" mode="horizontal">
    <el-menu-item index="/"
      ><router-link to="/">YanShop</router-link>
    </el-menu-item>
    <el-menu-item index="/Item">
      <router-link :to="{ name: 'Item' }"> 熱銷商品 </router-link>
    </el-menu-item>
    <el-menu-item index="/Discount"
      ><router-link :to="{ name: 'Discount' }">
        1+1折扣
      </router-link></el-menu-item
    >
    <el-menu-item index="4"
      ><router-link :to="{ name: 'Season' }"
        >換季商品</router-link
      ></el-menu-item
    >
    <el-menu-item index="5" class="icon">
      <i class="fa-solid fa-user"></i>
      <router-link :to="{ name: 'Member' }"> 會員</router-link>
    </el-menu-item>
    <el-menu-item index="6">
      <i class="fa-solid fa-cart-shopping"></i>
      <router-link :to="{ name: 'Favorite' }"> 購物車</router-link>
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
.el-menu-item:first-child {
  font-size: 25px;
}
.el-menu-item:not(:first-child) {
  font-size: 16px;
}
.el-menu-item > a {
  text-decoration: none;
}
.el-menu--horizontal > .el-menu-item.icon {
  margin-left: auto;
}
</style>
