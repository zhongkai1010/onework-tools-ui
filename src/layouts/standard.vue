<template>
  <el-container>
    <el-aside class="aside-wrapper">
      <div class="logo-wrapper">
        <a href="/">
          <img :src="logoImg" />
          <span class="title">OneWrok Tools UI</span>
        </a>
      </div>
      <el-scrollbar class="menu-wrapper">
        <LayoutMenu />
      </el-scrollbar>
    </el-aside>
    <el-main class="main-wrapper">
      <el-container>
        <el-header class="header-wrapper">
          <div class="nav-wrapper">
            <div class="nav-container">
              <LayoutTools />
            </div>
          </div>
          <div class="tabs-wrapper">
            <div>
              <IconifyIcon icon="fe:app-menu" />
            </div>
            <div class="tabs-container">
              <el-tabs type="card">
                <el-tab-pane>
                  <template #label>
                    <span class="label">
                      <IconifyIcon icon="fe:app-menu" :title="`首页`" />
                      <span>首页</span>
                    </span>
                  </template>
                </el-tab-pane>
              </el-tabs>
              <div>
                <IconifyIcon icon="fe:app-menu" />
              </div>
            </div>
          </div>
        </el-header>
        <el-main class="body-wrapper">
          <router-view v-slot="{ Component }">
            <component :is="Component" />
          </router-view>
        </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { mock } from "mockjs";
import { computed } from "vue";
import { siteConfigStoreHook } from "/@/store/globalConfig";
import LayoutMenu from "/@/layouts/components/menu/index.vue";
import LayoutTools from "/@/layouts/components/tools/index.vue";

import logoImg from "/@/assets/logo.png";

const menuWidth = computed(() => `${siteConfigStoreHook().menuWidth}px`);
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
  display: flex;
  flex-direction: column;
  width: v-bind(menuWidth);
  background-color: $header-color;
  .logo-wrapper {
    height: $header-height;
    width: v-bind(menuWidth);
    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-top: 14px;
      color: $header-font-color;
    }
    img {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      align-items: center;
    }
    .title {
      font-size: 20px;
    }
  }
  .menu-wrapper {
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    width: v-bind(menuWidth);
    height: calc(100vh - $header-height);
  }
}
.main-wrapper {
  padding: 0;
  .header-wrapper {
    padding: 0;
    height: calc($header-height + 50px);
    background-color: $header-color;
    .nav-wrapper {
      width: calc(100vw - v-bind(menuWidth));
      height: $header-height;
      .nav-container {
        width: 400px;
        position: fixed;
        right: 0px;
        margin-top: 10px;
      }
    }
    .tabs-wrapper {
      height: 50px;
      width: calc(100vw - v-bind(menuWidth));
      .tabs-container {
        display: flex;
        box-sizing: border-box;
        background-color: $header-color;
        max-height: 50px;
        padding: 0 5%;
        align-content: center;
        align-items: center;
        justify-content: space-between;
        &:deep(.el-tabs) {
          display: flex;
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

        .label {
          i {
            vertical-align: top;
            margin-top: 11px;
            margin-right: 5px;
          }
        }
      }
    }
  }
  .body-wrapper {
  }
}
</style>
