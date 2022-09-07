<template>
  <div class="body_container" :style="styleProps">
    <slot></slot>
    <div class="copyright">
      Copyright <IconifyIcon icon="ant-design:copyright-circle-outlined" /> 2022 OneWork Tools UI
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { CSSProperties } from 'vue';

  interface Props {
    gutter?: number;
    bgColor?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    gutter: 20,
    bgColor: true
  });

  const styleProps = computed<CSSProperties>(() => {
    return {
      padding: `${props.gutter}px`,
      backgroundColor: props.bgColor ? '#fff' : 'transparent'
    };
  });
</script>

<style lang="scss" scoped>
  .body_container {
    margin: $layout-body-margin;
    min-height: $main-no-margin-height;
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
