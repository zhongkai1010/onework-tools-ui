<template>
  <el-scrollbar class="container">
    <el-menu
      :unique-opened="true"
      @select="onSelect"
      :collapse="props.collapse"
      :default-active="props.defaultActive"
    >
      <sub-menu v-for="menu in data" :menu="menu" :key="menu.path" />
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts" setup>
const props = defineProps<{
  collapse?: boolean;
  data: Menu[];
  defaultActive?: string;
}>();

const emit = defineEmits<{
  (e: "select", indexPath: string[]): void;
}>();

const onSelect = (_index, indexPath: string[]): void => {
  emit("select", indexPath);
};
</script>

<style lang="scss" scoped>
.container {
  border: 0px;
  &:deep(.el-menu) {
    border: 0px;
  }
  &:deep(.el-menu-item) {
    height: $menu-height;
    color: $header-color;
    background-color: $header-background-color;
    &.is-active {
      color: $activate-color;
      background-color: $activate-background;
    }
  }
}
</style>
