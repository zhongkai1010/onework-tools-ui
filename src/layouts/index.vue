<template>
  <div class="ow-wrapper">
    <div class="header-wrapper">
      <Header :menus="menus" />
      <Tabs />
    </div>
    <div class="content-wrapper">
      <div class="content-container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from './components/header/index.vue'
import Tabs from './components/tabs/index.vue'
import { menus } from './components/helper/index'
</script>

<style lang="scss" scoped>
.ow-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: $header-background;

  .header-wrapper {
    position: fixed;
    height: auto;
    padding: 0px;
    width: 100%;
    border-bottom: 1px solid rgb(0 21 41 / 8%);
    z-index: 100;
  }

  .content-wrapper {
    height: 100vh;
    background-color: $main-background;
    padding-top: 110px;
    z-index: 1;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 5px;
      height: 10px;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background: #bfc7e0;
      opacity: 0.3;
    }

    .content-container {
      padding: 20px;
    }
  }
}
</style>
