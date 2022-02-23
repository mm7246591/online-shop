<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1">YanShop</el-menu-item>
    <el-menu-item index="2">New</el-menu-item>
    <el-menu-item index="3">人氣商品</el-menu-item>
    <el-menu-item index="4">1+1折扣</el-menu-item>
    <el-menu-item index="5">換季商品</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "Header",
};
</script>
<style scoped>
.el-menu {
  font-family: "Times New Roman", Times, serif;
}
.el-menu-item {
  font-size: 20px;
}
</style>
