<template>
  <el-container>
    <el-header><Header /></el-header>
    <el-main>
      <div class="container">
        <div class="signIn">
          <span>Sign in</span>
          <el-form ref="ruleForm" :model="form" :rules="formRules">
            <el-form-item label="帳號" prop="username">
              <el-input v-model.trim="form.username" type="text" clearable>
                <template #prefix>
                  <i class="fa-solid fa-user"></i>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item label="密碼" prop="password">
              <el-input v-model.trim="form.password" type="password" show-password>
                <template #prefix>
                  <i class="fa-solid fa-lock"></i>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit(ruleForm)">登入</el-button>
              <el-button type="primary">
                <router-link :to="{ name: 'Signup' }">註冊</router-link>
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import { ElMessage } from "element-plus";
import { reactive, ref } from "vue";
import { signinEvent } from "../api/api.js";
import { useStore } from "vuex";
import router from "../router/index.js";
import Header from "../components/Header";

export default {
  name: "Member",
  components: { Header },
  setup() {
    const form = reactive({
      username: "",
      password: "",
    });
    const store = useStore();
    const ruleForm = ref(null);
    const formRules = reactive({
      username: [{ required: true, message: "請輸入帳號", trigger: "blur" }],
      password: [{ required: true, message: "請輸入密碼", trigger: "blur" }],
    });

    const onSubmit = async () => {
      await ruleForm.value.validate((valid) => {
        if (valid) {
          signinEvent(form)
            .then((res) => {
              const { status, token, username } = res;
              const user = {
                username,
                status,
              };
              store.commit("USER", user);
              store.commit("SET_TOKEN", token);
              const curr = JSON.parse(localStorage.getItem("preRoute"));
              curr ? router.push({ path: curr }) : router.push({ path: "/" });
            })
            .catch((err) => {
              ElMessage.error(err);
              form.username = "";
              form.password = "";
            });
        } else {
          return false;
        }
      });
    };
    return { form, formRules, ruleForm, onSubmit };
  },
};
</script>
<style scoped>
.el-header {
  margin-top: 10px;
}
.container {
  max-width: 1200px;
  margin: auto;
  padding-top: 30px;
  display: flex;
  justify-content: center;
}
.signIn {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.signIn span {
  font-size: 30px;
  font-family: "Times New Roman", Times, serif;
  line-height: 1.3;
  color: #646565;
  margin-bottom: 10px;
}
.el-form {
  width: 300px;
  height: 300px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.fa-user,
.fa-lock {
  width: 15px;
  height: 20px;
  padding: 6px 0;
}
.el-button + .el-button {
  margin-left: 12px;
  width: 62px;
}
.el-button a {
  width: 60px;
  line-height: 32px;
  text-decoration: none;
  color: white;
}
.el-alert {
  --el-alert-title-font-size: 18px;
  margin-bottom: 10px;
}
</style>
