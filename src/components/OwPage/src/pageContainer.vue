<template>
  <div class="page-container">
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.page-container {
  margin: 20px 5%;
  padding: 20px;
  height: calc(100vh - 40px);
  background-color: #ffff;
}
</style>
