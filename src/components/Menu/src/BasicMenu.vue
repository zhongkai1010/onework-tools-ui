<template>
  <el-menu v-bind="{ ...props }">
    <BasicSubMenuItem v-for="(item, index) in menus" :item="item" :key="`${item.name}-${index}`" />
  </el-menu>
</template>

<script setup lang="ts">
  import BasicSubMenuItem from './components/BasicSubMenuItem.vue';

  import { Menu } from '/@/router/types';

  interface Props {
    items: Menu[];
  }

  const props = defineProps<Props>();
  const menus = computed(() => {
    return props.items;
  });
</script>

<style scoped></style>
