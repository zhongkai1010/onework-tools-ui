<template>
  <el-container>
    <el-aside class="aside-wrapper">
      <div class="logo-wrapper" />
      <div class="menu-wrapper" />
    </el-aside>
    <el-main>
      <el-container>
        <el-header class="header-wrapper">
          <div class="header-wrapper">header-wrapper</div>
          <div class="tabs-wrapper">tabs-wrapper</div>
        </el-header>
        <el-main class="main-wrapper"> main-wrapper </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { mock } from "mockjs";
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
}
</style>
