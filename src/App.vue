<template>
  <div v-loading="isLoading" element-loading-background="rgba(0, 0, 0, 0.7)">
    <router-view></router-view>
  </div>
</template>
<script>
import { computed } from "@vue/runtime-core";
import store from "./store";
export default {
  name: "App",
  components: {},
  setup() {
    const isLoading = computed(() => {
      return store.state.isLoading;
    });
    return { isLoading };
  },
};
</script>
<style scoped>
@import "./assets/Normalize.css";
</style>
