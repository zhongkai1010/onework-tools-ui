<template>
  <div class="wrapper">
    <el-container>
      <el-header v-if="layout === 'horizontal' || layout === 'standard'">
        <layout-header />
      </el-header>
      <el-container>
        <el-aside>
          <layout-sidebar v-if="layout !== 'horizontal'" />
        </el-aside>
        <el-container>
          <el-header>
            <layout-header v-if="!(layout === 'horizontal' || layout === 'standard')" />
            <layout-tabs />
          </el-header>
          <el-main>
            <router-view />
          </el-main>
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
const layout = computed(() => siteConfigStoreHook().layout);
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100wh;
  height: 100vh;
  :deep(.el-aside) {
    width: auto;
  }
  :deep(.el-header) {
    padding: 0px;
  }
  :deep(.el-main) {
    padding: 0px;
  }
}
</style>
