<template>
  <el-container>
    <el-aside class="aside-wrapper">
      <div class="nav-wrapper">
        <a class="logo">logo</a>
        <el-scrollbar class="nav-container">
          <LayoutNav />
        </el-scrollbar>
      </div>
      <div class="menu-wrapper">
        <div class="title">title</div>
        <LayoutMenu class="menu-container" :data="[]" />
      </div>
    </el-aside>
    <el-main class="main-content">
      <el-container>
        <el-header class="header-wrapper"> header </el-header>
        <el-main class="main-wrapper">
          <div class="tabs-wrapper">tabs-wrapper</div>
          <div class="body-wrapper">body-wrapper</div>
        </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import { siteConfigStoreHook } from "/@/store/globalConfig";
import LayoutNav from "/@/layouts/components/nav/index.vue";
import LayoutMenu from "/@/layouts/components/menu/index.vue";
import { computed } from "vue";

const menuWidth = computed(() => `${siteConfigStoreHook().menuWidth}px`);
</script>

<style lang="scss" scoped>
$logo-width: 64px;
$header-height: 60px;

.aside-wrapper {
  display: flex;
  width: calc($logo-width + v-bind(menuWidth));

  font-style: 60px;
  color: #fff;
  .nav-wrapper {
    .logo {
      display: block;
      width: $logo-width;
      height: $header-height;
    }
    .nav-container {
      width: $logo-width;
      height: calc(100vh - $header-height);
    }
  }
  .menu-wrapper {
    .title {
      width: v-bind(menuWidth);
      height: $header-height;
    }
    .menu-container {
      width: v-bind(menuWidth);
      height: calc(100vh - $header-height);
    }
  }
}
.main-content {
  font-style: 60px;
  color: #fff;
  padding: 0;
  &:deep(.el-main) {
    padding: 0px;
  }
  .header-wrapper {
    height: $header-height;
  }
  .tabs-wrapper {
    height: 50px;
  }
  .body-wrapper {
    position: relative;
  }
}
</style>
