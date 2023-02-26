<template>
  <div class="tabs-container">
    <el-tabs v-model="activeKeyRef" type="card" @tab-click="handleClick">
      <el-tab-pane
        :name="item.query ? item.fullPath : item.path"
        v-for="item in getTabsState"
        :key="item.name"
      >
        <template #label>
          <div class="tab" @contextmenu="onTabContextMenu">
            <span>{{ t(item.meta?.title) }}</span>
            <Icon
              icon="ep:close"
              @click.stop:="() => handleEdit(item.query ? item.fullPath : item.path)"
            />
          </div>
        </template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
  import type { TabsPaneContext } from 'element-plus';
  import { Icon } from '@iconify/vue';
  import { RouteLocationNormalized, RouteMeta } from 'vue-router';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { listenerRouteChange } from '/@/logics/mitt/routeChange';
  import { REDIRECT_NAME } from '/@/router/constant';
  import { useMultipleTabStore } from '/@/store/modules/multipleTab';
  import { useUserStore } from '/@/store/modules/user';
  import { useRouter } from 'vue-router';
  import { useGo } from '/@/hooks/web/usePage';

  const { t } = useI18n();
  const tabStore = useMultipleTabStore();
  const userStore = useUserStore();
  const router = useRouter();
  const go = useGo();
  const activeKeyRef = ref('');
  const getTabsState = computed(() => {
    return tabStore.getTabList.filter((item) => !item.meta?.hideTab);
  });

  const unClose = computed(() => unref(getTabsState).length === 1);

  listenerRouteChange((route) => {
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
    console.log('currentActiveMenu', currentActiveMenu);
  });

  /**
   *  标签点击
   * @param tab
   * @param event
   */
  const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event);
    activeKeyRef.value = tab.props.name as string;
    go(activeKeyRef.value, false);
  };

  /**
   * 标签右键
   */
  const onTabContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    console.log('onTabContextMenu', e);
  };

  // Close the current tab
  // 关闭当前选项卡
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const handleEdit = async (targetKey: string) => {
    // Added operation to hide, currently only use delete operation
    // 新增隐藏操作，目前仅使用删除操作
    if (unref(unClose)) {
      return;
    }

    await tabStore.closeTabByKey(targetKey, router);
  };
</script>
<style lang="scss" scoped>
  .tabs-container {
    .tab {
      display: flex;
      align-items: center;
      width: 100%;
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
  }
</style>
