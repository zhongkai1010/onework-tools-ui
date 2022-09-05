<template>
  <div class="tab-container">
    <div class="left" v-if="layout === 'standard'">
      <i
        :class="menufold ? 'ri-menu-unfold-fill fold' : 'ri-menu-fold-line fold'"
        @click="onFoldClick"
      ></i>
    </div>
    <div class="center">
      <el-tabs
        :model-value="selectTab"
        @tab-remove="onTabClose"
        @contextmenu="onTabContextMenu"
        @tab-change="onTabChange"
      >
        <el-tab-pane :name="(HOME_PAGE.path as string)">
          <template #label>
            <span class="content">
              <IconifyIcon class="icon" :icon="HOME_PAGE.meta.icon" :title="HOME_PAGE.meta.title" />
              <span class="title">{{ $t(HOME_PAGE.meta.title) }}</span>
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
              v-for="(item, index) in TAB_OPERATE_ITEM"
              :key="index"
              :command="item.command"
            >
              {{ $t(item.text) }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { TabPanelName } from 'element-plus';
  import { computed } from 'vue';
  import { pageStateStoreHook } from '/@/store/modules/pageState';
  import { siteConfigStoreHook } from '/@/store/modules/globalConfig';
  import { tabStateStoreHook } from '/@/store/modules/tabState';
  import { TAB_OPERATE_ITEM } from '/@/settings/layout';
  import { findElementParentId } from '/@/utils';
  import { HOME_PAGE } from '/@/router/constant';

  const pageState = pageStateStoreHook();
  const tabState = tabStateStoreHook();
  const siteConfig = siteConfigStoreHook();
  const selectTab = computed(() => pageState.selectTab);
  const tabs = computed(() => tabState.tabs);
  const menufold = computed(() => pageState.menufold);
  const layout = computed(() => siteConfig.layout);
  /**
   * 标签关闭
   */
  const onTabClose = (name: TabPanelName) => {
    tabState.closeTab(name as string);
  };
  /**
   * 标签切换
   */
  const onTabChange = (tab: TabPanelName) => {
    const name = tab as string;
    pageState.setSelectTab(name);
  };
  /**
   * 标签右键
   */
  const onTabContextMenu = (e: MouseEvent) => {
    const target = e.target as Element;
    const id = findElementParentId(target) as string;
    if (id.includes('tab-')) {
      e.preventDefault();
      if (id == HOME_PAGE.path) return;
      tabState.$patch({
        rightTool: {
          x: e.x,
          y: e.y,
          show: true,
          name: id.replace('tab-', ''),
        },
      });
    }
  };
  const onClickCommand = (command) => {
    if (command === 'refresh') {
      pageState.refresh();
    } else {
      tabState.operateTab(command, selectTab.value);
    }
  };
  const onFoldClick = () => {
    pageState.$patch({ menufold: !menufold.value });
  };
</script>
