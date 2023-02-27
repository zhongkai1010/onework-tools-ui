<template>
  <div class="tabs-container">
    <el-tabs v-model="activeKeyRef" type="card" @tab-click="onClickTab">
      <el-tab-pane
        :name="item.query ? item.fullPath : item.path"
        v-for="item in getTabsState"
        :key="item.name"
      >
        <template #label>
          <div class="tab" @contextmenu="(event:MouseEvent)=>onClickRightTab(event,item)">
            <span>{{ t(item.meta?.title) }}</span>
            <Icon icon="ep:close" v-if="!item.meta.affix" />
          </div>
        </template>
      </el-tab-pane>
    </el-tabs>

    <ul
      class="el-dropdown-menu tabs-menu"
      :style="{
        display: tabsMenu.show ? 'block' : 'none',
        top: `${tabsMenu.y + 5}px`,
        left: `${tabsMenu.x}px`
      }"
    >
      <li class="el-dropdown-menu__item" @click="onClickTabMenu('refresh')">
        <Icon icon="ant-design:sync-outlined" />
        <span>刷新</span>
      </li>
      <li class="el-dropdown-menu__item" @click="onClickTabMenu('other')">
        <Icon icon="ant-design:close-outlined" />
        <span>关闭其它</span>
      </li>
      <li class="el-dropdown-menu__item" @click="onClickTabMenu('right')">
        <Icon icon="ant-design:arrow-right-outlined" />
        <span>关闭右侧</span>
      </li>
      <li class="el-dropdown-menu__item" @click="onClickTabMenu('left')">
        <Icon icon="ant-design:arrow-left-outlined" />
        <span>关闭左侧</span>
      </li>
      <li class="el-dropdown-menu__item" @click="onClickTabMenu('all')">
        <Icon icon="ant-design:close-outlined" />
        <span>关闭全部</span>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
  import { Icon } from '@iconify/vue';
  import type { TabsPaneContext } from 'element-plus';
  import { RouteLocationNormalized, RouteMeta, useRouter } from 'vue-router';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useGo } from '/@/hooks/web/usePage';
  import { listenerRouteChange } from '/@/logics/mitt/routeChange';
  import { REDIRECT_NAME } from '/@/router/constant';
  import { useMultipleTabStore } from '/@/store/modules/multipleTab';
  import { useUserStore } from '/@/store/modules/user';

  const { t } = useI18n();
  const tabStore = useMultipleTabStore();
  const userStore = useUserStore();
  const router = useRouter();
  const go = useGo();
  const activeKeyRef = ref('');
  const getTabsState = computed(() => {
    return tabStore.getTabList.filter((item) => !item.meta?.hideTab);
  });

  interface TabMenuState {
    x: number;
    y: number;
    show: boolean;
    tab?: RouteLocationNormalized;
  }

  const unClose = computed(() => unref(getTabsState).length === 1);
  const tabsMenu = shallowRef<TabMenuState>({
    x: 0,
    y: 0,
    show: false
  });

  listenerRouteChange((route) => {
    console.log('tab-listenerRouteChange');
    const { name } = route;
    if (name === REDIRECT_NAME || !route || !userStore.getToken) {
      return;
    }

    const { path, fullPath, meta = {} } = route;
    const { currentActiveMenu, hideTab } = meta as RouteMeta;
    const isHide = !hideTab ? null : currentActiveMenu;
    const p = isHide || fullPath || path;
    if (activeKeyRef.value !== p) {
      activeKeyRef.value = p as string;
    }

    if (isHide) {
      const findParentRoute = router.getRoutes().find((item) => item.path === currentActiveMenu);

      findParentRoute && tabStore.addTab(findParentRoute as unknown as RouteLocationNormalized);
    } else {
      tabStore.addTab(unref(route));
    }
  });

  /**
   *  标签点击
   * @param tab
   * @param event
   */
  const onClickTab = async (tab: TabsPaneContext, event: Event) => {
    const tag = (event.target as Element).tagName;
    if (tag === 'svg') {
      if (unref(unClose)) {
        return;
      }
      await tabStore.closeTabByKey(tab.props.name as string, router);
    } else {
      activeKeyRef.value = tab.props.name as string;
      go(activeKeyRef.value, false);
    }
  };

  /**
   * 标签右键
   */
  const onClickRightTab = (e: MouseEvent, tab: RouteLocationNormalized) => {
    e.preventDefault();
    tabsMenu.value = {
      x: e.clientX,
      y: e.clientY,
      show: true,
      tab
    };
  };

  /**
   * 点击右键菜单面板
   * @param command
   */
  const onClickTabMenu = async (command: string) => {
    switch (command) {
      case 'all':
        await tabStore.closeAllTab(router);
        break;
      case 'refresh':
        await tabStore.refreshPage(router);
        break;
      case 'other':
        await tabStore.closeOtherTabs(tabsMenu.value.tab as RouteLocationNormalized, router);
        go(tabsMenu.value.tab?.path, false);
        break;
      case 'right':
        await tabStore.closeRightTabs(tabsMenu.value.tab as RouteLocationNormalized, router);
        go(tabsMenu.value.tab?.path, false);
        break;
      case 'left':
        await tabStore.closeLeftTabs(tabsMenu.value.tab as RouteLocationNormalized, router);
        go(tabsMenu.value.tab?.path, false);
        break;
      default:
        break;
    }

    tabsMenu.value = {
      x: 0,
      y: 0,
      show: false
    };
  };
</script>
<style lang="scss" scoped>
  .tabs-container {
    .tab {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 0 20px;
    }

    &:deep(.el-tabs) {
      padding-top: 10px;
    }
    &:deep(.el-tabs__header) {
      border: 0px;
      margin: 0px;
    }
    &:deep(.el-tabs__item) {
      border: 0px;
      margin-right: 10px;
      padding: 0px !important;
      display: inline-flex;
      align-items: center;
      border-radius: 1px 1px 0px 0px;
      font-size: 15px;
      span {
        margin-right: 5px;
      }
      svg {
        border-radius: 50%;
        &:hover {
          background-color: #ccc;
          color: #fff;
        }
      }
      &.is-active {
        background-color: #408cff;
        color: #fff;
      }
      &:hover {
        background-color: #408cff;
        color: #fff;
      }
    }

    &:deep(.el-tabs__nav) {
      border: 0px;
    }

    .tabs-menu {
      position: fixed;
      width: 120px;
      border: 1px solid rgb(0 21 41 / 8%);
      z-index: 9999;
      &:deep(span) {
        padding-left: 5px;
      }
      .el-dropdown-menu__item:hover {
        background-color: var(--el-color-primary);
        color: var(--el-color-white);
      }
    }
  }
</style>
