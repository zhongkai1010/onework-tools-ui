<template>
  <div class="sidebar-container">
    <Logo title="OneWork Tools UI" class="logo" />
    <Menu :data="menus" class="menu" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { siteConfigStoreHook } from "/@/store/globalConfig";
import Menu from "./menu.vue";
import Logo from "./logo.vue";
import { getMenus } from "/@/layouts/utils";

const menuWidth = computed(() => `${siteConfigStoreHook().menuWidth}px`);
const { menus } = getMenus();
</script>

<style lang="scss" scoped>
.sidebar-container {
  width: v-bind(menuWidth);
  height: 100%;
  .logo {
    height: $header-height;
  }
  .menu {
    height: calc(100% - $header-height);
  }
}
</style>
