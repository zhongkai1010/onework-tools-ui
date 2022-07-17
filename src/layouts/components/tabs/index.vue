<template>
  <div class="tab-container">
    <i
      :class="menufold ? 'ri-menu-unfold-fill fold' : 'ri-menu-fold-line fold fold'"
      v-show="props.showFold"
      @click="onFoldClick"
    />
    <el-tabs
      class="tabs"
      type="card"
      :model-value="selectName"
      @tab-remove="onTabClose"
      @contextmenu="onTabContextMenu"
      @tab-change="onTabChange"
    >
      <el-tab-pane :name="defaultTab.name" :closable="false">
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
    <el-dropdown>
      <IconifyIcon icon="fe:app-menu" :size="15" />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="(item, index) in tabOperateItems"
            :key="index"
            :command="item.command"
          >
            {{ item.text }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <TabTools
      :show="tabsMenuState.show"
      :x="tabsMenuState.x"
      :y="tabsMenuState.y"
      @on-blur="tabsMenuState.show = false"
      @on-click="onToolItemClick"
    />
  </div>
</template>

<script setup lang="ts">
import { TabPanelName } from "element-plus";
import { computed, reactive } from "vue";
import TabTools from "./TabTools.vue";
import { pageStateStoreHook, defaultTab } from "/@/store/pageState";

import { useRouter } from "vue-router";
import { findElementParentId, tabOperateItems } from "../../utils";

/**
 *   init
 */
const router = useRouter();
const props = defineProps<{
  showFold?: boolean;
}>();
/**
 *  右键状态
 */
const tabsMenuState = reactive({
  name: defaultTab.name,
  show: false,
  x: 0,
  y: 0
});
/**
 *  store tab state
 */
const selectName = computed(() => {
  return pageStateStoreHook().currentPath;
});
const tabs = computed(() => {
  return [...pageStateStoreHook().tabs];
});
const menufold = computed(() => {
  return pageStateStoreHook().menufold;
});
/**
 *  events
 */
const onTabClose = (name: TabPanelName) => {
  pageStateStoreHook().closeTab(name as string);
};
const onTabChange = (tab: TabPanelName) => {
  const name = tab as string;
  // 路由
  router.push(name);
  // tab 状态
  if (name !== defaultTab.name) {
    pageStateStoreHook().setSelectTab(name);
  }
  tabsMenuState.name = name;
};
const onTabContextMenu = (e: MouseEvent) => {
  e.preventDefault();
  tabsMenuState.show = true;
  tabsMenuState.x = e.x;
  tabsMenuState.y = e.y;

  const target = e.target as Element;
  const id = findElementParentId(target);
  tabsMenuState.name = id.replace("tab-", "");
};
const onFoldClick = () => {
  const store = pageStateStoreHook();
  pageStateStoreHook().setValue("menufold", !store.menufold);
};
const onToolItemClick = (command: "other" | "left" | "right" | "all" | "refresh") => {
  if (command === "refresh") {
    router.push(tabsMenuState.name);
  } else {
    pageStateStoreHook().operateTab(command, tabsMenuState.name);
  }
  tabsMenuState.show = false;
};
</script>

<style lang="scss" scoped>
.tab-container {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  background-color: $header-background-color;
  width: 100%;
  color: $header-color;
  line-height: $menu-height;
  padding: 0 20px;
  .fold {
    cursor: pointer;
  }
  .tabs {
    width: calc(100% - 96px);
  }
  .label {
    i {
      vertical-align: middle;
      margin-right: 5px;
    }
  }
  &:deep(.el-tabs__nav) {
    border: 0px;
  }
  &:deep(.el-tabs__header) {
    margin: 0px;
    border: 0px;
  }
  &:deep(.el-tabs__item) {
    border: 0;
    border-radius: 5px 5px 0px 0px;
    text-align: center;
    margin-right: 10px;
    &.is-active {
      border-bottom: 0px;
      color: $activate-color;
      background-color: $activate-background;
    }
    &:hover {
      border-bottom: 0px;
      background-color: #dee1e6;
      color: #515a6e;
    }
  }
  &:deep(.el-tabs__nav-prev) {
    line-height: $menu-height;
  }
  &:deep(.el-tabs__nav-next) {
    line-height: $menu-height;
  }
  &:deep(.el-tabs__nav-wrap) {
    margin: 0px;
  }
}
</style>
