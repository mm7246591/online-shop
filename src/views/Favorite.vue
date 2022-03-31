<template>
  <el-container
    ><el-header><Header /></el-header>
    <el-main>
      <div class="container">
        <div class="itemHeader">
          <div class="item">商品</div>
          <div class="group">
            <div class="price">單價</div>
            <div class="count">數量</div>
            <div class="total">總計</div>
            <div class="operate">操作</div>
          </div>
        </div>
        <div class="itemList">
          <div class="item">
            <img src="https://fakeimg.pl/80x80/" />
            <div class="name">男裝 U AIRism棉質寬版圓領T恤(五分袖)</div>
          </div>
          <div class="group">
            <div class="price">$790</div>
            <div class="count">
              <el-input-number :min="1" :max="10" />
            </div>
            <div class="total">NT$1,300</div>
            <div class="operate">
              <button>刪除</button>
            </div>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import Header from "../components/Header";
// import { getShoppingCarEvent } from "../api/api";
export default {
  name: "Favorite",
  components: { Header },
  setup() {
    // getShoppingCarEvent().then((res) => {
    //   console.log(res);
    // });
  },
};
</script>
<style scoped>
.el-header {
  margin-top: 10px;
}
.el-main {
  height: 100vh;
  background-color: rgb(228, 228, 228);
  overflow-y: hidden;
}
.container {
  width: 1200px;
  height: 700px;
  margin: auto;
}
.itemHeader {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 12px;
  font-size: 18px;
  color: gray;
  background-color: white;
  box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.2);
}
.itemHeader .item {
  width: 500px;
  /* margin-left: 20px; */
}
.itemHeader .group {
  display: flex;
}
.itemHeader .group div {
  width: 150px;
  text-align: center;
}
.itemList {
  width: 100%;
  height: auto;
  background-color: white;
  display: flex;
  justify-content: space-around;
  box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.2);
}
.itemList .item {
  width: 500px;
  display: flex;
}
.itemList .item img {
  width: 80px;
  height: 80px;
  margin: 10px 0;
}
.itemList .item .name {
  width: 100%;
  height: 80px;
  line-height: 80px;
  margin: 10px;
}
.itemList .group {
  display: flex;
  align-items: center;
}
.itemList .group div {
  width: 150px;
  height: auto;
  text-align: center;
}
</style>
