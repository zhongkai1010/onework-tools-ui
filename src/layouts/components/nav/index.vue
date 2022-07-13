<template>
  <el-scrollbar class="container">
    <el-tabs
      :tab-position="'left'"
      :model-value="props.selectName"
      @tab-change="name => emit('select', name as string)"
    >
      <el-tab-pane v-for="tab in props.data" :key="tab.name" :name="tab.name">
        <template #label>
          <div class="menu-item">
            <IconifyIcon :icon="tab.icon" />
            <span>{{ tab.label }}</span>
          </div>
        </template>
      </el-tab-pane>
    </el-tabs>
  </el-scrollbar>
</template>

<script lang="ts" setup>
const props = defineProps<{
  data: Tab[];
  selectName?: string;
}>();
const emit = defineEmits<{
  (e: "select", name: string): void;
}>();
</script>

<style lang="scss" scoped>
.container {
  max-width: $logo-width;
  background-color: $header-color;
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
    color: $header-font-color;
    &.is-active {
      color: $header-font-activate-color;
      background-color: $header-activate-color;
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
