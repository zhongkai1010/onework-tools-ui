<template>
  <iframe :src="props.src" class="container"></iframe>
</template>

<script setup lang="ts">
  const props = defineProps<{
    src: string;
  }>();
</script>

<style lang="scss" scoped>
  .container {
    @include scrollBar;
    width: 100%;
    height: $main-height;
  }
</style>
