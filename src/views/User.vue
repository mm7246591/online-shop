<template>
  <el-container
    ><el-header><Header /> </el-header>
    <!-- <el-main
      ><el-form label-width="100px" label-position="top">
        <el-form-item label="userName">
          <el-input />
        </el-form-item>
        <el-form-item label="password">
          <el-input />
        </el-form-item>
        <el-form-item label="phone">
          <el-input />
        </el-form-item> </el-form
    ></el-main> -->
  </el-container>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "User",
  components: { Header },
  setup() {},
};
</script>
<style scoped>
.el-header {
  margin-top: 10px;
}
.el-form {
  width: 500px;
  margin: auto;
}
</style>
