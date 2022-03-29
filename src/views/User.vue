<template>
  <el-container
    ><el-header><Header /> </el-header>
    <el-main>
      <el-form :model="form" label-position="top">
        <el-form-item label="使用者帳號" prop="username">
          <span style="width: 350px">{{ form.username }}</span>
        </el-form-item>
        <el-form-item label="現在的密碼" prop="oldPassword">
          <el-input v-model="form.oldPassword" type="password" />
        </el-form-item>
        <el-form-item label="新的密碼" prop="newPassword">
          <el-input v-model="form.newPassword" type="password" />
        </el-form-item>
        <el-form-item label="電話" prop="phone">
          <el-input v-model="form.phone" type="tel" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="update">修改</el-button>
          <el-button type="danger" @click="logOut">登出</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
import { ElMessageBox, ElMessage } from "element-plus";
import router from "../router/index";
import { ref, reactive } from "@vue/reactivity";
import { userEvent, updateUserEvent } from "../api/api";
import Header from "../components/Header";
export default {
  name: "User",
  components: { Header },
  setup() {
    const form = reactive({
      username: "",
      oldPassword: "",
      newPassword: "",
      phone: "",
    });
    const passwordReg = ref(/^.{1,5}$/);
    const phoneReg = ref(/^09[0-9]{8}$/);
    userEvent()
      .then((res) => {
        const { username, phone } = res.user;
        form.username = username;
        form.phone = phone;
      })
      .catch((err) => {
        console.log(err);
      });
    const update = () => {
      if (!form.oldPassword || !form.newPassword) {
        ElMessage.error("密碼欄不能為空");
      } else if (passwordReg.value.test(form.oldPassword) === false) {
        ElMessage.error("密碼格式不正確");
      } else if (passwordReg.value.test(form.newPassword) === false) {
        ElMessage.error("密碼格式不正確");
      } else if (!form.phone) {
        ElMessage.error("電話欄不能為空");
      } else if (phoneReg.value.test(form.phone) === false) {
        ElMessage.error("電話格式不正確");
      } else {
        updateUserEvent(form)
          .then((res) => {
            const { message } = res;
            ElMessage({
              type: "success",
              message: message,
            });
            form.oldPassword = "";
            form.newPassword = "";
          })
          .catch((err) => {
            ElMessage.error(err);
            form.oldPassword = "";
            form.newPassword = "";
          });
      }
    };
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
    return {
      form,
      passwordReg,
      phoneReg,
      update,
      logOut,
    };
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
