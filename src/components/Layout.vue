<template>
  <el-container>
    <el-aside width="200px">
      <Aside @menu-click="onMenuClick" :menus="menus" />
    </el-aside>
    <el-container>
      <el-header> 头部 </el-header>
      <el-main>
        <Main />
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import Aside from "./Aside.vue";
import Main from "./Main.vue";
const menus = [
  {
    key: "key1",
    title: "菜单1",
    menus: [
      {
        key: "key1-1",
        title: "菜单1-1",
      },
      {
        key: "key1-2",
        title: "菜单1-2",
      },
    ],
  },
  {
    key: "key2",
    title: "菜单2",
    menus: [
      {
        key: "key2-1",
        title: "菜单2-1",
      },
    ],
  },
];
/**
 * nav
 */
const onMenuClick = (keyPath: string[]) => {
  console.log(keyPath);
};
</script>
