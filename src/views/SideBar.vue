<template>
  <el-row class="tac">
    <el-col>
      <el-menu class="el-menu-vertical-demo">
        <el-menu-item index="1">
          <span>本周新品</span>
        </el-menu-item>
        <el-menu-item index="2">
          <span>熱銷補貨</span>
        </el-menu-item>
        <el-menu-item index="3">
          <span>限時折扣</span>
        </el-menu-item>
        <el-sub-menu index="4">
          <template #title>
            <span>上身類</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="5-1">短袖</el-menu-item>
            <el-menu-item index="5-2">無袖/背心</el-menu-item>
            <el-menu-item index="5-3">長袖/七分</el-menu-item>
            <el-menu-item index="5-4">襯衫</el-menu-item>
            <el-menu-item index="5-5">休閒/連帽</el-menu-item>
            <el-menu-item index="5-6">針織/毛衣</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="6">
          <template #title>
            <span>下身類</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="6-1">短褲</el-menu-item>
            <el-menu-item index="6-2">牛仔褲</el-menu-item>
            <el-menu-item index="6-3">休閒長褲</el-menu-item>
            <el-menu-item index="6-4">九分褲</el-menu-item>
            <el-menu-item index="6-5">西裝褲</el-menu-item>
            <el-menu-item index="6-6">短裙/長裙</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="7">
          <template #title>
            <span>連身類</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="7-1">佯裝</el-menu-item>
            <el-menu-item index="7-2">套裝</el-menu-item>
            <el-menu-item index="7-3">吊帶/連身褲</el-menu-item>
            <el-menu-item index="7-4">泳衣/比基尼</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="8">
          <template #title>
            <span>外套類</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="8-1">休閒</el-menu-item>
            <el-menu-item index="8-2">風衣/大衣</el-menu-item>
            <el-menu-item index="8-3">西裝外套</el-menu-item>
            <el-menu-item index="8-4">羽絨外套</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="9">
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
};
</script>

<style></style>
