<template>
  <el-container>
    <el-aside width="200px">
      <Aside @menu-click="onMenuClick" :menus="menus" />
    </el-aside>
    <el-container>
      <el-header>头部</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Aside from "./components/Aside.vue";
import { moduleList } from "../router/index";
import { useRouter, RouteRecordRaw } from "vue-router";

const getMenus = (
  items: RouteRecordRaw[] = [],
  data: MenuItem[] = []
): void => {
  items.forEach((item) => {
    const menu: MenuItem = {
      key: item.name as string,
      title: (item.meta ? item.meta.title : item.name) as string,
    };
    if (item.children) {
      menu.menus = [];
      getMenus(item.children || [], menu.menus);
    }
    data.push(menu);
  });
};

const menus = [];
getMenus(moduleList, menus);

const router = useRouter();

const onMenuClick = (keyPath: string[]) => {
  const name = keyPath[keyPath.length - 1];
  const names = name.split("_");
  const url = `/${names.join("/")}`;
  console.log(url);
  router.push(url);
};
</script>
