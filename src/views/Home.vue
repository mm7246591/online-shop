<template>
  <el-container>
    <el-header><Header></Header></el-header>
    <el-container>
      <el-aside><SideBar></SideBar></el-aside>
      <el-container>
        <el-main><Main></Main></el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import Header from "./Header";
import SideBar from "./SideBar";
import Main from "./Main";
export default {
  name: "Home",
  components: {
    Header,
    SideBar,
    Main,
  },
};
</script>

<style scoped>
.el-container {
  height: 100vh;
}
</style>
