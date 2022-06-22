<template>
  <div class="header-container">
    <a class="logo" href="/">
      <img src="../../../assets/logo.png" />
      <span class="title">OneWork Toools UI</span>
    </a>
    <el-menu :default-active="1" mode="horizontal">
      <el-menu-item index="1">Processing Center</el-menu-item>
      <el-sub-menu index="2">
        <template #title>Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">用户管理</el-menu-item>
          <el-menu-item index="2-4-2">用户管理</el-menu-item>
          <el-menu-item index="2-4-3">用户管理</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="3">用户管理</el-menu-item>
      <el-menu-item index="4">用户管理</el-menu-item>
      <el-menu-item index="5">用户管理</el-menu-item>
      <el-menu-item index="6">用户管理</el-menu-item>
      <el-menu-item index="7">用户管理</el-menu-item>
      <el-menu-item index="8">用户管理</el-menu-item>
    </el-menu>
    <div class="tool">
      <el-button :icon="Search" circle />
      <el-button type="primary" :icon="Edit" />
      <el-button type="success" :icon="Check" />
      <el-button type="info" :icon="Message" />
      <el-button type="warning" :icon="Star" />
      <el-button type="danger" :icon="Delete" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  min-height: 100%;
  padding: 0 20px 0 20px;
  .logo {
    display: flex;
    margin-right: 5%;
    a {
      margin-right: 10%;
    }
    img {
      height: 32px;
      margin: auto;
    }
  }
  .title {
    display: inline-block;
    margin-left: 5px;
    overflow: hidden;
    font-size: 20px;
    line-height: 55px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
  }
  .el-menu {
    border-bottom: 0;
    background-color: $header-background;
    .el-menu-item {
      height: 40px;
      border-bottom: 0;
      margin: 10px 5px 0px 0px;
      background-color: $header-menu-background;
      &:hover {
        background-color: $header-menu-activate-background;
      }
      &.is-active {
        background-color: $header-menu-activate-background;
      }
    }
    &:deep(.el-sub-menu__title) {
      height: 40px;
      border-bottom: 0;
      margin: 10px 5px 0px 0px;
    }
    &:deep(.el-sub-menu__title:hover) {
      background-color: $header-menu-activate-background;
    }
    &:deep(.el-sub-menu.is-active .el-sub-menu__title) {
      background-color: $header-menu-activate-background;
      border: 0;
    }
  }

  .tool {
    flex: 1;
    right: 0;
    justify-content: flex-end;
    display: flex;
    align-items: center;
  }
}
</style>
