<template>
  <div class="ow-wrapper">
    <el-container>
      <el-header class="header-wrapper">
        <Header />
        <Tabs />
      </el-header>
      <el-main class="content"> content</el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header/index.vue";
import Tabs from "./components/Tabs/index.vue";
</script>

<style lang="scss" scoped>
.ow-wrapper {
  min-height: 100vh;
  background-color: $header-background;
  .header-wrapper {
    padding: 0 5%;
  }
}
</style>
