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
            <LayoutTabs />
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
import LayoutTabs from "/@/layouts/components/tabs/index.vue";
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
$logo-width: 64px;
$header-height: 60px;
.aside-wrapper {
  display: flex;
  flex-direction: column;
  width: v-bind(menuWidth);
  .logo-wrapper {
    height: $header-height;
    width: v-bind(menuWidth);
    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-top: 14px;
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
    width: v-bind(menuWidth);
    height: calc(100vh - $header-height);
  }
}
.main-wrapper {
  padding: 0;
  .header-wrapper {
    padding: 0;
    height: calc($header-height + 50px);
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
    }
  }
  .body-wrapper {
  }
}
</style>
