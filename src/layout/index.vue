<template>
  <div class="app-wrapper">
    <el-container>
      <el-header>
        <Login />
      </el-header>
      <el-container>
        <el-aside>
          <Sidebar :menus="menus" />
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from "@vue/runtime-dom";
import Login from "/@/layout/components/logo/index.vue";
import Sidebar from "/@/layout/components/sidebar/index.vue";

onMounted(() => {
  console.log("layout init");
});

const menus = [
  { text: "配置管理" },
  { text: "菜单管理" },
  {
    text: "辅助工具",
    children: [{ text: "翻译工具" }, { text: "代码生成器" }],
  },
];
</script>
<style lang="scss" scoped>
@mixin clearfix {
  &::after {
    content: "";
    display: table;
    clear: both;
  }
}

.app-wrapper {
  @include clearfix;

  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }

  .el-header {
    height: 50px;
    background-color: #000;
  }
}
</style>
