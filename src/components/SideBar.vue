<template>
  <el-row class="tac">
    <el-col>
      <el-menu class="el-menu-vertical-demo">
        <el-menu-item index="本週新品" @click="getCategory('本週新品')"
          >本週新品</el-menu-item
        >
        <el-menu-item index="熱銷商品" @click="getCategory('熱銷商品')">
          熱銷商品
        </el-menu-item>
        <el-menu-item index="限時折扣" @click="getCategory('限時折扣')"
          >限時折扣</el-menu-item
        >
        <el-sub-menu index="/tops">
          <template #title>
            <span>上身類</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/tops/shortsleeve"> 短袖</el-menu-item>
            <el-menu-item index="/tops/sleeveless">無袖/背心</el-menu-item>
            <el-menu-item index="/tops/longsleeveless">長袖/七分</el-menu-item>
            <el-menu-item index="/tops/shirt">襯衫</el-menu-item>
            <el-menu-item index="/tops/hoodie">休閒/連帽 </el-menu-item>
            <el-menu-item index="/tops/knitwear">針織/毛衣 </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="/bottoms">
          <template #title>
            <span>下身類</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/bottoms/shorts">短褲</el-menu-item>
            <el-menu-item index="/bottoms/jeans">牛仔褲</el-menu-item>
            <el-menu-item index="/bottoms/pants">休閒長褲</el-menu-item>
            <el-menu-item index="/bottoms/anklepants">九分褲</el-menu-item>
            <el-menu-item index="/bottoms/dresspants">西裝褲</el-menu-item>
            <el-menu-item index="/bottoms/skirts">短裙/長裙</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="/onepiece">
          <template #title>
            <span>連身類</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/onepiece/dresses">佯裝</el-menu-item>
            <el-menu-item index="/onepiecs/suit">套裝</el-menu-item>
            <el-menu-item index="/onepiecs/jumpsuits">吊帶/連身褲</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="/outwear">
          <template #title>
            <span>外套類</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/outwear/casual">休閒</el-menu-item>
            <el-menu-item index="/outwear/coat">風衣/大衣</el-menu-item>
            <el-menu-item index="/outwear/blazer">西裝外套</el-menu-item>
            <el-menu-item index="/outwear/downjacket">羽絨外套</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="/accessories">
          <template #title>
            <span>配件</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="9-1">針式/夾式耳環</el-menu-item>
            <el-menu-item index="9-2">項鍊/戒指/手鍊</el-menu-item>
            <el-menu-item index="9-3">帽子/手套/圍巾</el-menu-item>
            <el-menu-item index="9-4">皮帶/領帶</el-menu-item>
            <el-menu-item index="9-5">襪子/鞋子</el-menu-item>
            <el-menu-item index="9-6">環保袋/包包</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "SideBar",
  setup(props, ctx) {
    const getCategory = (val) => {
      ctx.emit("get-category", val);
    };
    return { getCategory };
  },
};
</script>

<style scoped>
.el-menu-item > a:link {
  color: black;
}
.el-menu-item > a:visited {
  color: black;
}
.router-link-exact-active {
  color: #409eff !important;
  transition: 0.3s;
}

.el-menu-item > a {
  text-decoration: none;
  width: 100%;
}
</style>
