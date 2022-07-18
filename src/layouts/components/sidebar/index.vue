<template>
  <div class="sidebar-container" :class="[layout, menufold ? 'fold ' : '']">
    <div class="left" v-if="showLeft">
      <layout-logo :logo="logoImg" state="logo" />
      <div class="nav">
        <layout-nav :data="tabs" v-if="layout !== 'float'" />
        <layout-menu :data="menus" :collapse="true" v-if="layout === 'float'" />
      </div>
    </div>
    <div class="right">
      <layout-logo
        title="Drug Clinical Trials"
        :logo="logoImg"
        :state="menufold ? 'logo' : showLeft ? 'title' : 'all'"
        v-show="layout !== 'standard'"
      />
      <el-divider content-position="center" v-if="layout === 'column'">其它</el-divider>
      <div class="menu">
        <layout-menu :data="menus" :collapse="menufold" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { siteConfigStoreHook } from "/@/store/globalConfig";
import { pageStateStoreHook } from "/@/store/pageState";
import LayoutMenu from "./components/LayoutMenu.vue";
import LayoutNav from "./components/LayoutNav.vue";
import LayoutLogo from "./components/LayoutLogo.vue";
import { getMenus, getTabs } from "/@/layouts/utils";
import logoImg from "/@/assets/logo.png";
const layout = computed(() => siteConfigStoreHook().layout);
const menuWidth = computed(() => `${siteConfigStoreHook().menuWidth}px`);
const menufold = computed(() => pageStateStoreHook().menufold);
const showLeft = computed(() => {
  const value = siteConfigStoreHook().layout;
  return value === "column" || value === "float";
});

const { menus } = getMenus();
const tabs = getTabs();
</script>

<style lang="scss" scoped>
.sidebar-container {
  display: flex;
  box-shadow: 4px 0px 10px rgba(0, 21, 41, 0.08);
  background-color: $header-background-color;
  color: $header-color;
  .left {
    .nav {
      width: $logo-width;
      height: calc(100vh - $header-height);
    }
  }
  .right {
    .menu {
      width: v-bind(menuWidth);
      height: calc(100vh - $header-height);
    }
  }
}
.column {
  &:deep(.el-divider--horizontal) {
    margin: 10px 10%;
    width: 80%;
  }
  .right {
    .menu {
      height: calc(100vh - 11px - $header-height);
    }
  }
  &.fold {
    .right {
      display: none;
    }
  }
}
.fold {
  .right {
    .menu {
      width: $logo-width;
    }
  }
}
</style>
