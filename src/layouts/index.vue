<template>
  <el-container>
    <el-header class="header">
      <div class="header-container">
        <a class="logo" href="/">
          <img src="../assets/logo.png" />
          <span class="title">OneWork Toools UI</span>
        </a>
        <div class="menu">
          <Aside :menus="menus" />
        </div>
        <div class="tool">
          <el-button :icon="Search" circle />
          <el-button type="primary" :icon="Edit" />
          <el-button type="success" :icon="Check" />
          <el-button type="info" :icon="Message" />
          <el-button type="warning" :icon="Star" />
          <el-button type="danger" :icon="Delete" />
        </div>
      </div>
    </el-header>
    <el-main class="content">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import Aside from "./components/Aside.vue";

import { modulePages } from "../router/index";

import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from "@element-plus/icons-vue";
import { RouteRecordRaw } from "vue-router";

const menus: MenuItem[] = [];
modulePages.forEach((item: RouteRecordRaw) => {
  console.log(item);
  if (item.children) {
    if (item.children.length == 1) {
      const rootItem: RouteRecordRaw = item.children[0];
      const menu: MenuItem = {
        key: rootItem.name as string,
        title: rootItem.meta?.title as string,
      };
      menus.push(menu);
    }
    if (item.children.length > 1) {
      const menu: MenuItem = {
        key: item.name as string,
        title: item.meta?.title as string,
        menus: [] as MenuItem[],
      };
      item.children.forEach((subItem: RouteRecordRaw) => {
        menu.menus?.push({
          key: subItem.name as string,
          title: subItem.meta?.title as string,
        });
      });

      menus.push(menu);
    }
  }
});

console.log("-----------menus----------------", menus);
</script>

<style lang="scss" scoped>
:root {
  --el-color-primary: #409eff;
  --el-color-primary-light-3: #79bbff;
  --el-color-primary-light-5: #a0cfff;
  --el-color-primary-light-7: #c6e2ff;
  --el-color-primary-light-8: #d9ecff;
  --el-color-primary-light-9: #ecf5ff;
  --el-color-primary-dark-2: #337ecc;
}
html body {
  font-family: PingFang SC, Arial, Microsoft YaHei, sans-serif;
  font-size: 14px;
  color: var(--el-color-black);
}
.header {
  height: 60px;

  .header-container {
    display: flex;
    padding: 0 20px 0 20px;
    min-height: 100%;
    width: 92% !important;
    margin: auto !important;

    .logo {
      display: flex;
      a {
        margin-right: 10%;
      }
      img {
        height: 32px;
        margin: auto;
      }
    }
    .title {
      display: inline-block;
      margin-left: 5px;
      overflow: hidden;
      font-size: 20px;
      line-height: 55px;

      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: middle;
    }
    .menu {
      height: 60px;
      margin-left: 60px;
    }
    .menu > .el-menu {
      height: 40px;
      top: 10px;
      border-bottom: 0px;
    }
  }
}
</style>
<style>
.el-menu--horizontal > .el-menu-item {
  margin-right: 5px;
  border-radius: 5px;
}

.el-menu--horizontal > .el-sub-menu {
  border-radius: 5px;
}

.el-menu--horizontal > .el-menu-item.is-active {
  background-color: aquamarine;
  border-bottom: 0px;
}
</style>
