<template>
  <div class="ow-wrapper">
    <el-container>
      <el-header class="header-wrapper">
        <Header :menus="menus" />
        <Tabs />
      </el-header>
      <el-main class="content-wrapper">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header/index.vue";
import Tabs from "./components/Tabs/index.vue";
import { menus } from "./components/helper/index";
</script>

<style lang="scss" scoped>
.ow-wrapper {
  min-height: 100vh;
  background-color: $header-background;
  .header-wrapper {
    padding: 0 5%;
  }
  .content-wrapper {
    height: calc(100vh - 60px);
    background-color: $main-background;
  }
}
</style>
