<template>
  <div class="sider-container">
    <BasicMenu :items="props.menus" router />
  </div>
</template>

<script setup lang="ts">
  import { BasicMenu } from '/@/components/Menu';
  import { Menu } from '/@/router/types';

  interface Props {
    menus: Menu[];
  }

  const props = defineProps<Props>();
  console.log(props);
</script>
<style lang="scss" scoped>
  .sider-container {
    box-shadow: 1px 0 4px #00152914;
    &:deep(svg) {
      font-size: 14px;
      margin-right: 5px;
    }

    &:deep(.el-menu-item) {
      &.is-active {
        background-color: #408cff;
        color: #fff;
      }
    }

    &:deep(.el-menu) {
      height: 100%;
      border: 0;
    }
  }
</style>
