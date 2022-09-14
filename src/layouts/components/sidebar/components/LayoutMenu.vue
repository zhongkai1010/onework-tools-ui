<template>
  <el-scrollbar class="container">
    <el-menu
      :unique-opened="true"
      :collapse="props.menufold"
      :collapse-transition="false"
      :default-active="props.selectMenu"
      @select="onClickMenu"
      :router="false"
    >
      <sub-menu v-for="menu in props.menus" :menu="menu" :key="menu.path" />
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts" setup>
  import { MenuRecordRaw } from '/@/layouts/types';
  import SubMenu from '/@/layouts/components/SubMenu.vue';

  const props = defineProps<{
    menufold: boolean;
    selectMenu?: string;
    menus: MenuRecordRaw[];
  }>();
  const emit = defineEmits<{
    (e: 'selectNav', path: string): boolean;
  }>();
  const onClickMenu = (path: string) => {
    emit('selectNav', path);
  };
</script>

<style lang="scss" scoped>
  .container {
    border: 0px;
    width: var(--layout-sidebar-menu-width);

    &:deep(.el-menu) {
      border: 0px;
    }

    &:deep(.el-sub-menu__title) {
      &:hover {
        background-color: var(--el-color-primary) !important;
        color: var(--el-color-white) !important;
      }
    }
  }
</style>
<style lang="scss">
  .el-menu-item {
    height: $layout-menu-height;

    &:hover {
      background-color: var(--el-color-primary) !important;
      color: var(--el-color-white) !important;
    }

    &.is-active {
      background-color: var(--el-color-primary) !important;
      color: var(--el-color-white) !important;
    }
  }
  .el-menu--popup .el-sub-menu:hover {
    background-color: var(--el-color-primary) !important;
    color: var(--el-color-white) !important;
  }
  .el-menu--popup {
    padding: 0px;
  }
</style>
