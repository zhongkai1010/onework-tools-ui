<template>
  <div class="footer">
    <div class="button">
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .footer {
    position: fixed;
    bottom: 0;
    width: 400px;
    margin-left: $layout-sidebar-width;
    padding: 10px 20px;
    background-color: #fff;
    justify-content: flex-end;
    display: flex;
  }
</style>
