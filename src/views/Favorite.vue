<template>
  <el-container
    ><el-header><Header /></el-header
  ></el-container>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "Favorite",
  components: { Header },
  setup() {},
};
</script>
<style scoped>
.el-header {
  margin-top: 10px;
}
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
</style>
