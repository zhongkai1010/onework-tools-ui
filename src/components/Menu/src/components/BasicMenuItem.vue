<template>
  <el-menu-item :index="path">
    <MenuItemContent :item="props.item" />
  </el-menu-item>
</template>
<script setup lang="ts">
  import MenuItemContent from './MenuItemContent.vue';
  import { Menu } from '/@/router/types';

  interface Props {
    item: Menu | null;
  }

  const props = defineProps<Props>();

  const path = computed(() => props.item?.path);
</script>

<style scoped></style>
