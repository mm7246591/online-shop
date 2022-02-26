<template>
  <div class="container">
    <div class="item">
      <div class="img">
        <router-link to="/">
          <img src="https://picsum.photos/id/237/250/300" alt="" />
        </router-link>
      </div>
      <div class="text">
        <span>小狗狗</span>
      </div>
      <div class="size">
        <span>M</span>
      </div>
      <div class="price">NT$1,300</div>
    </div>
    <div class="item">
      <div class="img">
        <router-link to="/">
          <img src="https://picsum.photos/id/237/250/300" alt="" />
        </router-link>
      </div>
      <div class="text">
        <span>小狗狗</span>
      </div>
      <div class="size">
        <span>M</span>
      </div>
      <div class="price">NT$1,300</div>
    </div>
    <div class="item">
      <div class="img">
        <router-link to="/">
          <img src="https://picsum.photos/id/237/250/300" alt="" />
        </router-link>
      </div>
      <div class="text">
        <span>小狗狗</span>
      </div>
      <div class="size">
        <span>M</span>
      </div>
      <div class="price">NT$1,300</div>
    </div>
    <div class="item">
      <div class="img">
        <router-link to="/">
          <img src="https://picsum.photos/id/237/250/300" alt="" />
        </router-link>
      </div>
      <div class="text">
        <span>小狗狗</span>
      </div>
      <div class="size">
        <span>M</span>
      </div>
      <div class="price">NT$1,300</div>
    </div>
    <div class="item">
      <div class="img">
        <router-link to="/">
          <img src="https://picsum.photos/id/237/250/300" alt="" />
        </router-link>
      </div>
      <div class="text">
        <span>小狗狗</span>
      </div>
      <div class="size">
        <span>M</span>
      </div>
      <div class="price">NT$1,300</div>
    </div>
    <div class="item">
      <div class="img">
        <router-link to="/">
          <img src="https://picsum.photos/id/237/250/300" alt="" />
        </router-link>
      </div>
      <div class="text">
        <router-link to="/">
          <span>小狗狗</span>
        </router-link>
      </div>
      <div class="size">
        <span>M</span>
      </div>
      <div class="price">NT$1,300</div>
    </div>
    <div class="item">
      <div class="img">
        <router-link to="/">
          <img src="https://picsum.photos/id/237/250/300" alt="" />
        </router-link>
      </div>
      <div class="text">
        <router-link to="/">
          <span>厚磅寬版刺繡TEE(男女適穿)</span>
        </router-link>
      </div>
      <div class="size">
        <span>M</span>
      </div>
      <div class="price">NT$1,300</div>
    </div>
  </div>
  <el-pagination
    :page-size="50"
    :pager-count="7"
    layout="prev, pager, next"
    :total="1000"
  >
  </el-pagination>
</template>

<script>
// import { ref } from "@vue/reactivity";
export default {
  name: "Item",
  // setup() {
  //   const pageSize = ref(null);
  //   return { pageSize };
  // },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  overflow: hidden;
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
