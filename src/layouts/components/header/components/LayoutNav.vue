<template>
  <div class="container">
    <el-tabs :model-value="props.selectNav" @tab-change="(path:string) => emit('selectNav', path)">
      <el-tab-pane v-for="tab in props.navs" :key="tab.name" :name="tab.path">
        <template #label>
          <div class="tab">
            <IconifyIcon :icon="tab.icon" />
            <span>{{ tab.title }}</span>
          </div>
        </template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
  import { MenuRecordRaw } from '/@/layouts/types';
  const props = defineProps<{
    selectNav?: string;
    navs: MenuRecordRaw[];
  }>();
  const emit = defineEmits<{
    (e: 'selectNav', path: string): void;
  }>();
</script>

<style lang="scss" scoped>
  .container {
    .tab {
      display: flex;
      align-items: center;

      i {
        margin-right: 3px;
      }
    }

    &:deep(.el-tabs__header) {
      margin: 0px;
    }

    &:deep(.el-tabs__nav-wrap) {
      &::after {
        height: 0px;
      }
    }
  }
</style>
