<template>
  <div class="standard-wrapper">
    <div class="left">
      <LayoutLogo :logo="logoImg" :title="'OneWork Tools UI'" />
    </div>
    <div class="right">
      <LayoutTools />
      <LayoutAvatar :username="'系统管理员'" :avatar="logoImg" />
    </div>
  </div>
</template>

<script setup lang="ts">
import LayoutLogo from "/@/layouts/components/logo/index.vue";
import LayoutTools from "/@/layouts/components/tools/index.vue";
import LayoutAvatar from "/@/layouts/components/avatar/index.vue";
import logoImg from "/@/assets/logo.png";
</script>

<style lang="scss" scoped>
.standard-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: $header-height;
  background-color: $header-background-color;
  color: $header-color;
  padding: 0 20px;
  position: fixed;
  .left {
    position: relative;
    left: 0;
  }
  .right {
    display: flex;
    align-items: center;
    position: relative;
    justify-content: flex-end;
    right: 0;
  }
}
</style>
