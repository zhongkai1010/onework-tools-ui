<template>
  <el-scrollbar class="container">
    <el-tabs :tab-position="'left'" :model-value="props.selectNav" :before-leave="onClickNav">
      <el-tab-pane v-for="tab in props.navs" :key="tab.name" :name="tab.path">
        <template #label>
          <div class="menu-item">
            <IconifyIcon :icon="tab.icon" />
            <span>{{ tab.title }}</span>
          </div>
        </template>
      </el-tab-pane>
    </el-tabs>
  </el-scrollbar>
</template>

<script lang="ts" setup>
  import { MenuRecordRaw } from '/@/layouts/types';

  const props = defineProps<{
    selectNav?: string;
    navs: MenuRecordRaw[];
  }>();
  const onClickNav = (path: string) => {
    emit('selectNav', path);
  };
  const emit = defineEmits<{
    (e: 'selectNav', path: string): boolean;
  }>();
</script>

<style lang="scss" scoped>
  .container {
    max-width: 64px;

    &:deep(.el-tabs__nav-wrap) {
      margin: 0px;
    }

    &:deep(.el-tabs__active-bar) {
      width: 0px;
      height: 0px;
      border: 0px;
    }

    &:deep(.el-tabs__item) {
      padding: 5px;
      height: auto;
      background-color: var(--aside-nav-bg-color);
      color: var(--aside-nav-font-color);

      &.is-active {
        background-color: var(--el-color-primary);
        color: var(--el-color-white);
      }
    }

    .menu-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 56px;
      height: 54px;
      border-radius: 5px;
      padding: 10px 0px;

      & > .el-icon {
        margin-top: 10px;
      }
    }
  }
</style>
