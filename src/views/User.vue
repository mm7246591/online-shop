<template>
  <el-container
    ><el-header><Header /> </el-header>
    <el-main>
      <el-form label-position="top">
        <el-form-item label="username">
          <el-input v-model="user.username" type="text" readonly />
        </el-form-item>
        <el-form-item label="password">
          <el-input v-model="user.password" type="password" />
        </el-form-item>
        <el-form-item label="phone">
          <el-input v-model="user.phone" type="tel" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary">修改</el-button>
          <el-button type="danger" @click="logOut">登出</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
import { ElMessageBox, ElMessage } from "element-plus";
import router from "../router/index";
import Header from "../components/Header";
import { reactive } from "@vue/reactivity";
import axios from "axios";
export default {
  name: "User",
  components: { Header },
  setup() {
    const user = reactive({
      username: "",
      password: "",
      phone: "",
    });
    axios
      .get("/api/user")
      .then((res) => {
        const { username, password, phone } = res.user;
        user.username = username;
        user.password = password;
        user.phone = phone;
        console.log(username, password, phone);
      })
      .catch((err) => {
        console.log(err);
      });
    const logOut = () => {
      ElMessageBox.confirm("確定要登出嗎?", "警告", {
        confirmButtonText: "確定",
        cancelButtonText: "返回",
        type: "warning",
      }).then(() => {
        ElMessage({
          type: "success",
          message: "成功登出",
        });
        localStorage.removeItem("Authorization");
        localStorage.removeItem("User");
        localStorage.removeItem("preRoute");
        router.push("/");
      });
    };
    return { user, logOut };
  },
};
</script>
<style scoped>
.el-header {
  margin-top: 10px;
}
.el-form {
  width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.el-input {
  width: 350px;
}
</style>
