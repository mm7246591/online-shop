<template>
  <div class="hello">
    <button type="button" name="button" v-on:click="getmsg">get</button>
    <button type="button" name="button" v-on:click="postmsg">post</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  setup() {
    const getmsg = () => {
      axios.get("/api/item").then(function (res) {
        console.log("res=", res);
      });
    };
    const postmsg = () => {
      axios.post("/api/favorite", { name: "money" }).then((res) => {
        console.log("post res = ", res);
      });
    };
    return { getmsg, postmsg };
  },
};
</script>

<style></style>
