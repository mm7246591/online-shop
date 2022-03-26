<template>
  <el-container>
    <el-header><Header></Header></el-header>
    <el-container>
      <el-main>
        <div class="container">
          {{ itemId }}
          {{ name }}
          <div class="item">
            <div class="img"></div>
            <div class="text">
              <span>{{ name }}</span>
            </div>
            <div class="size">
              <span>{{ size }}</span>
            </div>
            <div class="price">{{ price }}</div>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { computed } from "vue";
import { useStore, mapState } from "vuex";
import Header from "../components/Header";

export default {
  name: "HomeItem",
  props: ["id", "img", "name", "size", "price"],
  components: {
    Header,
  },
  setup() {
    const store = useStore();
    const itemId = computed(() => {
      console.log(store.state.items);
      return store.state.items.filter((item) => {
        console.log(item);
        return item;
      });
    });
    return { itemId };
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
  width: 100%;
  display: grid;
  justify-items: center;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: 400px;
}
.item {
  width: 250px;
  height: 400px;
}
.img img {
  width: 240px;
  height: 300px;
}
.item .text {
  color: #646565;
  font-size: 18px;
  line-height: 1.3;
  font-family: "Times New Roman", Times, serif;
}
.size,
.price {
  font-family: "Times New Roman", Times, serif;
  font-size: 20px;
  font-style: italic;
  margin: 5px 0;
}
.el-pagination {
  text-align: center;
  --el-pagination-font-size: 20px;
  --el-pagination-button-height: 20px;
}
</style>
