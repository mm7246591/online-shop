<template>
  <el-container>
    <el-header><Header /></el-header>
    <div class="container">
      <div class="sign-up">
        <span>Sign up</span>
        <el-form ref="ruleForm" :model="form" :rules="formRules">
          <el-form-item label="帳號" prop="username">
            <el-input
              v-model.trim="form.username"
              type="text"
              placeholder="username"
              clearable
            >
            </el-input>
          </el-form-item>
          <el-form-item label="密碼" prop="password">
            <el-input
              v-model.trim="form.password"
              type="password"
              placeholder="請輸入介於8-20位數之間密碼"
              show-password
            >
            </el-input>
          </el-form-item>
          <el-form-item label="手機" prop="phone">
            <el-input v-model.trim="form.phone" type="tel" clearable placeholder="phone">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit(ruleForm)">送出</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </el-container>
</template>

<script>
import { reactive, ref } from "vue";
import { getMember } from "../api/api.js";
import router from "../router/index.js";
import Header from "../components/Header";

export default {
  name: "Signup",
  components: { Header },
  setup() {
    const form = reactive({
      username: "",
      password: "",
      phone: "",
    });
    const ruleForm = ref(null);
    const usernameReg = ref(/^[a-zA-Z0-9]+$/);
    const passwordReg = ref(/^.{1,5}$/);
    const phoneReg = ref(/^09[0-9]{8}$/);
    const validateUsername = (rule, value, callback) => {
      if (!form.username) {
        return callback(new Error("請輸入帳號"));
      } else {
        if (usernameReg.value.test(form.username)) {
          callback();
        } else {
          return callback(new Error("帳號格式不正確"));
        }
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (!form.password) {
        return callback(new Error("請輸入密碼"));
      } else {
        if (passwordReg.value.test(form.password)) {
          callback();
        } else {
          return callback(new Error("密碼格式不正確"));
        }
      }
    };
    const validatePhone = (rule, value, callback) => {
      if (!form.phone) {
        return callback(new Error("請輸入手機號碼"));
      } else {
        if (phoneReg.value.test(form.phone)) {
          callback();
        } else {
          return callback(new Error("手機號碼格式不正確"));
        }
      }
    };
    const formRules = reactive({
      username: [{ required: true, validator: validateUsername, trigger: "blur" }],
      password: [{ required: true, validator: validatePassword, trigger: "blur" }],
      phone: [{ required: true, validator: validatePhone, trigger: "blur" }],
    });
    const onSubmit = () => {
      ruleForm.value.validate((valid) => {
        if (valid) {
          getMember(form);
          router.push("/member");
        } else {
          return false;
        }
      });
    };
    return {
      form,
      ruleForm,
      formRules,
      onSubmit,
    };
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
  width: 350px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.el-input {
  width: 300px;
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
.el-menu {
  font-family: "Times New Roman", Times, serif;
  position: relative;
}
.el-menu-item:first-child {
  font-size: 25px;
  font-style: italic;
}
.el-menu-item:not(:first-child) {
  font-size: 16px;
}
.el-menu-item > a {
  text-decoration: none;
}
.el-form-item__error {
  font-size: 15px !important;
}
</style>
