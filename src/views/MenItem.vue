<template>
  <el-container>
    <el-header><Header></Header></el-header>
    <el-container>
      <el-main>
        <div class="container">
          <div class="img" v-for="item of items" :key="item.id">
            <img :src="item.img" alt="" />
          </div>
          <el-form v-model="form" class="form" v-for="item of items" :key="item.id">
            <div class="item">
              <div class="text">{{ item.name }}</div>
              <div class="price">{{ item.price }}</div>
            </div>
            <el-select v-model="form.size" class="m-2" placeholder="Size">
              <el-option label="S" value="S" :disabled="item.S === '0' ? true : false" />
              <el-option label="M" value="M" :disabled="item.M === '0' ? true : false" />
              <el-option label="L" value="L" :disabled="item.L === '0' ? true : false" />
              <el-option
                label="XL"
                value="XL"
                :disabled="item.XL === '0' ? true : false"
              />
            </el-select>
            <el-input-number v-model="form.num" :min="1" :max="Number(checkNum)" />
            <span> 還剩{{ checkNum }}件</span>
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
import { MenItemEvent } from "../api/api";
import Header from "../components/Header";
import router from "../router";

export default {
  name: "MenItem",
  props: ["name"],
  components: {
    Header,
  },
  setup(props) {
    const store = useStore();
    const token = JSON.parse(localStorage.getItem("Authorization"));
    const user = JSON.parse(localStorage.getItem("User"));
    const form = reactive({
      username: user.username,
      token: token,
      name: props.name,
      size: "",
      num: null,
    });
    const getData = () => {
      store.dispatch("getData");
    };
    onMounted(() => {
      getData();
    });
    const items = computed(() =>
      store.state.items.filter((item) => item.name === props.name)
    );

    const checkNum = computed(() => {
      if (form.size === "S") {
        return items.value[0].S;
      } else if (form.size === "M") {
        return items.value[0].M;
      } else if (form.size === "L") {
        return items.value[0].L;
      } else if (form.size === "XL") {
        return items.value[0].XL;
      }
      return 9999;
    });
    const submitForm = () => {
      if (!form.size || !form.num) {
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
        router.push({ name: "Signin" });
      } else {
        MenItemEvent(form)
          .then((res) => {
            const { message, shoppingNum } = res;
            store.commit("GET_SHOPPINGNUM", shoppingNum);
            ElMessage({
              message: message,
              type: "success",
            });
          })
          .catch((err) => {
            ElMessage.error(err);
          });
      }
    };
    return { form, items, checkNum, submitForm };
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
