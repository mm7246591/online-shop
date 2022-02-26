<template>
  <el-container>
    <el-header><Header></Header></el-header>
  </el-container>
  <router-view></router-view>
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
<style>
@import "./assets/Normalize.css";
</style>
