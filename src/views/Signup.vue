<template>
  <el-container>
    <el-header
      ><el-menu class="el-menu-demo" mode="horizontal">
        <el-menu-item index="/"><router-link to="/">YanShop</router-link> </el-menu-item>
        <el-menu-item index="/Men">
          <router-link :to="{ name: 'Men' }"> MEN </router-link>
        </el-menu-item>
        <el-menu-item index="/Women"
          ><router-link :to="{ name: 'Women' }"> WOMEN </router-link></el-menu-item
        >
        <el-menu-item index="/Kids"
          ><router-link :to="{ name: 'Kids' }">KIDS</router-link></el-menu-item
        >
      </el-menu></el-header
    >
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
              placeholder="請輸入介於8-20位數之間密碼"
              show-password
            >
            </el-input>
            <el-alert
              :class="{ empty: passwordLimit }"
              title="密碼不符合規範"
              type="error"
              show-icon
              :closable="false"
            >
            </el-alert>
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
            <el-input v-model.trim="form.phone" type="tel" clearable placeholder="Phone">
            </el-input>
            <el-alert
              :class="{ empty: phoneLimit }"
              title="手機號碼格式有錯"
              type="error"
              show-icon
              :closable="false"
            >
            </el-alert>
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
  </el-container>
</template>

<script>
import { reactive, ref } from "vue";
import { getMember } from "../api/api.js";
import router from "../router";
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
    const passwordLimit = ref(true);
    const passwordReg = ref(/^.{6,20}$/);
    const checkPhone = ref(true);
    const phoneLimit = ref(true);
    const phoneReg = ref(/^09[0-9]{8}$/);
    const check = (username, password, phone) => {
      if (username === "") {
        checkUsername.value = false;
      } else if (password === "") {
        checkPassword.value = false;
      } else if (phone === "") {
        checkPhone.value = false;
      } else {
        checkUsername.value = true;
        checkPassword.value = true;
        checkPhone.value = true;
        passwordLimit.value = true;
        phoneLimit.value = true;
      }
      // if (passwordReg.value.test(form.password) === false) {
      //   passwordLimit.value = false;
      // }
      // if (phoneReg.value.test(form.phone) === false) {
      //   phoneLimit.value = false;
      // }
    };
    const onSubmit = () => {
      check(form.username, form.password, form.phone);
      getMember(form);
      router.push("/member");
    };
    return {
      form,
      checkUsername,
      checkPassword,
      passwordLimit,
      passwordReg,
      checkPhone,
      phoneLimit,
      phoneReg,
      check,
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
</style>
