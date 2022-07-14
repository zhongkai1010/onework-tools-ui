<template>
  <div class="ow-wrapper">
    <div class="tabs-wrapper">
      <LayoutBreadcrumb
        :data="[
          { title: '首页', path: '/', icon: 'ant-design:home-outlined' },
          { title: '示例', path: '/demo', icon: 'mdi:ev-plug-chademo' },
          { title: '布局', path: '/demo/layout', icon: 'ant-design:layout-outlined' }
        ]"
        :show-fold="true"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import LayoutBreadcrumb from "/@/layouts/components/breadcrumb/index.vue";
</script>

<style lang="scss" scoped>
.ow-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  .tabs-wrapper {
  }
}
</style>
