<template>
  <ul
    class="el-dropdown-menu tabs-menu"
    :style="{
      display: props.show ? 'block' : 'none',
      top: `${props.y + 5}px`,
      left: `${props.x}px`
    }"
    @mouseleave="() => emit('onBlur')"
  >
    <li
      v-for="(item, index) in tabOperateItems"
      :key="index"
      class="el-dropdown-menu__item"
      @click="() => emit('onClick', item.command)"
    >
      <IconifyIcon :icon="item.icon" />
      <span>{{ item.text }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";
import { tabOperateItems } from "/@/layouts/utils";

const emit = defineEmits(["onBlur", "onClick"]);
const props = defineProps<{
  show: boolean;
  x: number;
  y: number;
}>();
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
