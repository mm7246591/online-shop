<template>
  <el-container>
    <el-header><Header></Header></el-header>
    <el-container>
      <el-aside width="200px"
        ><SideBar @get-category="getCategory"></SideBar
      ></el-aside>
      <el-main
        ><div class="container">
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
          :total="data.length"
          layout="prev, pager, next"
          @current-change="setPage"
        >
        </el-pagination
      ></el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { computed, onMounted, ref } from "vue";
import { getItems } from "../api/api";
export default {
  name: "Home",
  components: {
    Header,
    SideBar,
  },
  setup() {
    onMounted(() => {
      getData();
    });
    const getData = async () => {
      try {
        const { items } = await getItems();
        data.value = items.filter((item) => item.category.includes("男"));
      } catch (err) {
        console.error(err);
      }
    };
    const category = ref("");
    const data = ref([]);
    const page = ref(1);
    const pageSize = ref(7);
    const displayData = computed(() => {
      if (
        category.value === "本週新品" ||
        category.value === "熱銷商品" ||
        category.value === "限時折扣"
      ) {
        return data.value.filter((item) =>
          item.category.includes(category.value)
        );
      }
      return data.value.slice(
        pageSize.value * page.value - pageSize.value,
        pageSize.value * page.value
      );
    });
    const setPage = (val) => {
      page.value = val;
    };
    const getCategory = (val) => {
      category.value = val;
    };
    return {
      category,
      data,
      page,
      pageSize,
      displayData,
      setPage,
      getCategory,
    };
  },
};
</script>
<style scoped>
.el-header {
  margin-top: 10px;
}
.el-main {
  height: 100vh;
  overflow: hidden;
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
  object-fit: cover;
  transition: 0.9s ease-in-out;
}
.item .img {
  overflow: hidden;
}
.img img {
  width: 240px;
  height: 300px;
}
.item:hover .img img {
  transform: scale(1.1);
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
