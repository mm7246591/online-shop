<template>
  <div class="container">
    <div class="item" v-for="item of displayData" :key="item.id">
      <div class="img">
        <router-link to="/">
          <img :src="item.img" alt="" />
        </router-link>
      </div>
      <div class="text">
        <span>{{ item.name }}</span>
      </div>
      <div class="size">
        <span>{{ item.size }}</span>
      </div>
      <div class="price">{{ item.price }}</div>
    </div>
  </div>
  <el-pagination
    :page-size="pageSize"
    :total="total"
    layout="prev, pager, next"
    @current-change="setPage"
  >
  </el-pagination>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { useStore, mapState } from "vuex";
export default {
  name: "Item",
  setup() {
    const store = useStore();
    onMounted(() => {
      getData();
    });
    const getData = () => {
      store.dispatch("getData");
    };
    const page = ref(1);
    const pageSize = ref(7);
    const total = ref(14);
    const displayData = computed(() => {
      return store.state.items.slice(
        pageSize.value * page.value - pageSize.value,
        pageSize.value * page.value
      );
    });
    const setPage = (val) => {
      page.value = val;
    };
    return { store, page, total, pageSize, displayData, setPage };
  },
  computed: {
    ...mapState(["items"]),
  },
};
</script>

<style scoped>
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
.text a {
  text-decoration: none;
}
.text a :link,
.text a:hover,
.text a:visited,
.text a:active,
.text a:focus {
  color: #646565;
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
