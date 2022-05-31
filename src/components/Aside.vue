<template>
  <el-menu
    mode="vertical"
    @select="(_: string, keyPath: string[])=>emit('menuClick',keyPath)"
  >
    <el-sub-menu v-for="item in props.menus" :index="item.key">
      <template #title>
        <el-icon><location /></el-icon>
        <span>{{ item.title }}</span>
      </template>
      <el-menu-item v-for="subItem in item.menus" :index="subItem.key">{{
        subItem.title
      }}</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { Location } from "@element-plus/icons-vue";

interface MenuItem {
  key: string;
  title: string;
  menus?: MenuItem[];
}

const props = defineProps<{
  menus: MenuItem[];
}>();

// 基于类型
const emit = defineEmits<{
  (e: "menuClick", keyPath: string[]): void;
}>();
</script>
