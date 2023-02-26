<template>
  <div v-for="property in properties" :key="property">
    <span>{{ property }} : {{ route.meta[property] }}</span>
  </div>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const properties = Object.keys(route.meta);
</script>

<style lang="scss" scoped></style>
