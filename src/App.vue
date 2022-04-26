<template>
  <router-view></router-view>
</template>
<script>
import { useStore } from "vuex";
export default {
  name: "App",
  setup() {
    const store = useStore();
    window.addEventListener("load", function () {
      if (localStorage.getItem("User")) {
        store.commit("MAINTAIN_USER", JSON.parse(localStorage.getItem("User")));
      }
    });
    return { store };
  },
};
</script>
<style scoped>
@import "./assets/Normalize.css";
</style>
