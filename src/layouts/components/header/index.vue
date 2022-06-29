<template>
  <div class="header-container">
    <Logo :title="`OneWork Tools UI`" :logo="logoPng" />
    <ElMenu mode="horizontal" :router="true" @select="onMenuSelect">
      <template v-for="menu in props.menus" :key="menu.path">
        <SubMenu :menu="menu" />
      </template>
    </ElMenu>
    <Tools />
  </div>
</template>

<script setup lang="ts">
import logoPng from "../../../assets/logo.png";
import { HeaderMenu } from "../../types";
import _ from "lodash";
import { getRouteMap } from "/@/router/utils";
import { useMultiTagsStore } from "/@/store/multiTags";
import Logo from "./Logo.vue";

import Tools from "./Tools.vue";
const props = defineProps<{
  menus: HeaderMenu[];
}>();

const routes = getRouteMap();

const onMenuSelect = (index: any, path: string[]): void => {
  console.log("onMenuSelect", routes);
  console.log("onMenuSelect", path);
  console.log("onMenuSelect", routes[_.last(path)]);
  const route = routes[_.last(path)];

  useMultiTagsStore().openTab({
    name: route.meta.title,
    path: _.last(path),
    icon: route.meta.icon,
    closed: true
  });
};
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  padding: 0 5%;
  min-height: 100%;
  border-bottom: 1px solid rgb(0 21 41 / 8%);
  background-color: $header-background;
  .logo {
    display: flex;
    margin-right: 40px;
    img {
      margin: auto;
      height: 32px;
    }
  }
  .title {
    display: inline-block;
    overflow: hidden;
    margin-left: 5px;
    font-size: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #515a6e !important;
    line-height: 60px;
    vertical-align: middle;
  }
  .el-menu {
    width: 60%;
    border-bottom: 0;
    background-color: $header-background;
    .el-menu-item {
      margin: 10px 5px 0 0;
      border-bottom: 0;
      height: 40px;
      background-color: $header-menu-background;
      &:hover {
        background-color: $header-menu-activate-background;
      }
      &.is-active {
        background-color: $header-menu-activate-background;
      }
    }
    &:deep(.el-sub-menu__title) {
      margin-top: 10px;
      margin-right: 5px;
      height: 40px;
      border-bottom: 0;
    }
    &:deep(.el-sub-menu__title:hover) {
      background-color: $header-menu-activate-background;
    }
    &:deep(.el-sub-menu.is-active .el-sub-menu__title) {
      border: 0;
      background-color: $header-menu-activate-background;
    }
  }
  .tool {
    display: flex;
    align-items: center;
    .button {
      margin-left: 20px;
      cursor: pointer;
    }
  }
}
</style>
