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
        <el-scrollbar class="menu-container">
          <LayoutMenu />
        </el-scrollbar>
      </div>
    </el-aside>
    <el-main class="main-content">
      <el-container>
        <el-header class="header-wrapper"> header </el-header>
        <el-main class="main-wrapper">
          <div class="tabs-wrapper">tabs-wrapper</div>
          <div class="body-wrapper">
            body-wrapper
            <placeholder />
          </div>
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
  background-color: #51557e;
  font-style: 60px;
  color: #fff;
  .nav-wrapper {
    .logo {
      display: block;
      width: $logo-width;
      height: $header-height;
      background-color: #231955;
    }
    .nav-container {
      width: $logo-width;
      height: calc(100vh - $header-height);
      background-color: #1f4690;
    }
  }
  .menu-wrapper {
    .title {
      width: v-bind(menuWidth);
      height: $header-height;
      background-color: #ffe5b4;
    }
    .menu-container {
      width: v-bind(menuWidth);
      height: calc(100vh - $header-height);
      background-color: #e8aa42;
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
    background-color: #51557e;
  }
  .tabs-wrapper {
    height: 50px;
    background-color: #816797;
  }
  .body-wrapper {
    position: relative;

    background-color: #d6d5a8;
  }
}
</style>
