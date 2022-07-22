<template>
  <div class="tab-container">
    <div class="left" v-if="layout === 'standard'">
      <i
        :class="menufold ? 'ri-menu-unfold-fill fold' : 'ri-menu-fold-line fold'"
        @click="onFoldClick"
      />
    </div>
    <div class="center">
      <el-tabs
        :model-value="selectTab"
        @tab-remove="onTabClose"
        @contextmenu="onTabContextMenu"
        @tab-change="onTabChange"
      >
        <el-tab-pane :name="HOME_PAGE.path">
          <template #label>
            <span class="content">
              <IconifyIcon class="icon" :icon="HOME_PAGE.meta.icon" :title="HOME_PAGE.meta.title" />
              <span class="title">{{ HOME_PAGE.meta.title }}</span>
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
            <span class="content">
              <IconifyIcon class="icon" :icon="tab.icon" :title="tab.title" />
              <span class="title">{{ tab.title }}</span>
            </span>
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="right">
      <el-dropdown @command="onClickCommand">
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { TabPanelName } from "element-plus";
import { computed } from "vue";
import { pageStateStoreHook } from "/@/store/pageState";
import { siteConfigStoreHook } from "/@/store/globalConfig";
import { useRouter } from "vue-router";
import { findElementParentId, tabOperateItems } from "/@/layouts/utils";
import { HOME_PAGE } from "/@/router/constant";

const router = useRouter();
const pageState = pageStateStoreHook();
const siteConfig = siteConfigStoreHook();
const selectTab = computed(() => pageState.selectTab);
const tabs = computed(() => pageState.tabs);
const menufold = computed(() => pageState.menufold);
const layout = computed(() => siteConfig.layout);
/**
 * 标签关闭
 */
const onTabClose = (name: TabPanelName) => {
  pageStateStoreHook().closeTab(name as string);
};
/**
 * 标签切换
 */
const onTabChange = (tab: TabPanelName) => {
  const name = tab as string;
  // 路由
  router.push(name);
  // tab 状态
  if (name !== HOME_PAGE.path) {
    pageStateStoreHook().setSelectTab(name);
  }
};
/**
 * 标签右键
 */
const onTabContextMenu = (e: MouseEvent) => {
  const target = e.target as Element;
  const id = findElementParentId(target) as string;
  if (id.includes("tab-")) {
    e.preventDefault();
    pageState.setValue("tabTool", {
      x: e.x,
      y: e.y,
      show: true,
      name: id.replace("tab-", "")
    });
  }
};
const onClickCommand = command => {
  pageState.operateTab(command, selectTab.value);
};
const onFoldClick = () => {
  pageStateStoreHook().setValue("menufold", !menufold.value);
};
</script>

<style lang="scss" scoped>
.tab-container {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  height: $menu-height;
  padding: 0 20px;
  background-color: $color-white;
  box-shadow: 0px 1px 4px rgb(0 21 41 / 8%);
  .left {
    cursor: pointer;
    width: 20px;
  }
  .center {
    padding: 0 20px;
    width: calc(100% - 40px);

    &:deep(.el-tabs) {
      margin-bottom: -10px;
    }

    &:deep(.el-tabs__header) {
      margin: 0px;
    }
    &:deep(.el-tabs__nav-wrap::after) {
      height: 0px;
    }
    &:deep(.el-tabs__active-bar) {
      height: 0;
    }
    &:deep(.el-tabs__item) {
      margin-right: 10px;
      padding: 0 20px;
      i {
        vertical-align: middle;
      }
      &.is-active {
        // background-color: #e8f4ff;
        // color: #1890ff;
      }
      &:hover {
        // background-color: #e4e7ed;
        // color: #303133;
      }
    }
    .content {
      vertical-align: middle;
      .el-icon {
        vertical-align: middle;
      }
      span {
        vertical-align: middle;
        margin-left: 4px;
      }
    }
  }
  .right {
    width: 20px;
  }
}
</style>
