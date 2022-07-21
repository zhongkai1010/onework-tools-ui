<template>
  <div class="container">
    <el-menu mode="horizontal">
      <sub-menu v-for="menu in menus" :menu="menu" :key="menu.path" />
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { pageStateStoreHook } from "/@/store/pageState";
import { computed } from "vue";
const pageStateStore = pageStateStoreHook();
const menus = computed(() => pageStateStore.menus);
</script>

<style lang="scss" scoped>
@mixin menu-item {
  margin: 10px 5px 0 0;
  border-bottom: 0;
  height: 40px;
  &:hover {
    background-color: $activate-background;
    color: $activate-color;
  }
  &.is-active {
    background-color: $activate-background;
    color: $activate-color;
  }
}

.container {
  width: 100%;
  height: 100%;
  &:deep(.el-menu) {
    border-bottom: 0px;
  }
  &:deep(.el-menu-item) {
    @include menu-item();
  }
  &:deep(.el-sub-menu__title) {
    @include menu-item();
  }
}
</style>
