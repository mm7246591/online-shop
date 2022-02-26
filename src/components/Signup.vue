<template>
  <div class="container">
    <div class="sign-up">
      <span>Sign up</span>
      <el-form>
        <el-form-item label="帳號" required>
          <el-input
            v-model="signUpForm.username"
            type="text"
            placeholder="username"
            clearable
          >
          </el-input>
          <el-alert
            :class="{ empty: isEmpty }"
            title="請輸入帳號"
            type="error"
            show-icon
            :closable="false"
          >
          </el-alert>
        </el-form-item>
        <el-form-item label="密碼" required>
          <el-input
            v-model="signUpForm.password"
            type="password"
            placeholder="password"
            show-password
          >
          </el-input>
          <el-alert
            :class="{ empty: isEmpty }"
            title="請輸入密碼"
            type="error"
            show-icon
            :closable="false"
          >
          </el-alert>
        </el-form-item>
        <el-form-item label="手機" required>
          <el-input v-model="signUpForm.phone" clearable placeholder="phone">
          </el-input>
          <el-alert
            :class="{ empty: isEmpty }"
            title="請輸入手機號碼"
            type="error"
            show-icon
            :closable="false"
          >
          </el-alert>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSignup">送出</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  name: "Signup",
  setup() {
    const signInForm = reactive({
      username: "",
      password: "",
    });
    const signUpForm = reactive({
      username: "",
      password: "",
      phone: "",
    });
    const isEmpty = ref(true);
    const onSignin = () => {
      if (!signInForm.username || !signInForm.password) {
        isEmpty.value = false;
      }
    };
    const onSignup = () => {
      if (!signUpForm.username || !signUpForm.password) {
        isEmpty.value = false;
      } else {
        isEmpty.value = !isEmpty.value;
      }
    };
    return { signInForm, signUpForm, isEmpty, onSignin, onSignup };
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: auto;
  padding-top: 30px;
  display: flex;
  justify-content: center;
}
.sign-in,
.sign-up {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sign-in span,
.sign-up span {
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
.el-alert {
  --el-alert-padding: 0;
  --el-alert-title-font-size: 18px;
  margin-top: 10px;
}
.empty {
  display: none;
}
.el-button a {
  text-decoration: none;
  color: white;
}
</style>
