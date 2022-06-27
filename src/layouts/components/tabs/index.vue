<template>
  <div class="tabs-container">
    <ElTabs class="tabs" type="card" @contextmenu="onTabContextMenu">
      <ElTabPane>
        <template #label>
          <span class="label">
            <IconifyIcon icon="akar-icons:lock-on" class="button" title="首页" />
            <span>首页</span>
          </span>
        </template>
      </ElTabPane>
      <ElTabPane closable>
        <template #label>
          <span class="label">
            <IconifyIcon icon="akar-icons:lock-on" class="button" title="锁定" />
            <span>Route</span>
          </span>
        </template>
      </ElTabPane>
      <ElTabPane closable label="Config">
        <template #label>
          <span class="label">
            <IconifyIcon icon="akar-icons:lock-on" class="button" title="锁定" />
            <span>Route</span>
          </span>
        </template>
      </ElTabPane>
      <ElTabPane closable label="Role">
        <template #label>
          <span class="label">
            <IconifyIcon icon="akar-icons:lock-on" class="button" title="锁定" />
            <span>Route</span>
          </span>
        </template>
      </ElTabPane>
      <ElTabPane closable label="Task">
        <template #label>
          <span class="label">
            <IconifyIcon icon="akar-icons:lock-on" class="button" title="锁定" />
            <span>Route</span>
          </span>
        </template>
      </ElTabPane>
    </ElTabs>

    <ElDropdown class="dropdown">
      <IconifyIcon icon="fe:app-menu" :size="20" />
      <template #dropdown>
        <ElDropdownMenu>
          <ElDropdownItem>刷新</ElDropdownItem>
          <ElDropdownItem>关闭其它</ElDropdownItem>
          <ElDropdownItem>关闭左侧</ElDropdownItem>
          <ElDropdownItem>关闭右侧</ElDropdownItem>
          <ElDropdownItem>Action 5</ElDropdownItem>
        </ElDropdownMenu>
      </template>
    </ElDropdown>
    <TabTools
      :show="tabsMenuState.show"
      :x="tabsMenuState.x"
      :y="tabsMenuState.y"
      @on-blur="onToolsblur"
      @on-click="onToolsClick"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import TabTools from './TabTools.vue';
const tabsMenuState = reactive({
  show: false,
  x: 0,
  y: 0,
});
const onToolsClick = () => {
  tabsMenuState.show = false;
  console.log('onToolsClick');
};
const onToolsblur = () => {
  tabsMenuState.show = false;
  console.log('onToolsblur');
};
const onTabContextMenu = (e: MouseEvent) => {
  e.preventDefault();
  tabsMenuState.show = true;
  tabsMenuState.x = e.x;
  tabsMenuState.y = e.y;
};
</script>
<style lang="scss" scoped>
.tabs-container {
  display: flex;
  box-sizing: border-box;
  background-color: $header-background;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  min-height: 50px;
  padding: 0px 5%;
  user-select: none;

  .label {
    i {
      margin-right: 5px;
    }
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
    // outline: none;
    // -webkit-mask: url(../../../assets/tabs-button.png);
    // mask: url(../../../assets/tabs-button.png);
    // -webkit-mask-size: 100% 100%;
    // mask-size: 100% 100%;
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

  .dropdown {
    flex: 1;
    right: 0;
    justify-content: flex-end;
    display: flex;
    align-items: center;
  }
}
</style>
