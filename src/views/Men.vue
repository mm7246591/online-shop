<template>
  <el-container>
    <el-header><Header></Header></el-header>
    <el-container>
      <el-aside width="200px"><SideBar></SideBar></el-aside>
      <el-main> <Items></Items> </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Items from "../components/Items";
export default {
  name: "Home",
  components: {
    Header,
    Items,
    SideBar,
  },
};
</script>
<style scoped>
.el-main {
  height: 100vh;
  overflow: hidden;
}
.el-header {
  margin-top: 10px;
}
</style>
