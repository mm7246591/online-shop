<template>
  <el-container>
    <el-header
      ><el-menu class="el-menu-demo" mode="horizontal">
        <el-menu-item index="/"
          ><router-link to="/">YanShop</router-link>
        </el-menu-item>
        <el-menu-item index="/Men">
          <router-link :to="{ name: 'Men' }"> MEN </router-link>
        </el-menu-item>
        <el-menu-item index="/Women"
          ><router-link :to="{ name: 'Women' }">
            WOMEN
          </router-link></el-menu-item
        >
        <el-menu-item index="/Kids"
          ><router-link :to="{ name: 'Kids' }">KIDS</router-link></el-menu-item
        >
      </el-menu></el-header
    >
  </el-container>
  <div v-for="item of items" :key="item.id">
    {{ item }}
  </div>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
import { useStore, mapState } from "vuex";

export default {
  name: "Favorite",
  setup() {
    const store = useStore();
    const getData = () => {
      store.dispatch("getData");
    };
    onMounted(() => {
      getData();
    });
    const abc = computed(() => {
      for (let i of store.state.items) {
        console.log(i);
      }
      return 1223;
    });
    return { store, abc };
  },
  computed: {
    ...mapState(["items"]),
  },
};
</script>
<style scoped>
.el-header {
  margin-top: 10px;
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
