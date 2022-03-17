<template>
  <el-container>
    <el-header><Header /></el-header>
    <div class="container">
      <div class="sign-up">
        <span>Sign up</span>
        <div v-for="error of errors" :key="error.msg">{{ error.msg }}</div>
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
import { useStore, mapState } from "vuex";
import { signupEvent } from "../api/api.js";
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
    const store = useStore();
    const getErrors = async () => {
      store.dispatch("getErrors");
    };
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
          signupEvent(form);
          getErrors();
          router.push({ path: "/user" });
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
  computed: {
    ...mapState(["errors"]),
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
  width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.el-input {
  width: 350px;
}
.el-form-item__error {
  font-size: 15px !important;
}
.el-form-item--default {
  --font-size: 18px;
}
</style>
