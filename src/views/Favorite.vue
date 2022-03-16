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
</style>
