<template>
  <div class="ow-wrapper">
    <div class="header">
      <ColumnHeader />
    </div>
    <br />
    <br />
    <div class="header">
      <StandardHeader />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ColumnHeader from "/@/layouts/components/header/column.vue";
import StandardHeader from "/@/layouts/components/header/standard.vue";
</script>

<style lang="scss" scoped>
.ow-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .header {
    width: 100%;
    height: 60px;
  }
}
</style>
