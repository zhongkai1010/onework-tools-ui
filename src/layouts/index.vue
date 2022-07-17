<template>
  <div class="wrapper">
    <el-container>
      <el-header v-if="showState.horizontal">
        <layout-header />
      </el-header>
      <el-container>
        <el-aside>
          <layout-sidebar v-if="!showState.horizontal" />
        </el-aside>
        <el-container>
          <el-header>
            <layout-header v-if="!showState.horizontal" />
            <layout-tabs :show-fold="true" />
          </el-header>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
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
import { computed } from "vue";
const showState = computed(() => {
  const layout = siteConfigStoreHook().layout;
  return {
    horizontal: layout === "horizontal" || layout === "standard",
    layout
  };
});
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100wh;
  height: 100vh;
  :deep(.el-aside) {
    width: auto;
  }
}
</style>
