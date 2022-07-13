<template>
  <div class="ow-wrapper">
    <div class="tabs-wrapper">
      <LayoutLogo :title="'OneWork Tools UI'" :logo="logoImg" :fold="true" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import logoImg from "/@/assets/logo.png";
import LayoutLogo from "/@/layouts/components/logo/index.vue";
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
