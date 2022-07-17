<template>
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
</template>

<script setup lang="ts">
import { defaultTab } from "/@/store/pageState";
const props = defineProps<{
  data: Menu[];
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
}
</style>
