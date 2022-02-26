<template>
  <el-container>
    <el-aside width="200px"><SideBar></SideBar></el-aside>
    <el-container>
      <el-main> <Item></Item></el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import SideBar from "./SideBar";
import Item from "../components/Item";
export default {
  name: "Home",
  components: {
    SideBar,
    Item,
  },
};
</script>
