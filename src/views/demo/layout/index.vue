<template>
  <page-view class="container">
    <div class="info">
      <ul>
        <li>width:{{ width }}</li>
        <li>height:{{ height }}</li>
      </ul>
    </div>
    <div class="main" ref="el">
      <iframe src="https://element-plus.gitee.io/zh-CN/"></iframe>
    </div>
  </page-view>
</template>

<script setup lang="ts">
  import { useElementSize } from '@vueuse/core';

  const el = ref(null);
  const { width, height } = useElementSize(el);
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    background-color: transparent;
    align-items: center;
    justify-items: center;
    justify-content: center;

    .info {
      position: absolute;
      top: 20px;
      left: 20px;
    }

    .main {
      width: 200px;
      height: 200px;
      resize: both;
      overflow: hidden;
      border: 1px solid var(--el-color-primary);
      padding: 10px;

      iframe {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
