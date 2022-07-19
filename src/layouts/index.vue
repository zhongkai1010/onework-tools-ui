<template>
  <div class="wrapper" :data-layout="layout">
    <el-container>
      <el-header v-if="horizontal" class="wrapper_header">
        <layout-header />
      </el-header>
      <el-container>
        <el-aside v-if="layout !== 'horizontal'" class="wrapper_left">
          <layout-sidebar />
        </el-aside>
        <el-container>
          <el-header class="wrapper_nav">
            <layout-header v-if="!horizontal" />
            <layout-tabs />
          </el-header>
          <el-main class="wrapper_body">
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
  <Config />
  <ConfigDrawer />
</template>

<script lang="ts" setup>
import LayoutHeader from "/@/layouts/components/header/index.vue";
import LayoutSidebar from "/@/layouts/components/sidebar/index.vue";
import LayoutTabs from "/@/layouts/components/tabs/index.vue";
import Config from "/@/layouts/components/setting/index.vue";
import ConfigDrawer from "/@/layouts/components/setting/ConfigDrawer.vue";
import { siteConfigStoreHook } from "/@/store/globalConfig";
import { pageStateStoreHook } from "/@/store/pageState";
import { computed } from "vue";

const layout = computed(() => siteConfigStoreHook().layout);
const horizontal = computed(() => {
  const store = siteConfigStoreHook();
  return store.layout === "horizontal" || store.layout === "standard";
});

const leftWidth = computed(() => {
  const pageStateStore = pageStateStoreHook();
  const siteConfigStore = siteConfigStoreHook();
  if (pageStateStore.menufold) {
    return "64px";
  } else {
    if (siteConfigStore.layout == "column") {
      return `${siteConfigStore.menuWidth + 64}px`;
    } else {
      return `${siteConfigStore.menuWidth}px`;
    }
  }
});
</script>

<style lang="scss" scoped>
.wrapper {
  :deep(.el-header) {
    padding: 0px;
  }
  :deep(.el-main) {
    padding: 0px;
    @include scrollBar;
  }
}

.wrapper[data-layout="complex"],
.wrapper[data-layout="portrait"],
.wrapper[data-layout="column"] {
  .wrapper_left {
    position: fixed;
    width: v-bind(leftWidth);
    height: 100vh;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    z-index: 2;
  }
  .wrapper_nav {
    position: fixed;
    margin-left: v-bind(leftWidth);
    width: calc(100vw - v-bind(leftWidth));
    height: calc($header-height + $menu-height);
    z-index: 1;
  }
  .wrapper_body {
    position: fixed;
    width: calc(100vw - v-bind(leftWidth));
    height: calc(100vh - ($header-height + $menu-height));
    margin-top: calc($header-height + $menu-height);
    margin-left: v-bind(leftWidth);
    z-index: 1;
  }
}

.wrapper[data-layout="standard"] {
  .wrapper_header {
    position: fixed;
    z-index: 1;
    width: 100vw;
    height: $header-height;
  }
  .wrapper_left {
    position: fixed;
    width: v-bind(leftWidth);
    height: calc(100vh - $header-height);
    margin-top: $header-height;
    z-index: 2;
  }
  .wrapper_nav {
    position: fixed;
    z-index: 1;
    width: 100vw;
    height: $menu-height;
    margin-top: $header-height;
  }
  .wrapper_body {
    position: fixed;
    z-index: 3;
    width: 100vw;
    height: calc(100vh - $header-height - $menu-height);
    margin-top: calc($header-height + $menu-height);
    margin-left: v-bind(leftWidth);
  }
}

.wrapper[data-layout="horizontal"] {
  .wrapper_header {
    position: fixed;
    z-index: 1;
    width: 100vw;
    height: $header-height;
  }
  .wrapper_nav {
    position: fixed;
    z-index: 2;
    width: 100vw;
    height: $menu-height;
    margin-top: $header-height;
  }
  .wrapper_body {
    position: fixed;
    z-index: 3;
    width: 100vw;
    height: calc(100vh - $header-height - $menu-height);
    margin-top: calc($header-height + $menu-height);
  }
}

.wrapper[data-layout="float"] {
  .wrapper_left {
    position: fixed;
    width: $logo-width;
    height: 100vh;
  }
  .wrapper_nav {
    position: fixed;
    width: calc(100vw - $logo-width);
    height: $header-height;
    margin-left: $logo-width;
  }
  .wrapper_body {
    position: fixed;
    z-index: 3;
    width: calc(100vw - $logo-width);
    height: calc(100vh - $header-height);
    margin-top: calc($header-height + $menu-height);
    margin-left: $logo-width;
  }
}
</style>
