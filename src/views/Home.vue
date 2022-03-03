<template>
  <el-container>
    <el-aside width="200px"><SideBar></SideBar></el-aside>
    <el-main> <Items></Items> </el-main>
  </el-container>
</template>

<script>
// @ is an alias to /src
import SideBar from "./SideBar";
import Items from "../components/Items";
export default {
  name: "Home",
  components: {
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
</style>
