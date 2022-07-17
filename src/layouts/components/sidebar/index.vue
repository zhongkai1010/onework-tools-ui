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
      <layout-logo title="OneWork Toos UI" :logo="logoImg" :state="showLeft ? 'title' : 'all'" />
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
import LayoutNav from "./components/nav.vue";
import LayoutLogo from "./components/logo.vue";
import { getMenus, getTabs } from "/@/layouts/utils";
import logoImg from "/@/assets/logo.png";
const layout = computed(() => siteConfigStoreHook().layout);
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
  .left {
    .logo {
      width: $logo-width;
      height: $header-height;
      padding: 16px;
      img {
        width: 32px;
      }
    }
  }
  &.float {
    .right {
      display: none;
    }
  }
  &.fold {
    .right {
      width: 64px;
    }
  }
}
</style>
