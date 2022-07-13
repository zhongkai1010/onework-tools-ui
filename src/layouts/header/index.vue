<template>
  <div class="header-container">
    <Logo :title="`OneWork Tools UI`" :logo="logoPng" />
    <el-menu
      mode="horizontal"
      :router="true"
      @select="onMenuSelect"
      :default-active="(selectRoute as string)"
    >
      <template v-for="menu in menus" :key="menu.path">
        <sub-menu :menu="menu" />
      </template>
    </el-menu>
    <Tools />
  </div>
</template>

<script setup lang="ts">
import _ from "lodash";
import { getModuleRoutes, getRouteMap } from "/@/router/utils";
import { getHeaderMenus } from "/@/layouts/utils";
import { headerTabStoreHook, defaultTab } from "/@/store/headerTabs";
import logoPng from "/@/assets/logo.png";
import Logo from "./Logo.vue";
import Tools from "./Tools.vue";
import { computed } from "vue";

const routes = getModuleRoutes();
const routeMap = getRouteMap();
const menus = getHeaderMenus(routes);

const selectRoute = computed(() => {
  const name = headerTabStoreHook().selectedTabName;
  if (name === defaultTab.name) {
    return undefined;
  }
  return name;
});

const onMenuSelect = (_index: any, paths: string[]): void => {
  const path = _.last(paths);
  const route = routeMap[path];
  headerTabStoreHook().setSelectTab({
    name: path,
    text: route.meta.title as string,
    icon: (route.meta.icon || "ant-design:home-outlined") as string
  });
};
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  flex-direction: row;
  padding: 0 5%;
  border-bottom: 1px solid rgb(0 21 41 / 8%);
  outline-style: dotted;
  outline-color: rgb(81, 90, 110);
  background-color: $header-color;

  .el-menu {
    width: 60%;
    border-bottom: 0;
    background-color: $header-color;
    .el-menu-item {
      margin: 10px 5px 0 0;
      border-bottom: 0;
      height: 40px;
      background-color: $header-color;
      &:hover {
        background-color: $header-activate-color;
      }
      &.is-active {
        background-color: $header-activate-color;
      }
    }
    &:deep(.el-sub-menu__title) {
      margin-top: 10px;
      margin-right: 5px;
      height: 40px;
      border-bottom: 0;
    }
    &:deep(.el-sub-menu__title:hover) {
      background-color: $header-activate-color;
    }
    &:deep(.el-sub-menu.is-active .el-sub-menu__title) {
      border: 0;
      background-color: $header-activate-color;
    }
  }
}
</style>
