<template>
  <el-container>
    <el-header><Header></Header></el-header>
    <el-container>
      <el-aside width="200px"><SideBar @get-category="getCategory"></SideBar></el-aside>
      <el-main
        ><div class="container">
          <div class="item" v-for="item of displayData" :key="item.id">
            <div class="img">
              <router-link
                :to="{
                  path: `/kids/${item.name}`,
                  query: {
                    name: item.name,
                  },
                }"
              >
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
        </el-pagination
      ></el-main>
    </el-container>
  </el-container>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { useStore, mapGetters } from "vuex";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

export default {
  name: "Home",
  components: {
    Header,
    SideBar,
  },
  setup() {
    const store = useStore();
    const getData = () => {
      store.dispatch("getData");
    };
    onMounted(() => {
      getData();
    });
    const category = ref("");
    const page = ref(1);
    const pageSize = ref(7);
    const displayData = computed(() => {
      if (category.value === "") {
        return store.getters.kidItems.slice(
          pageSize.value * page.value - pageSize.value,
          pageSize.value * page.value
        );
      }
      return store.getters.kidItems.filter((item) =>
        item.category.includes(category.value)
      );
    });
    const total = computed(() => {
      if (displayData.value.length < pageSize.value) {
        return displayData.value.length;
      }
      return store.state.items.length;
    });
    const setPage = (val) => {
      console.log(val);
      page.value = val;
    };
    const getCategory = (val) => {
      category.value = val;
    };
    return {
      category,
      page,
      pageSize,
      displayData,
      total,
      setPage,
      getCategory,
    };
  },
  computed: {
    ...mapGetters(["kidItems"]),
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
  object-fit: cover;
  transition: 0.9s ease-in-out;
  font-family: "Times New Roman", Times, serif;
}
.item .img {
  overflow: hidden;
}
.img img {
  width: 250px;
  height: 300px;
}
.item:hover .img img {
  transform: scale(1.1);
}
.item .text {
  color: #646565;
  font-size: 18px;
  line-height: 1.3;
}
.size {
  letter-spacing: 0.5rem;
}
.size,
.price {
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
