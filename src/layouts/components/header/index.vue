<template>
  <div class="header-container">
    <a class="logo" href="/">
      <img src="../../../assets/logo.png" />
      <span class="title">OneWork Toools UI</span>
    </a>
    <el-menu mode="horizontal" :router="true">
      <template v-for="menu in menus">
        <SubMenu :menu="menu" />
      </template>
    </el-menu>
    <div class="tool">123</div>
  </div>
</template>

<script setup lang="ts">
const { menus } = defineProps<{
  menus: Menu[];
}>();
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  min-height: 100%;
  padding: 0 20px 0 20px;
  .logo {
    display: flex;
    width: 15%;
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
    flex: 1;
    right: 0;
    justify-content: flex-end;
    display: flex;
    align-items: center;
  }
}
</style>
