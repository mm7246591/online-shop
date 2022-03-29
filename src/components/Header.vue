<template>
  <el-menu class="el-menu-demo" mode="horizontal">
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
    <el-menu-item index="/Signin" class="icon" v-if="getStorage">
      <i class="fa-solid fa-user"></i>
      <router-link :to="{ name: 'User' }">{{ userName }} </router-link>
    </el-menu-item>
    <el-menu-item index="/User" class="icon" v-else>
      <i class="fa-solid fa-user"></i>
      <router-link :to="{ name: 'Signin' }">登入</router-link>
    </el-menu-item>
    <el-menu-item index="/Favorite">
      <i class="fa-solid fa-cart-shopping"></i>
      <router-link :to="{ name: 'Favorite' }">
        <el-badge :value="200" :max="99" class="item">購物車</el-badge>
      </router-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore, mapGetters, mapState } from "vuex";

export default {
  name: "Header",
  components: {},
  setup() {
    const store = useStore();
    const getStorage = computed(() => JSON.parse(localStorage.getItem("User")));
    const getUser = computed(() => store.getters.getUser);
    const userStatus = computed(() => getUser.value.status);
    const userName = computed(() => getUser.value.username);
    return { getStorage, getUser, userStatus, userName };
  },
  computed: {
    ...mapState(["user"]),
    ...mapGetters(["getUser"]),
  },
};
</script>
<style scoped>
.el-menu {
  font-family: "Times New Roman", Times, serif;
  position: relative;
}
.el-menu-item:first-child {
  font-size: 25px;
  font-style: italic;
}
.el-menu-item:not(:first-child) {
  font-size: 18px;
}
.el-menu-item > a {
  text-decoration: none;
}
.el-menu--horizontal > .el-menu-item.icon {
  margin-left: auto;
  width: auto;
}
.icon i,
.icon a {
  width: 100%;
}
</style>
