<template>
  <div class="body-wrapper">
    <div class="body-container" :class="{ 'is-interval': interval }" v-bind="attrs">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useAttrs } from 'vue';

  interface Props {
    interval?: boolean;
  }
  const attrs = useAttrs();
  const props = defineProps<Props>();
  const interval = computed(() => props.interval);
</script>

<style lang="scss" scoped>
  .body-wrapper {
    margin: $layout-body-margin;
    min-height: $layout-page-min-height;
    .body-container {
      background-color: #fff;
      border-radius: 5px;
      min-height: $layout-page-min-height;
    }

    .is-interval {
      padding: $page-wrapper-padding;
    }
  }
</style>
