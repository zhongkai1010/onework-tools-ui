<template>
  <div class="ow-wrapper">
    <div class="tabs-wrapper">
      <LayoutTools />
      <LayoutAvatar :username="'系统管理员'" :avatar="avatarImg" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import LayoutTools from "/@/layouts/components/tools/index.vue";
import LayoutAvatar from "/@/layouts/components/avatar/index.vue";
import avatarImg from "/@/assets/logo.png";
</script>

<style lang="scss" scoped>
.ow-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  .tabs-wrapper {
    display: flex;
    align-items: center;
    justify-items: center;
    height: 60px;
  }
}
</style>
