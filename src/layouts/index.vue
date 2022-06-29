<template>
  <div class="ow-wrapper">
    <div class="header-wrapper">
      <Header :menus="menus" />
      <Tabs />
    </div>
    <div class="content-wrapper">
      <router-view v-slot="{ Component }">
        <KeepAlive>
          <component :is="Component" />
        </KeepAlive>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "./components/header/index.vue";
import Tabs from "./components/tabs/index.vue";
import { getModuleRoutes } from "../router/utils";
import { getHeaderMenus } from "./utils";

const routes = getModuleRoutes();
const menus = getHeaderMenus(routes);
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<style lang="scss" scoped>
.ow-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: $header-background;
  .header-wrapper {
    position: fixed;
    z-index: 100;
    padding: 0;
    width: 100%;
    height: auto;
    border-bottom: 1px solid rgb(0 21 41 / 8%);
  }
  .content-wrapper {
    z-index: 1;
    overflow: auto;
    padding-top: 110px;
    height: 100vh;
    background-color: $main-background;
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
