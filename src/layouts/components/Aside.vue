<template>
  <el-menu
    mode="horizontal"
    @select="(_, keyPath) => emit('menuClick', keyPath)"
  >
    <template v-for="item in props.menus">
      <template v-if="item.menus">
        <el-sub-menu :index="item.key" :key="item.key">
          <template #title>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item
            v-for="subItem in item.menus"
            :index="subItem.key"
            :key="subItem.key"
            >{{ subItem.title }}</el-menu-item
          >
        </el-sub-menu>
      </template>
      <template v-else>
        <el-menu-item :index="item.key" :key="item.key">
          <template #title>
            <span>{{ item.title }}</span>
          </template></el-menu-item
        >
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
<style lang="scss" scoped>
.el-menu-item {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0;
  border-bottom: 2px solid transparent;
  color: var(--el-menu-text-color);
}
</style>
