<template>
  <el-container>
    <el-aside class="aside-wrapper">
      <div class="logo-wrapper">logo-wrapper</div>
      <div class="menu-wrapper">menu-wrapper</div>
    </el-aside>
    <el-main class="main-wrapper">
      <el-container>
        <el-header class="header-wrapper">
          <div class="nav-wrapper">header-wrapper</div>
          <div class="tabs-wrapper">tabs-wrapper</div>
        </el-header>
        <el-main class="body-wrapper"> main-wrapper </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { mock } from "mockjs";
import { computed } from "vue";
import { siteConfigStoreHook } from "/@/store/globalConfig";
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
    background-color: #94b49f;
  }
  .menu-wrapper {
    width: v-bind(menuWidth);
    height: calc(100vh - $header-height);
    background-color: #cee5d0;
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
      background-color: #fcf8e8;
    }
    .tabs-wrapper {
      height: 50px;
      width: calc(100vw - v-bind(menuWidth));
      background-color: #ecb390;
    }
  }
  .body-wrapper {
    background-color: #94b49f;
  }
}
</style>
