<template>
  <el-container>
    <el-aside class="aside-wrapper">
      <div class="logo-container">
        <a href="/">
          <span class="logo">
            <img :src="logoPng" class="logo" />
          </span>
          <span class="title">OneWork Tools UI</span>
        </a>
      </div>
      <div class="menu-wrapper">
        <div class="tab-container">
          <el-scrollbar>
            <el-tabs :tab-position="'left'">
              <el-tab-pane v-for="(item, index) in data.tabs" :key="index">
                <template #label>
                  <div class="menu-item">
                    <IconifyIcon :icon="item.icon" />
                    <span>{{ item.text }}</span>
                  </div>
                </template>
              </el-tab-pane>
            </el-tabs>
          </el-scrollbar>
        </div>
        <div class="menu-container">
          <el-divider>
            <span> 菜单 </span>
          </el-divider>
          <el-menu default-active="2">
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>Navigator One</span>
              </template>
              <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item one</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
              <el-icon><icon-menu /></el-icon>
              <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <el-icon><document /></el-icon>
              <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon><setting /></el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
          </el-menu>
        </div>
      </div>
    </el-aside>
    <el-main>
      <el-container>
        <el-header>
          <Tools />
        </el-header>
        <el-main> 123 </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import logoPng from "/@/assets/logo.png";
import { mock } from "mockjs";
import Tools from "/@/layouts/components/tools/index.vue";

const data = mock({
  "tabs|20": [
    {
      name: "@word",
      text: "@ctitle(2,3)",
      "icon|+1": [
        "ant-design:audio-outlined",
        ":ant-design:android-filled",
        "ant-design:alipay-square-filled"
      ],
      menus: mock({
        "data|5-10": [
          {
            name: "@guid()",
            text: "@ctitle(2,5)",
            "icon|+1": [
              "ant-design:audio-outlined",
              ":ant-design:android-filled",
              "ant-design:alipay-square-filled"
            ]
          }
        ]
      }).data
    }
  ]
});
console.log(data);
</script>

<style lang="scss" scoped>
.aside-wrapper {
  width: 266px;
  height: 100vh;
  .logo-container {
    line-height: 60px;
    text-align: center;
    &:deep(.el-tabs__active-bar) {
      width: 0;
      border: 0px;
    }
    .logo {
      position: fixed;
      top: 0;
      background-color: #282c34;
      display: block;
      width: 64px;
      height: 60px;
      margin: 0;
      img {
        width: 32px;
        height: 32px;
        margin-top: 14px;
        margin-left: 16px;
      }
    }
    .title {
      padding-right: 15px;
      padding-left: 15px;
      margin-left: 64px !important;
      color: #515a6e;
      display: inline-block;
      margin-left: 5px;
      overflow: hidden;
      font-size: 20px;
      line-height: 55px;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: middle;
    }
  }
  .menu-wrapper {
    display: flex;
    height: calc(100vh - 60px);
    .tab-container {
      max-width: 64px;
      height: calc(100vh - 60px);
      background-color: #282c34;
      color: #fff;
      &:deep(.el-tabs__nav-wrap) {
        margin: 0px;
      }
      &:deep(.el-tabs__active-bar) {
        width: 0px;
        height: 0px;
        border: 0px;
      }
      &:deep(.el-menu) {
        height: calc(100vh - 60px);
      }
      &:deep(.el-tabs__item) {
        padding: 5px;
        height: auto;
        &.is-active {
          color: #fff;
          background-color: #41b584;
        }
      }
      .menu-item {
        display: flex;
        color: #fff;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 56px;
        height: 54px;
        border-radius: 5px;
        padding: 10px 0px;
        & > .el-icon {
          margin-top: 10px;
        }
      }
    }
    .menu-container {
      &:deep(.el-sub-menu__title) {
        height: 50px;
        overflow: hidden;
        line-height: 50px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: middle;
      }
      &:deep(.el-menu-item) {
        height: 50px;
        overflow: hidden;
        line-height: 50px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: middle;
      }
    }
  }
}
</style>
