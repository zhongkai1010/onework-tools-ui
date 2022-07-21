<template>
  <div class="tab-container">
    <i
      :class="menufold ? 'ri-menu-unfold-fill fold' : 'ri-menu-fold-line fold fold'"
      v-show="layout === 'standard'"
      @click="onFoldClick"
    />
    <el-tabs
      class="tabs"
      type="card"
      :model-value="selectTab"
      @tab-remove="onTabClose"
      @contextmenu="onTabContextMenu"
      @tab-change="onTabChange"
    >
      <el-tab-pane :name="HOME_PAGE.path">
        <template #label>
          <span class="label">
            <IconifyIcon :icon="HOME_PAGE.meta.icon" :title="HOME_PAGE.meta.title" class="button" />
            <span>{{ HOME_PAGE.meta.title }}</span>
          </span>
        </template>
      </el-tab-pane>
      <el-tab-pane
        v-for="tab in tabs"
        :key="tab.name"
        :closable="tab.path !== HOME_PAGE.path"
        :name="tab.path"
      >
        <template #label>
          <span class="label">
            <IconifyIcon :icon="tab.icon" :title="tab.title" class="button" />
            <span>{{ tab.title }}</span>
          </span>
        </template>
      </el-tab-pane>
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
import { pageStateStoreHook } from "/@/store/pageState";
import { siteConfigStoreHook } from "/@/store/globalConfig";
import { useRouter } from "vue-router";
import { findElementParentId, tabOperateItems } from "/@/layouts/utils";
import { HOME_PAGE } from "/@/router/constant";

/**
 *   init
 */
const router = useRouter();
const pageStateStore = pageStateStoreHook();
/**
 *  右键状态
 */
const tabsMenuState = reactive({
  name: HOME_PAGE.path,
  show: false,
  x: 0,
  y: 0
});
/**
 *  store tab state
 */
const selectTab = computed(() => pageStateStore.selectTab);
const tabs = computed(() => pageStateStore.tabs);

const menufold = computed(() => {
  return pageStateStoreHook().menufold;
});
const layout = computed(() => {
  return siteConfigStoreHook().layout;
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
  if (name !== HOME_PAGE.path) {
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
  pageStateStoreHook().setValue("menufold", !menufold.value);
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
  color: $header-color;
  line-height: $menu-height;
  width: 100%;
  padding: 0 20px;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  .fold {
    cursor: pointer;
  }
  .tabs {
    width: calc(100% - 200px);
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
    }
    &:hover {
      border-bottom: 0px;
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
