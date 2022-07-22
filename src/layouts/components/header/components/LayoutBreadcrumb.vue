<template>
  <div class="container">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item>
        <IconifyIcon :icon="HOME_PAGE.meta.icon" :size="14" />
        <span>{{ HOME_PAGE.meta.title }}</span>
      </el-breadcrumb-item>
      <el-breadcrumb-item v-for="item in data" :key="item.path">
        <IconifyIcon :icon="item.icon" :size="14" />
        <span>{{ item.title }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { HOME_PAGE } from "/@/router/constant";
import { pageStateStoreHook } from "/@/store/pageState";
const pageStateStore = pageStateStoreHook();
const data = computed(() => pageStateStore.breadcrumbNavs);
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  // background-color: $header-background-color;
  // color: $header-color;
  &:deep(.el-breadcrumb__inner) {
    display: flex;
    align-items: center;
    text-align: center;
    i {
      margin-right: 3px;
    }
    span {
      font-size: 14px;
    }
  }
}
</style>
