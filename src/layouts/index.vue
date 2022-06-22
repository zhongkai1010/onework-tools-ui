<template>
  <div class="ow-wrapper">
    <el-container>
      <el-header class="header">
        <Header />
        <Tabs />
      </el-header>
      <el-main class="content"> content</el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Header from "./components/header/index.vue";
import Tabs from "./components/tabs/index.vue";
</script>

<style lang="scss" scoped>
.ow-wrapper {
  min-height: 100vh;
  background-color: $header-background;
}
</style>
