<template>
  <ul
    class="el-dropdown-menu tabs-menu"
    :style="{ display: show ? 'block' : 'none', top: `${y + 5}px`, left: `${x}px` }"
    @mouseleave="() => emit('onBlur')"
  >
    <li
      v-for="(item, index) in menuItems"
      :key="index"
      class="el-dropdown-menu__item"
      @click="() => emit('onClick')"
    >
      <IconifyIcon :icon="item.icon" />
      <span>{{ item.text }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'
const emit = defineEmits(['onBlur', 'onClick'])
const {
  show = false,
  x = 0,
  y = 0,
} = defineProps<{
  show: boolean
  x: number
  y: number
}>()

const menuItems = [
  {
    text: '刷新',
    icon: 'ant-design:sync-outlined',
  },
  {
    text: '关闭其他',
    icon: 'ant-design:close-outlined',
  },
  {
    text: '关闭右侧',
    icon: 'ant-design:arrow-right-outlined',
  },
  {
    text: '关闭左侧',
    icon: 'ant-design:arrow-left-outlined',
  },
  {
    text: '关闭全部',
    icon: 'ant-design:close-outlined',
  },
]
</script>
<style lang="scss" scoped>
.tabs-menu {
  position: fixed;
  width: 120px;
  border: 1px solid rgb(0 21 41 / 8%);
  z-index: 99;

  .el-dropdown-menu__item:hover {
    color: #1890ff;
    background-color: #e8f4ff;
  }
}
</style>
