<template>
  <div
    class="wrapper"
    :data-layout="layout"
    :style="{ '--layout-nav-height': navHeight, '--layout-left-width': leftWidth }"
  >
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
            <layout-tabs v-if="showTabs" />
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
  <TabTools />
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { siteConfigStoreHook } from "/@/store/globalConfig";
import { pageStateStoreHook } from "/@/store/pageState";

import LayoutHeader from "/@/layouts/components/header/index.vue";
import LayoutSidebar from "/@/layouts/components/sidebar/index.vue";
import LayoutTabs from "/@/layouts/components/tabs/index.vue";
import Config from "/@/layouts/components/setting/index.vue";
import ConfigDrawer from "/@/layouts/components/setting/ConfigDrawer.vue";
import TabTools from "/@/layouts/components/tabs/TabTools.vue";

const showTabs = computed(() => siteConfigStoreHook().showTabs);
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

const navHeight = computed(() => (siteConfigStoreHook().showTabs ? "50px" : "0px"));
</script>

<style lang="scss" scoped>
.wrapper {
  .wrapper_header,
  .wrapper_left,
  .wrapper_nav {
    padding: 0px;
    // background-color: $header-background-color;
    // color: $header-color;
  }
  .wrapper_header {
    box-shadow: 0px 1px 4px rgb(0 21 41 / 8%);
    z-index: map-get($z-layers, "level_one");
  }
  .wrapper_left {
    box-shadow: 0px 1px 4px rgb(0 21 41 / 8%);
    z-index: map-get($z-layers, "level_two");
  }
  .wrapper_body {
    @include scrollBar;
    overflow: auto;
  }
}

.wrapper[data-layout="complex"],
.wrapper[data-layout="portrait"],
.wrapper[data-layout="column"] {
  .wrapper_left {
    position: fixed;
    width: var(--layout-left-width);
    height: 100vh;
  }
  .wrapper_nav {
    position: fixed;
    margin-left: var(--layout-left-width);
    width: calc(100vw - var(--layout-left-width));
    height: calc($header-height + var(--layout-nav-height));
  }
  .wrapper_body {
    position: fixed;
    width: calc(100vw - var(--layout-left-width));
    height: calc(100vh - ($header-height + var(--layout-nav-height)));
    margin-top: calc($header-height + var(--layout-nav-height));
    margin-left: var(--layout-left-width);
  }
}

.wrapper[data-layout="standard"] {
  .wrapper_header {
    position: fixed;
    width: 100vw;
    height: $header-height;
  }
  .wrapper_left {
    position: fixed;
    width: var(--layout-left-width);
    height: calc(100vh - $header-height);
    margin-top: $header-height;
  }
  .wrapper_nav {
    position: fixed;
    width: calc(100vw - var(--layout-left-width));
    height: var(--layout-nav-height);
    margin-top: $header-height;
    margin-left: var(--layout-left-width);
  }
  .wrapper_body {
    position: fixed;
    width: calc(100vw - var(--layout-left-width));
    height: calc(100vh - $header-height - var(--layout-nav-height));
    margin-top: calc($header-height + var(--layout-nav-height));
    margin-left: var(--layout-left-width);
  }
}

.wrapper[data-layout="horizontal"] {
  .wrapper_header {
    position: fixed;
    width: 100vw;
    height: $header-height;
  }
  .wrapper_nav {
    position: fixed;
    width: 100vw;
    height: var(--layout-nav-height);
    margin-top: $header-height;
  }
  .wrapper_body {
    position: fixed;

    width: 100vw;
    height: calc(100vh - $header-height - var(--layout-nav-height));
    margin-top: calc($header-height + var(--layout-nav-height));
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
    width: calc(100vw - $logo-width);
    height: calc(100vh - $header-height);
    margin-top: calc($header-height + var(--layout-nav-height));
    margin-left: $logo-width;
  }
}
</style>
