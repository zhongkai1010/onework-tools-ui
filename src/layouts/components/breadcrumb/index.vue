<template>
  <div class="container">
    <i
      v-show="props.showFold"
      :class="{
        'ri-menu-fold-line': props.fold,
        'ri-menu-unfold-fill': !props.fold,
        fold: props.showFold
      }"
    />
    <div class="container">
      <el-breadcrumb separator=">">
        <template v-if="props.data.length === 0">
          <el-breadcrumb-item :to="{ path: defaultTab.name }">
            <IconifyIcon :icon="defaultTab.icon" :size="14" />
            <span>{{ defaultTab.text }}</span>
          </el-breadcrumb-item>
        </template>
        <el-breadcrumb-item :to="{ path: item.path }" v-for="item in props.data" :key="item.path">
          <IconifyIcon :icon="item.icon" :size="14" />
          <span>{{ item.title }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defaultTab } from "/@/store/headerTabs";
const props = defineProps<{
  showFold?: boolean;
  data: Menu[];
  fold?: boolean;
}>();
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  background-color: $header-background-color;
  color: $header-color;
  &:deep(.el-breadcrumb__inner) {
    line-height: 60px;
    display: flex;
    align-items: center;
    text-align: center;
    i {
      margin-right: 3px;
    }
    span {
      font-size: 14px;
    }
  }
  .fold {
    margin-right: 20px;
    cursor: pointer;
  }
}
</style>
