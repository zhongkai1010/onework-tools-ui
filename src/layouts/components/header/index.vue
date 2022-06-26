<template>
  <div class="header-container">
    <a class="logo" href="/">
      <img :src="logoPng" />
      <span class="title">OneWork Toools UI</span>
    </a>
    <el-menu mode="horizontal" :router="true">
      <template v-for="menu in menus" :key="menu.index">
        <SubMenu :menu="menu" />
      </template>
    </el-menu>
    <div class="tool">
      <IconifyIcon icon="akar-icons:lock-on" class="button" title="锁定" />
      <IconifyIcon icon="akar-icons:search" class="button" title="搜索" />
      <el-badge :value="12" class="button">
        <IconifyIcon icon="akar-icons:bell" title="通知" />
      </el-badge>
      <IconifyIcon icon="akar-icons:full-screen" class="button" title="全屏" />
      <IconifyIcon icon="uil:english-to-chinese" class="button" title="中英切换" />
      <IconifyIcon icon="carbon:cloud-satellite-config" class="button" title="设置" />
      <IconifyIcon icon=" carbon:renew" class="button" title="刷新" />
      <el-dropdown popper-class="avatar">
        <span class="avatar">
          <el-avatar />
          <span class="username">管理员</span>
          <IconifyIcon icon="ant-design:down-outlined" />
        </span>

        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出系统</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import logoPng from '../../../assets/logo.png'
const { menus } = defineProps<{
  menus: Menu[]
}>()
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  background-color: $header-background;
  min-height: 100%;
  padding: 0px 5%;
  border-bottom: 1px solid rgb(0 21 41 / 8%);

  .logo {
    display: flex;
    margin-right: 40px;

    img {
      height: 32px;
      margin: auto;
    }
  }

  .title {
    color: #515a6e !important;
    display: inline-block;
    margin-left: 5px;
    overflow: hidden;
    font-size: 20px;
    line-height: 60px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
  }

  .el-menu {
    width: 60%;
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
      margin-top: 10px;
      margin-right: 5px;
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
    display: flex;
    align-items: center;

    .button {
      margin-left: 20px;
      cursor: pointer;
    }

    .avatar {
      display: flex;
      align-content: center;
      align-items: center;

      .username {
        height: 40px;
        margin-left: 6px;
        line-height: 40px;
        cursor: pointer;
      }
    }
  }
}
</style>
