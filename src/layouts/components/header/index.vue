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
  flex-direction: row;
  padding: 0 5%;
  border-bottom: 1px solid rgb(0 21 41 / 8%);
  background-color: $header-background;
  & :deep(.el-menu--horizontal) {
    border-bottom: 0px;
    width: 50%;
  }
}
</style>
