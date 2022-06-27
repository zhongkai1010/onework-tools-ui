<template>
  <template v-if="props.menu.children">
    <ElSubMenu :index="props.menu.path">
      <template #title>
        <IconifyIcon :icon="menu.icon" />
        <span>{{ menu.title }}</span>
      </template>
      <template v-for="item in props.menu.children" :key="item.path">
        <SubMenu :menu="item" />
      </template>
    </ElSubMenu>
  </template>
  <template v-else>
    <el-menu-item :index="props.menu.path">
      <IconifyIcon :icon="props.menu.icon" />
      <span>{{ props.menu.title }}</span>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
interface Menu {
  title: string;
  path: string;
  icon: string;
  children?: Menu[];
}

const props = defineProps<{
  menu: Menu;
}>();
</script>
