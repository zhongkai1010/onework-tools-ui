<template>
  <el-container>
    <el-header class="ow_header">
      <div class="ow_main">
        <div class="logo-container">login</div>
        <Aside @menu-click="onMenuClick" :menus="menus" />
        <div>tools</div>
      </div>
      <div>
        <ul style="display: inline-flex">
          <li v-for="(item, index) in store.menus" :key="index">
            {{ item.name }}
          </li>
        </ul>
      </div>
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

const tabs: Tab[] = [
  {
    name: "主页",
    component: import("../views/home/index.vue"),
  },
];

const menus: MenuItem[] = [];
modulePages.forEach((item) => {
  console.log(item);
  if (item.children) {
    if (item.children.length == 1) {
      const menu = {
        key: item.children[0].name,
        title: item.children[0].meta.title,
      };
      menus.push(menu);
    }
    if (item.children.length > 1) {
      const menu = {
        key: item.name,
        title: item.meta.title,
        menus: [],
      };
      item.children.forEach((subItem) => {
        menu.menus.push({
          key: subItem.name,
          title: subItem.meta.title,
        });
      });

      menus.push(menu);
    }
  }
});

console.log("-----------menus----------------", menus);

const router = useRouter();

const onMenuClick = (keyPath: string[]) => {
  const name = keyPath[keyPath.length - 1];

  console.log(name, pageNameMap);
  const pageFun = pageNameMap.get(name);

  console.log("pageFun", pageFun);
  const component = pageFun();
  tabs.push({
    name,
    component,
  });
  const names = name.split("_");
  const url = `/${names.join("/")}`;

  router.push(url);
};
</script>

<style lang="scss" scoped>
.ow_header {
  display: flex;
  height: 60px;
  background-color: #000;
  color: #fff;
  align-items: center;
  justify-items: flex-end;
}
.ow_main {
  width: 92%;
  margin: auto;
}

.logo-container {
  position: relative;
  height: 60px;
  overflow: hidden;
  line-height: 60px;
}
</style>
