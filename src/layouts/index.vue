<template>
  <el-container class="wrapper">
    <el-aside class="sidebar" v-if="showState.aside">
      <Sidebar />
    </el-aside>
    <el-main class="main">
      <Header class="header" />
      <Tabs class="tabs" :show-fold="true" />
      <div class="content">
        <router-view />
      </div>
    </el-main>
  </el-container>
  <Config />
  <ConfigDrawer />
</template>

<script lang="ts" setup>
import Header from "/@/layouts/components/header/index.vue";
import Sidebar from "/@/layouts/components/sidebar/index.vue";
import Tabs from "/@/layouts/components/tabs/index.vue";
import Config from "/@/layouts/components/setting/index.vue";
import ConfigDrawer from "/@/layouts/components/setting/ConfigDrawer.vue";
import { siteConfigStoreHook } from "/@/store/globalConfig";
import { computed } from "vue";
const showState = computed(() => {
  const layout = siteConfigStoreHook().layout;
  return {
    aside: layout !== "horizontal",
    layout
  };
});
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100wh;
  height: 100vh;

  .sidebar {
    width: auto;
  }
  .main {
    display: flex;
    flex-direction: column;
    padding: 0px;
    .header {
      height: 60px;
    }
  }
}
</style>
