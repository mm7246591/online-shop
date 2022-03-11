<template>
  <div v-loading="isLoading" element-loading-background="rgba(0, 0, 0, 0.7)">
    <router-view></router-view>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "App",
  components: {},
  setup() {},
  computed: {
    ...mapState(["isLoading"]),
  },
};
</script>
<style scoped>
@import "./assets/Normalize.css";
</style>
