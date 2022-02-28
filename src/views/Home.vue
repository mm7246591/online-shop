<template>
  <el-container>
    <el-aside width="200px"><SideBar></SideBar></el-aside>
    <el-main> <Item></Item> </el-main>
  </el-container>
</template>

<script>
// @ is an alias to /src
import SideBar from "./SideBar";
import Item from "../components/Item";
export default {
  name: "Home",
  components: {
    Item,
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
