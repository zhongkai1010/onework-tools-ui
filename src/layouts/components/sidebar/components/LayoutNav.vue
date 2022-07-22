<template>
  <el-scrollbar class="container">
    <el-tabs
      :tab-position="'left'"
      :model-value="props.selectName"
      @tab-change="name => emit('select', name as string)"
    >
      <el-tab-pane v-for="tab in props.data" :key="tab.name" :name="tab.path">
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
import { NavRecordRaw } from "/@/layouts/types";
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
  max-width: $logo-width;
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
    color: $nav-color;
    &.is-active {
      // color: $activate-color;
      background-color: $color-primary;
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
