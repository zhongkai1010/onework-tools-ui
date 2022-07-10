<template>
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
</template>

<script lang="ts" setup>
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
</style>
