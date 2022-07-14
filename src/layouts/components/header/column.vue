<template>
  <div class="column-wrapper">
    <div class="left">
      <LayoutLogo :logo="logoImg" :title="'OneWork Tools UI'" :column="true" />
    </div>
    <div class="right">
      <LayoutBreadcrumb
        style="order: -2"
        :data="[
          { title: '首页', path: '/', icon: 'ant-design:home-outlined' },
          { title: '示例', path: '/demo', icon: 'mdi:ev-plug-chademo' },
          { title: '布局', path: '/demo/layout', icon: 'ant-design:layout-outlined' }
        ]"
        :show-fold="true"
      />
      <LayoutTools style="order: -1" />
      <LayoutAvatar :avatar="logoImg" :username="'系统管理员'" style="order: 0" />
    </div>
  </div>
</template>

<script setup lang="ts">
import logoImg from "/@/assets/logo.png";
import LayoutLogo from "/@/layouts/components/logo/index.vue";
import LayoutBreadcrumb from "/@/layouts/components/breadcrumb/index.vue";
import LayoutTools from "/@/layouts/components/tools/index.vue";
import LayoutAvatar from "/@/layouts/components/avatar/index.vue";
</script>

<style lang="scss" scoped>
.column-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  height: $header-height;
  background-color: $header-background-color;
  color: $header-color;
  position: fixed;
  .left {
    position: relative;
    left: 0;
    width: calc($logo-width + 266px);
  }
  .right {
    display: flex;
    align-items: center;
    width: calc(100vw - ($logo-width + 266px));

    position: relative;
    right: 0;
  }
}
</style>
