<template>
  <div v-loading="isLoading" element-loading-background="rgba(0, 0, 0, 0.7)">
    <router-view></router-view>
  </div>
</template>
<script>
import { useStore, mapState } from "vuex";
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
  computed: {
    ...mapState(["isLoading"]),
  },
};
</script>
<style scoped>
@import "./assets/Normalize.css";
</style>
