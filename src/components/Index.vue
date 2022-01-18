<template>
  <el-container>
    <el-aside width="230px"
      >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
      aspernatur doloremque temporibus, maxime aut quis quod ipsam, eum quasi
      quaerat culpa, reprehenderit suscipit tempore voluptatum soluta nemo. Sit,
      nemo omnis.</el-aside
    >
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String,
  },
};
</script>
<style scoped>
body {
  margin: 0px;
}
.el-menu {
  padding: 10px;
  margin: 0px 50px;
  font-family: "Times New Roman", Times, serif;
}
.el-menu-item {
  font-size: 20px;
}
.el-aside {
  height: 100vh;
  background-color: #545c64;
}
</style>
