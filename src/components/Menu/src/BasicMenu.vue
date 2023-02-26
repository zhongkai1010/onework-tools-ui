<template>
  <div>
    <el-menu v-bind="props.prop" />
  </div>
</template>

<script setup lang="ts">
  import { BasicMenuProps } from './props';

  const props = defineProps<BasicMenuProps>();
</script>

<style scoped></style>
