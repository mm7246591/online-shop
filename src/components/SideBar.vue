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
        <el-sub-menu index="上身類">
          <template #title>
            <span>上身類</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="短袖"> 短袖</el-menu-item>
            <el-menu-item index="無袖/背心">無袖/背心</el-menu-item>
            <el-menu-item index="長袖/七分">長袖/七分</el-menu-item>
            <el-menu-item index="襯衫">襯衫</el-menu-item>
            <el-menu-item index="休閒/連帽">休閒/連帽</el-menu-item>
            <el-menu-item index="針織/毛衣">針織/毛衣</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="下身類">
          <template #title>
            <span>下身類</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="短褲">短褲</el-menu-item>
            <el-menu-item index="牛仔褲">牛仔褲</el-menu-item>
            <el-menu-item index="休閒長褲">休閒長褲</el-menu-item>
            <el-menu-item index="九分褲">九分褲</el-menu-item>
            <el-menu-item index="西裝褲">西裝褲</el-menu-item>
            <el-menu-item index="短裙/長裙">短裙/長裙</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="連身類">
          <template #title>
            <span>連身類</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="佯裝">佯裝</el-menu-item>
            <el-menu-item index="套裝">套裝</el-menu-item>
            <el-menu-item index="吊帶/連身褲">吊帶/連身褲</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="外套類">
          <template #title>
            <span>外套類</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="休閒">休閒</el-menu-item>
            <el-menu-item index="風衣/大衣">風衣/大衣</el-menu-item>
            <el-menu-item index="西裝外套">西裝外套</el-menu-item>
            <el-menu-item index="羽絨外套">羽絨外套</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="配件">
          <template #title>
            <span>配件</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="針式/夾式耳環">針式/夾式耳環</el-menu-item>
            <el-menu-item index="項鍊/戒指/手鍊">項鍊/戒指/手鍊</el-menu-item>
            <el-menu-item index="帽子/手套/圍巾">帽子/手套/圍巾</el-menu-item>
            <el-menu-item index="皮帶/領帶">皮帶/領帶</el-menu-item>
            <el-menu-item index="襪子/鞋子">襪子/鞋子</el-menu-item>
            <el-menu-item index="環保袋/包包">環保袋/包包</el-menu-item>
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
