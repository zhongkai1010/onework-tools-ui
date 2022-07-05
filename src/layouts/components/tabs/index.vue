<template>
  <div class="tabs-container">
    <div class="tabs">
      <el-tabs
        type="card"
        @contextmenu="onTabContextMenu"
        :model-value="selectTab.name"
        @tab-click="onTabClick"
      >
        <el-tab-pane :name="defaultTab.name">
          <template #label>
            <span class="label">
              <IconifyIcon :icon="defaultTab.icon" :title="defaultTab.text" class="button" />
              <span>{{ defaultTab.text }}</span>
            </span>
          </template>
        </el-tab-pane>
        <template v-for="tab in tabs" :key="tab.name">
          <el-tab-pane :closable="true" :name="tab.name">
            <template #label>
              <span class="label">
                <IconifyIcon :icon="tab.icon" :title="tab.text" class="button" />
                <span>{{ tab.text }}</span>
              </span>
            </template>
          </el-tab-pane>
        </template>
      </el-tabs>
    </div>
    <ElDropdown class="dropdown">
      <IconifyIcon icon="fe:app-menu" :size="20" />
      <template #dropdown>
        <ElDropdownMenu>
          <ElDropdownItem>刷新</ElDropdownItem>
          <ElDropdownItem>关闭其它</ElDropdownItem>
          <ElDropdownItem>关闭左侧</ElDropdownItem>
          <ElDropdownItem>关闭右侧</ElDropdownItem>
          <ElDropdownItem>关闭全部</ElDropdownItem>
        </ElDropdownMenu>
      </template>
    </ElDropdown>
    <TabTools
      :show="tabsMenuState.show"
      :x="tabsMenuState.x"
      :y="tabsMenuState.y"
      @on-blur="tabsMenuState.show = false"
      @on-click="tabsMenuState.show = false"
    />
  </div>
</template>

<script setup lang="ts">
import { TabsPaneContext } from "element-plus";
import { computed, reactive } from "vue";
import TabTools from "./TabTools.vue";
import { headerTabStoreHook, defaultTab } from "/@/store/headerTabs";
import { useRouter } from "vue-router";

const selectTab = computed(() => {
  return headerTabStoreHook().selectTab;
});
const tabs = computed(() => {
  return headerTabStoreHook().tabs;
});

const tabsMenuState = reactive({
  show: false,
  x: 0,
  y: 0
});

const onTabContextMenu = (e: MouseEvent) => {
  e.preventDefault();
  tabsMenuState.show = true;
  tabsMenuState.x = e.x;
  tabsMenuState.y = e.y;
};
const router = useRouter();
const onTabClick = (pane: TabsPaneContext) => {
  router.push(pane.props.name as string);
};
</script>
<style lang="scss" scoped>
.tabs-container {
  display: flex;
  box-sizing: border-box;
  background-color: $header-background;
  max-height: 50px;
  padding: 0 5%;
  user-select: none;

  .tabs {
    display: flex;
    overflow-x: hidden;
    overflow-y: hidden;
    &:hover {
      overflow-x: auto;
    }

    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;
      border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background: #bfc7e0;
      opacity: 0.3;
    }
    &:deep(.el-tabs) {
      display: flex;
    }
    &:deep(.el-tabs__header) {
      border-bottom: 0px;
    }

    &:deep(.el-tabs__item) {
      height: 38px;
      padding: 0 30px 0 30px;
      margin-top: 10px;
      margin-right: 10px;
      line-height: 38px;
      text-align: center;
      border: 0;
      border-radius: 5px 5px 0px 0px;
      transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) !important;
    }

    &:deep(.el-tabs__header .el-tabs__item:last-child) {
      padding: 0 30px 0 30px;
    }

    &:deep(.el-tabs__nav) {
      border: 0px;
    }

    &:deep(.el-tabs__header) {
      margin: 0;
    }

    &:deep(.el-tabs__item.is-active) {
      border-bottom: 0px;
      color: #1890ff;
      background-color: #e8f4ff;
    }

    &:deep(.el-tabs__item:hover) {
      border-bottom: 0px;
      background-color: #dee1e6;
      color: #515a6e;
    }

    .label {
      i {
        vertical-align: top;
        margin-top: 11px;
        margin-right: 5px;
      }
    }
  }

  .dropdown {
    flex: 1;
    right: 0;
    justify-content: flex-end;
    display: flex;
    align-items: center;
  }
}
</style>
