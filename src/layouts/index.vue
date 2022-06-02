<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="4">login</el-col>
        <el-col :span="16">
          <Aside @menu-click="onMenuClick" :menus="menus"
        /></el-col>
        <el-col :span="4">tools</el-col>
      </el-row>
      <el-row>
        <ul style="display: inline-flex">
          <li v-for="(item, index) in store.menus" :key="index">
            {{ item.name }}
          </li>
        </ul>
      </el-row>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import Aside from "./components/Aside.vue";
import { RouteRecordRaw, useRouter } from "vue-router";
import { modulePages, pageNameMap } from "../router/index";
import { useMultiTagsStore } from "../store/multiTags";

const store = useMultiTagsStore();

const getMenus = (
  items: RouteRecordRaw[] = [],
  data: MenuItem[] = []
): void => {
  items.forEach((item) => {
    const children = item.children || [];
    const childrenLen = children.length;
    if (childrenLen == 1) {
      const page = children[0];
      const menu: MenuItem = {
        key: page.name as string,
        title: (page.meta ? page.meta.title : page.name) as string,
      };
      data.push(menu);
    }
    if (childrenLen > 1) {
      const menu: MenuItem = {
        key: item.name as string,
        title: (item.meta ? item.meta.title : item.name) as string,
        menus: [],
      };
      children.forEach((subItem) => {
        menu.menus?.push({
          key: subItem.name as string,
          title: (subItem.meta ? subItem.meta.title : subItem.name) as string,
        });
      });
      data.push(menu);
    }
  });
};

const tabs: Tab[] = [
  {
    name: "主页",
    component: import("../views/home/index.vue"),
  },
];

const menus = [];
getMenus(modulePages, menus);

const router = useRouter();

const onMenuClick = async (keyPath: string[]) => {
  const name = keyPath[keyPath.length - 1];
  const pageFun = pageNameMap.get(name);
  const component = await pageFun();
  tabs.push({
    name,
    component,
  });

  console.log();
  const names = name.split("_");
  const url = `/${names.join("/")}`;

  router.push(url);
};
</script>

<style lang="scss" scoped></style>
