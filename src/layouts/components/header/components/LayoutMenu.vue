<template>
  <div class="container">
    <el-menu
      mode="horizontal"
      :unique-opened="true"
      :default-active="props.selectMenu"
      @select="onClickMenu"
      :router="false"
    >
      <sub-menu v-for="menu in props.menus" :menu="menu" :key="menu.path" />
    </el-menu>
  </div>
</template>
<script setup lang="ts">
  import { MenuRecordRaw } from '/#/layouts';

  const props = defineProps<{
    menus: MenuRecordRaw[];
    selectMenu?: string;
  }>();
  const emit = defineEmits<{
    (e: 'selectMenu', path: string): void;
  }>();
  const onClickMenu = (path: string) => {
    emit('selectMenu', path);
  };
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;

    &:deep(.el-menu) {
      border-bottom: 0px;
      background-color: var(--sidebar-bg-color);
      color: var(--sidebar-font-color);
    }

    &:deep(.el-sub-menu) {
      &.is-active {
        .el-sub-menu__title {
          border-bottom: 0;
          background-color: var(--el-color-primary);
          color: var(--el-color-white);
        }
      }
    }

    &:deep(.el-sub-menu__title) {
      margin: 10px 5px 0 0;
      border-bottom: 0;
      height: 40px;
      color: var(--sidebar-font-color);

      &:hover {
        background-color: var(--el-color-primary);
        color: var(--el-color-white);
      }

      &.is-active {
        background-color: var(--el-color-primary);
        color: var(--el-color-white);
      }
    }
  }
</style>
<style lang="scss">
  .el-popper {
    border-radius: 0px;
  }

  .el-popper.is-light {
    border: 0px;
  }

  .el-menu--horizontal {
    border: 0px;

    .el-menu {
      .el-menu-item {
        height: $layout-menu-height;
      }
      .el-sub-menu {
        .el-sub-menu__title {
          height: $layout-menu-height;
        }
      }
      .is-active {
        .el-sub-menu__title {
          background-color: var(--el-color-primary);
          color: var(--el-color-white) !important;
        }
      }
    }
  }

  // .el-menu--popup {
  //   padding: 0px;
  //   border-radius: 0px;

  //   .el-sub-menu {
  //     .el-sub-menu__title {
  //       height: $layout-menu-height;
  //     }
  //     &:hover {
  //       background-color: var(--el-color-primary);
  //       color: var(--el-color-white);
  //     }
  //   }

  //   .el-sub-menu ~ .is-active {
  //     background-color: var(--el-color-primary);
  //     color: var(--el-color-white);
  //   }
  // }
</style>
