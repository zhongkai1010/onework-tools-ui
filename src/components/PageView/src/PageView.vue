<template>
  <div class="body_container" :style="cssStyle">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    margin?: number;
    padding?: number;
    color?: string;
  }>();
  const cssStyle = computed(() => {
    return {
      margin: props.margin ? `${props.margin}px` : props.margin === 0 ? '0px' : '20px',
      padding: props.padding ? `${props.padding}px` : props.padding === 0 ? '0px' : '20px',
      backgroundColor: props.color ? props.color : '#ffff',
      borderRadius: props.margin ? '5px' : props.margin === 0 ? '0px' : '5px',
    };
  });
</script>
<style lang="scss" scoped>
  .body_container {
    min-height: calc(
      100vh - $layout-header-height - var(--layout-header-tab-height) -
        (v-bind('cssStyle.margin') * 2)
    );
  }
</style>
