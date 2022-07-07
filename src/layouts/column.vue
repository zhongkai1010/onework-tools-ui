<template>
  <el-container>
    <el-aside class="aside-wrapper">
      <div class="logo-container">
        <a href="/">
          <img :src="logoPng" class="logo" />
          <span class="title">One Work UI</span>
        </a>
      </div>
      <div class="menu-container">main</div>
    </el-aside>
    <el-main>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import logoPng from "/@/assets/logo.png";
</script>

<style lang="scss" scoped>
.aside-wrapper {
  width: 266px;
  height: 100vh;
  .logo-container {
    display: flex;
    .logo {
      display: inline;
      width: 32px;
    }
    .title {
      padding-right: 15px;
      padding-left: 15px;
      margin-left: 64px !important;
      color: #515a6e !important;
      background: #fff !important;
      display: inline-block;
      overflow: hidden;
      font-size: 20px;
      line-height: 55px;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: middle;
    }
  }
  .menu-container {
  }
}
</style>
