<template>
  <template v-if="props.menu.children">
    <el-sub-menu :index="props.menu.path">
      <template #title>
        <IconifyIcon :icon="menu.icon" />
        <span>{{ menu.title }}</span>
      </template>
      <template v-for="item in props.menu.children" :key="item.name">
        <SubMenu :menu="item" />
      </template>
    </el-sub-menu>
  </template>
  <template v-else>
    <el-menu-item :index="props.menu.path">
      <IconifyIcon :icon="props.menu.icon" />
      <span>{{ props.menu.title }}</span>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
  import { MenuRecordRaw } from '/@/layouts/types';
  import { IconifyIcon } from '/@/components/Icon';
  import SubMenu from './SubMenu.vue';

  const props = defineProps<{
    menu: MenuRecordRaw;
  }>();
</script>
