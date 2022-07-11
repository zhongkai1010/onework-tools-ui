<template>
  <el-menu :unique-opened="true">
    <sub-menu v-for="menu in menus" :menu="menu" :key="menu.path" />
  </el-menu>
</template>

<script lang="ts" setup>
import { mock } from "mockjs";

const getMenus = () => {
  const menus = mock({
    "tabs|20": [
      {
        title: "@cword(2,4)",
        path: "@url",
        "icon|+1": [
          "ant-design:audio-outlined",
          "ant-design:android-filled",
          "ant-design:alipay-square-filled"
        ]
      }
    ]
  }).tabs;
  for (let index = 0; index < menus.length; index++) {
    if (index % 3 === 0) {
      menus[index].children = mock({
        "data|1-3": [
          {
            title: "@cword(2,4)",
            path: "@url",
            "icon|+1": [
              "ant-design:audio-outlined",
              "ant-design:android-filled",
              "ant-design:alipay-square-filled"
            ]
          }
        ]
      }).data;
    }
  }
  return menus;
};

const menus = getMenus();
</script>

<style lang="scss" scoped></style>
