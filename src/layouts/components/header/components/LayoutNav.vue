<template>
  <div class="container">
    <el-tabs :model-value="props.selectName" @tab-change="name => emit('select', name as string)">
      <el-tab-pane :name="HOME_PAGE.path">
        <template #label>
          <div class="tab">
            <IconifyIcon :icon="HOME_PAGE.meta.icon" />
            <span>{{ HOME_PAGE.meta.title }}</span>
          </div>
        </template>
      </el-tab-pane>
      <el-tab-pane v-for="tab in props.data" :key="tab.name" :name="tab.path">
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
import { NavRecordRaw } from "/@/layouts/types";
import { HOME_PAGE } from "/@/router/constant";
const props = defineProps<{
  data: NavRecordRaw[];
  selectName?: string;
}>();
const emit = defineEmits<{
  (e: "select", name: string): void;
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
