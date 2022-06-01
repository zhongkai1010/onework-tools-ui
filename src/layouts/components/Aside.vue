<template>
  <el-menu
    mode="vertical"
    @select="(_: string, keyPath: string[])=>emit('menuClick',keyPath)"
  >
    <template v-for="item in props.menus" :index="item.key">
      <template v-if="item.menus">
        <el-sub-menu :index="item.key">
          <template #title>
            <el-icon><location /></el-icon>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item v-for="subItem in item.menus" :index="subItem.key">{{
            subItem.title
          }}</el-menu-item>
        </el-sub-menu>
      </template>
      <template v-else>
        <el-menu-item :index="item.key">{{ item.title }}</el-menu-item>
      </template>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import { Location } from "@element-plus/icons-vue";

const props = defineProps<{
  menus: MenuItem[];
}>();

// 基于类型
const emit = defineEmits<{
  (e: "menuClick", keyPath: string[]): void;
}>();
</script>
