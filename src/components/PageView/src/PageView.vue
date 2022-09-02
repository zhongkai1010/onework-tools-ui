<template>
  <div class="body_container">
    <slot></slot>
    <div class="copyright">
      Copyright <IconifyIcon icon="ant-design:copyright-circle-outlined" /> 2022 OneWork Tools UI
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
  .body_container {
    padding: 20px;
    min-height: calc(100vh - $layout-header-height - var(--layout-header-tab-height));
    background-color: #fff;

    .copyright {
      margin-left: $layout-sidebar-width;
      position: fixed;
      z-index: 0;
      bottom: 0px;
      left: 0px;
      width: calc(100vw - $layout-sidebar-width);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 8px;
      min-height: 16px;
      color: rgba(0, 0, 0, 0.45);
      i {
        margin: 0 10px;
      }
    }
  }
</style>
