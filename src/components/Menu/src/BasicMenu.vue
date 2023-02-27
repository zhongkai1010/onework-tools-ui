<template>
  <el-menu v-bind="{ ...props.prop }">
    <BasicSubMenuItem v-for="(item, index) in menus" :item="item" :key="`${item.name}-${index}`" />
  </el-menu>
</template>

<script setup lang="ts">
  import { MenuProps } from 'element-plus';
  import BasicSubMenuItem from './components/BasicSubMenuItem.vue';

  import { Menu } from '/@/router/types';

  interface Props {
    items: Menu[];
    prop: Partial<MenuProps>;
  }

  const props = defineProps<Props>();
  const menus = computed(() => {
    return props.items;
  });
</script>

<style scoped></style>
