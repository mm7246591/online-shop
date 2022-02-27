<template>
  <div class="container">
    <div class="sign-up">
      <span>Sign up</span>
      <el-form>
        <el-form-item label="帳號" required>
          <el-input
            v-model.trim="form.username"
            type="text"
            placeholder="Username"
            clearable
          >
          </el-input>
          <el-alert
            :class="{ empty: checkUsername }"
            title="請輸入帳號"
            type="error"
            show-icon
            :closable="false"
          >
          </el-alert>
        </el-form-item>
        <el-form-item label="密碼" required>
          <el-input
            v-model.trim="form.password"
            type="password"
            placeholder="Password"
            show-password
          >
          </el-input>
          <el-alert
            :class="{ empty: checkPassword }"
            title="請輸入密碼"
            type="error"
            show-icon
            :closable="false"
          >
          </el-alert>
        </el-form-item>
        <el-form-item label="手機" required>
          <el-input
            v-model.trim="form.phone"
            type="tel"
            clearable
            placeholder="Phone"
          >
          </el-input>
          <el-alert
            :class="{ empty: checkPhone }"
            title="請輸入手機號碼"
            type="error"
            show-icon
            :closable="false"
          >
          </el-alert>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">送出</el-button>
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
    const form = reactive({
      username: "",
      password: "",
      phone: "",
    });
    const checkUsername = ref(true);
    const checkPassword = ref(true);
    const checkPhone = ref(true);
    const onSubmit = () => {
      if (form.username === "") {
        checkUsername.value = false;
      } else if (form.password === "") {
        checkPassword.value = false;
      } else if (form.phone === "") {
        checkPhone.value = false;
      } else {
        checkUsername.value = true;
        checkPassword.value = true;
        checkPhone.value = true;
      }
    };
    return {
      form,
      checkUsername,
      checkPassword,
      checkPhone,
      onSubmit,
    };
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
