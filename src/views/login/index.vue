<template>
  <div class="ow-wrapper">
    <el-container>
      <el-aside class="aside-wrapper">
        <el-menu :router="true" :mode="`vertical`" :collapse="true">
          <template v-for="menu in menus" :key="menu.path">
            <sub-menu :menu="menu" />
          </template>
        </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import _ from "lodash";
import { getModuleRoutes } from "/@/router/utils";
import { getHeaderMenus } from "/@/layouts/utils";
const routes = getModuleRoutes();
const menus = getHeaderMenus(routes);
</script>

<style lang="scss" scoped>
.ow-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: $header-background;
  .aside-wrapper {
    height: 100vh;
  }
}
</style>
