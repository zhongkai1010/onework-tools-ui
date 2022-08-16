<template>
  <div class="body_container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
  .body_container {
    margin: $layout-body-margin;

    min-height: calc(100vh - $layout-header-height - var(--layout-header-tab-height) - 40px);
    border-radius: 5px;
  }
</style>
