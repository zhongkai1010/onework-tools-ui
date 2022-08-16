<template>
  <i
    :class="`${props.fold ? 'ri-menu-unfold-fill' : 'ri-menu-fold-line'}`"
    @click="emit('click')"
  ></i>
</template>

<script setup lang="ts">
  const props = defineProps<{
    fold: boolean;
  }>();
  const emit = defineEmits<{
    (e: 'click'): void;
  }>();
</script>
