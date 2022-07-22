<template>
  <ul
    class="el-dropdown-menu tabs-menu"
    :style="{
      display: state.show ? 'block' : 'none',
      top: `${state.y + 5}px`,
      left: `${state.x}px`
    }"
    @mouseleave="onMouseleave"
  >
    <li
      v-for="(item, index) in tabOperateItems"
      :key="index"
      class="el-dropdown-menu__item"
      @click="() => onClick(`${item.command}`)"
    >
      <IconifyIcon :icon="item.icon" />
      <span>{{ item.text }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { tabOperateItems } from "/@/layouts/utils";
import { pageStateStoreHook } from "/@/store/pageState";
const pageState = pageStateStoreHook();
const state = computed(() => pageState.tabTool);
const onMouseleave = () => {
  pageState.setValue("tabTool", { ...state.value, show: false });
};
const onClick = (command: "other" | "left" | "right" | "all" | "refresh") => {
  if (command === "refresh") {
    console.log("刷新");
  } else {
    pageState.operateTab(command, state.value.name);
  }
  pageState.setValue("tabTool", { ...state.value, show: false });
};
</script>
<style lang="scss" scoped>
.tabs-menu {
  position: fixed;
  width: 120px;
  border: 1px solid rgb(0 21 41 / 8%);
  z-index: 9999;
  .el-dropdown-menu__item:hover {
    // color: #1890ff;
    // background-color: #e8f4ff;
  }
}
</style>
