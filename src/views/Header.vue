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
    <el-menu-item index="/Season"
      ><router-link :to="{ name: 'Season' }"
        >換季商品</router-link
      ></el-menu-item
    >
    <el-menu-item index="/Member" class="icon">
      <i class="fa-solid fa-user"></i>
      <router-link :to="{ name: 'Member' }"> 會員</router-link>
    </el-menu-item>
    <el-menu-item index="/Favorite">
      <i class="fa-solid fa-cart-shopping"></i>
      <router-link :to="{ name: 'Favorite' }">
        <el-badge :value="200" :max="99" class="item">購物車</el-badge>
      </router-link>
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
  font-style: italic;
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
