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
    min-height: $layout-body-min-height;
    .body_container {
      background-color: #fff;
      border-radius: 5px;
      min-height: $layout-body-min-height;
    }
  }
</style>
