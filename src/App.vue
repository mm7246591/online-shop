<template>
  <el-container>
    <el-header><Header></Header></el-header>
    <router-view></router-view>
  </el-container>
</template>
<script>
import Header from "./views/Header";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>
<style scoped>
@import "./assets/Normalize.css";

.el-header {
  margin-top: 10px;
}
</style>
