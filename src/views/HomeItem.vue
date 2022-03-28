<template>
  <el-container>
    <el-header><Header></Header></el-header>
    <el-container>
      <el-main>
        <div class="container">
          <div class="img" v-for="item of item" :key="item.id">
            <img :src="item.img" alt="" />
          </div>
          <el-form :model="form" class="form" v-for="item of item" :key="item.id">
            <div class="item">
              <div class="text">{{ item.name }}</div>
              <div class="price">{{ item.price }}</div>
            </div>
            <el-select v-model="form.size" class="m-2" placeholder="Size">
              <el-option label="S" value="S" />
              <el-option label="M" value="M" />
              <el-option label="L" value="L" />
              <el-option label="XL" value="XL" />
            </el-select>
            <el-select v-model="form.sum" class="m-2" placeholder="數量">
              <el-option :label="item.S" :value="item.S" />
              <el-option :label="item.M" :value="item.M" />
              <el-option :label="item.L" :value="item.L" />
              <el-option :label="item.XL" :value="item.XL" />
            </el-select>
            <el-form-item>
              <el-button @click="submitForm()">加入購物車</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { ElMessage } from "element-plus";
import { reactive, computed, onMounted } from "vue";
import { useStore, mapState } from "vuex";
import { homeItemEvent } from "../api/api";
import Header from "../components/Header";
import router from "../router";

export default {
  name: "HomeItem",
  props: ["name"],
  components: {
    Header,
  },
  setup(props) {
    const store = useStore();
    const token = localStorage.getItem("Authorization");
    const form = reactive({
      name: props.name,
      size: "",
      sum: "",
    });
    const getData = () => {
      store.dispatch("getData");
    };
    onMounted(() => {
      getData();
    });
    const item = computed(() =>
      store.state.items.filter((item) => item.name === props.name)
    );
    const submitForm = () => {
      if (!form.size || !form.sum) {
        ElMessage({
          message: "請選擇尺寸及數量",
          type: "warning",
        });
        return false;
      }
      if (token === null) {
        localStorage.setItem(
          "preRoute",
          JSON.stringify(router.currentRoute._value.fullPath)
        );
        router.push("/user/signin");
      } else {
        ElMessage({
          message: "加入成功",
          type: "success",
        });
        homeItemEvent(form);
      }
    };
    return { form, item, submitForm };
  },
  computed: {
    ...mapState(["items"]),
  },
};
</script>
<style scoped>
.el-main {
  height: 100vh;
  overflow: hidden;
}
.el-header {
  margin-top: 10px;
}
.container {
  width: 1200px;
  display: flex;
  justify-content: center;
  margin: auto;
}
.img {
  width: 100%;
}
.img img {
  width: 500px;
}
.form {
  width: 100%;
}
.item {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  color: #646565;
  font-size: 18px;
  line-height: 1.3;
  font-family: "Times New Roman", Times, serif;
}
</style>
