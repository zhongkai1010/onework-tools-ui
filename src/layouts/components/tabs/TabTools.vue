<template>
  <ul
    class="el-dropdown-menu tabs-menu"
    :style="{
      display: state.show ? 'block' : 'none',
      top: `${state.y + 5}px`,
      left: `${state.x}px`,
    }"
    @mouseleave="onMouseleave"
  >
    <li
      v-for="(item, index) in TAB_OPERATE_ITEM"
      :key="index"
      class="el-dropdown-menu__item"
      @click="onClick(`${item.command}`)"
    >
      <IconifyIcon :icon="item.icon" />
      <span>{{ $t(item.text) }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { pageStateStoreHook } from '/@/store/modules/pageState';
  import { TAB_OPERATE_ITEM } from '/@/settings/layout';
  import { tabStateStoreHook } from '/@/store/modules/tabState';
  const pageState = pageStateStoreHook();
  const tabState = tabStateStoreHook();
  const state = computed(() => tabState.rightTool);

  const onMouseleave = () => {
    tabState.$patch({
      rightTool: { ...state.value, show: false },
    });
  };
  const onClick = (command: 'other' | 'left' | 'right' | 'all' | 'refresh') => {
    tabState.$patch({
      rightTool: { ...state.value, show: false },
    });
    if (command === 'refresh') {
      pageState.reloadPage();
    } else {
      tabState.operateTab(command, state.value.name);
    }
  };
</script>
<style lang="scss" scoped>
  .tabs-menu {
    position: fixed;
    width: 120px;
    border: 1px solid rgb(0 21 41 / 8%);
    z-index: 9999;

    .el-dropdown-menu__item:hover {
      background-color: var(--el-color-primary);
      color: var(--el-color-white);
    }
  }
</style>
