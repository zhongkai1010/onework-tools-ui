<template>
  <div class="sidebar-container" :class="[layout, menufold ? 'fold ' : '']">
    <template v-if="layout == 'column'">
      <div class="left">
        <layout-logo :logo="logoImg" state="logo" />
        <div class="nav">
          <layout-nav :data="tabs" />
        </div>
      </div>
      <div class="right">
        <layout-logo title="Drug Clinical Trials" state="title" />
        <el-divider content-position="center">其它</el-divider>
        <div class="menu">
          <layout-menu :data="menus" :collapse="false" />
        </div>
      </div>
    </template>
    <template v-if="layout == 'complex' || layout == 'portrait'">
      <div class="right">
        <layout-logo
          title="Drug Clinical Trials"
          :state="menufold ? 'logo' : 'all'"
          :logo="logoImg"
        />
        <div class="menu">
          <layout-menu :data="menus" :collapse="menufold" />
        </div>
      </div>
    </template>
    <template v-if="layout == 'standard'">
      <div class="right">
        <div class="menu">
          <layout-menu :data="menus" :collapse="menufold" />
        </div>
      </div>
    </template>
    <template v-if="layout == 'float'">
      <div class="right">
        <layout-logo :logo="logoImg" state="logo" />
        <div class="menu">
          <layout-menu :data="menus" :collapse="true" />
        </div>
      </div>
    </template>
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
    z-index: 2000;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
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
.float {
  .right {
    .menu {
      width: $logo-width;
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
