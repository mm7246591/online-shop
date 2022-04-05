<template>
  <el-container
    ><el-header><Header /></el-header>
    <el-main>
      <div class="container">
        <div class="itemHeader">
          <div class="item">商品</div>
          <div class="group">
            <div class="price">單價</div>
            <div class="count">數量</div>
            <div class="total">總計</div>
            <div class="operate">操作</div>
          </div>
        </div>
        <el-form class="itemList" v-for="item of items" :key="item._id">
          <div class="item">
            <img src="https://fakeimg.pl/80x80/" />
            <div class="name">{{ item.name }}</div>
          </div>
          <div class="group">
            <div class="price">{{ item.price }}</div>
            <div class="count">
              <el-input-number
                v-model="form.num"
                :min="1"
                :max="Number(item.num)"
              />
            </div>
            <div class="total">{{ item.price }}</div>
            <div class="operate">
              <el-button @click="deleteEvent(item._id)">刪除</el-button>
            </div>
          </div>
        </el-form>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import { ElMessage } from "element-plus";
import { getShoppingCarEvent, deleteShoppingCarEvent } from "../api/api";
import { onMounted, reactive, ref } from "vue";
import Header from "../components/Header";
import { useStore } from "vuex";

export default {
  name: "Favorite",
  components: { Header },
  setup() {
    const form = reactive({
      id: null,
      num: null,
    });
    const items = ref(null);
    const store = useStore();
    onMounted(() => {
      getShoppingCarEvent().then((res) => {
        const { shoppingCar } = res;
        items.value = shoppingCar;
      });
    });
    const deleteEvent = (id) => {
      form.id = id;
      deleteShoppingCarEvent(form).then((res) => {
        const { message } = res;
        ElMessage({
          message: message,
          type: "success",
        });
        store.commit("DELETE_SHOPPINGNUM", 1);
        items.value = items.value.filter((item) => item._id !== id);
      });
    };
    return { form, items, deleteEvent };
  },
};
</script>
<style scoped>
.el-header {
  margin-top: 10px;
}
.el-main {
  height: 100vh;
  background-color: rgb(228, 228, 228);
}
.container {
  width: 1200px;
  height: 100%;
  margin: auto;
}
.itemHeader {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 12px;
  font-size: 18px;
  color: gray;
  background-color: white;
  box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.2);
}
.itemHeader .item {
  width: 500px;
  /* margin-left: 20px; */
}
.itemHeader .group {
  display: flex;
}
.itemHeader .group div {
  width: 150px;
  text-align: center;
}
.itemList {
  width: 100%;
  height: auto;
  margin: 10px 0;
  background-color: white;
  display: flex;
  justify-content: space-around;
  box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.2);
}
.itemList .item {
  width: 500px;
  display: flex;
}
.itemList .item img {
  width: 80px;
  height: 80px;
  margin: 10px 0;
}
.itemList .item .name {
  width: 100%;
  height: 80px;
  line-height: 80px;
  margin: 10px;
}
.itemList .group {
  display: flex;
  align-items: center;
}
.itemList .group div {
  width: 150px;
  height: auto;
  text-align: center;
}
</style>
