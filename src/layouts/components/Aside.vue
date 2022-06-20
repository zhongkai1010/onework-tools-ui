<template>
  <el-menu
    mode="horizontal"
    @select="(_, keyPath) => emit('menuClick', keyPath)"
  >
    <template v-for="item in props.menus">
      <template v-if="item.menus">
        <el-sub-menu :index="item.key" :key="item.key" class="menu-popup">
          <template #title>
            <el-icon><location /></el-icon>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item
            class=""
            v-for="subItem in item.menus"
            :index="subItem.key"
            :key="subItem.key"
          >
            <el-icon><location /></el-icon>
            <span> {{ subItem.title }}</span>
          </el-menu-item>
        </el-sub-menu>
      </template>
      <template v-else>
        <el-menu-item :index="item.key" :key="item.key">
          <template #title>
            <el-icon><location /></el-icon>
            <span>{{ item.title }}</span>
          </template>
        </el-menu-item>
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
