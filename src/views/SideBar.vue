<template>
  <el-row class="tac">
    <el-col>
      <el-menu default-active="2" class="el-menu-vertical-demo">
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
            <el-menu-item index="5-1">item one</el-menu-item>
            <el-menu-item index="5-2">item one</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="5-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="5-4">
            <template #title>item four</template>
            <el-menu-item index="5-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu index="6">
          <template #title>
            <span>下身類</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="6-1">item one</el-menu-item>
            <el-menu-item index="6-2">item one</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="6-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="6-4">
            <template #title>item four</template>
            <el-menu-item index="6-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu index="7">
          <template #title>
            <span>連身類</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="7-1">item one</el-menu-item>
            <el-menu-item index="7-2">item one</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="7-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="7-4">
            <template #title>item four</template>
            <el-menu-item index="7-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu index="8">
          <template #title>
            <span>配件</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="8-1">item one</el-menu-item>
            <el-menu-item index="8-2">item one</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="8-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="8-4">
            <template #title>item four</template>
            <el-menu-item index="8-4-1">item one</el-menu-item>
          </el-sub-menu>
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
