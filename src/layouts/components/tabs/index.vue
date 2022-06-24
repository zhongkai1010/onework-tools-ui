<template>
  <div class="tabs-container">
    <el-tabs class="tabs">
      <el-tab-pane label="User" name="first" />
      <el-tab-pane label="Config" name="second" />
      <el-tab-pane label="Role" name="third" />
      <el-tab-pane label="Task" name="fourth" />
    </el-tabs>
    <el-dropdown class="dropdown">
      <IconifyIcon icon="fe:app-menu" :size="20" />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>刷新</el-dropdown-item>
          <el-dropdown-item>关闭其它</el-dropdown-item>
          <el-dropdown-item>关闭左侧</el-dropdown-item>
          <el-dropdown-item>关闭右侧</el-dropdown-item>
          <el-dropdown-item>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
.tabs-container {
  display: flex;
  height: 50px;
  .tabs {
    height: 38px;
    width: calc(100% - 40px);
    &:deep(.el-tabs__nav-wrap) {
      overflow: hidden;
      margin-bottom: -1px;
      position: relative;
    }
    &:deep(.el-tabs__item) {
      height: 38px;
      padding: 0 30px 0 30px;
      margin-top: 5.95px;
      margin-right: -18px;
      line-height: 38px;
      text-align: center;
      border: 0;
      outline: none;
      transition: padding 0.3s;
    }
    &:deep(.el-tabs__item.is-active) {
      background-color: #e8f4ff;
      color: #1890ff;
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
