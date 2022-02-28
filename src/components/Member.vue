<template>
  <div class="container">
    <div class="sign-in">
      <span>Sign in</span>
      <el-form>
        <el-form-item label="帳號">
          <el-input v-model.trim="form.username" type="text" clearable>
            <template #prefix>
              <i class="fa-solid fa-user"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="密碼">
          <el-input v-model.trim="form.password" type="password" show-password>
            <template #prefix>
              <i class="fa-solid fa-lock"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登入</el-button>
          <el-button type="primary">
            <router-link :to="{ name: 'Signup' }">註冊</router-link>
          </el-button>
        </el-form-item>
      </el-form>
      <el-dialog v-model="check" width="500px" center :show-close="false">
        <p>帳號或密碼未輸入</p>
        <template #footer>
          <span class="dialog-footer">
            <el-button type="primary" @click="check = false">確認</el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  name: "Member",
  setup() {
    const form = reactive({
      username: "",
      password: "",
    });
    const check = ref(false);

    const onSubmit = () => {
      if (!form.username || !form.password) {
        check.value = true;
      } else {
        check.value = false;
      }
    };

    return { form, check, onSubmit };
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
.sign-in {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sign-in span {
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
.el-dialog__body > p {
  text-align: center;
  color: red;
  font-size: 30px;
  margin: 0;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
