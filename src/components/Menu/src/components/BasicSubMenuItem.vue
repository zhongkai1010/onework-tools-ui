<template>
  <template v-if="children">
    <el-sub-menu :index="path">
      <template #title>
        <MenuItemContent :item="props.item" />
      </template>
      <BasicSubMenuItem
        :item="menu"
        v-for="(menu, index) in children"
        :key="`${menu.name}-${index}`"
      />
    </el-sub-menu>
  </template>
  <template v-else>
    <BasicMenuItem :item="props.item" />
  </template>
</template>

<script setup lang="ts">
  import MenuItemContent from './MenuItemContent.vue';
  import BasicMenuItem from './BasicMenuItem.vue';
  import { Menu } from '/@/router/types';

  interface Props {
    item: Menu | null;
  }

  const props = defineProps<Props>();

  const children = computed(() => {
    return props.item?.children;
  });

  const path = computed(() => {
    return props.item?.path;
  });
</script>

<style lang="scss" scoped></style>
