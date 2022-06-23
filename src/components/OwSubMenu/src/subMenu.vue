<template>
  <template v-if="menu.children">
    <el-sub-menu :index="menu.path">
      <template #title>
        <IconifyIcon :icon="menu.icon" />
        <span>{{ menu.title }}</span>
      </template>
      <template v-for="item in menu.children">
        <SubMenu :menu="item" />
      </template>
    </el-sub-menu>
  </template>
  <template v-else>
    <el-menu-item :index="menu.path">
      <IconifyIcon :icon="menu.icon" />
      <span>{{ menu.title }}</span>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
const { menu } = defineProps<{
  menu: Menu;
}>();
</script>
