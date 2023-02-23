<template>
  <div class="body_wrapper">
    <div class="body_container" v-bind="attrs">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useAttrs } from 'vue';

  const attrs = useAttrs();
</script>

<style lang="scss" scoped>
  .body_wrapper {
    margin: $layout-body-margin;
    min-height: $main-no-margin-height;
    .body_container {
      padding: $layout-body-padding;
      background-color: #fff;
      border-radius: 5px;
      min-height: $main-no-margin-height;
    }
  }
</style>
