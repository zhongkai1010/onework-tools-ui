<template>
  <div v-html="html" />
</template>

<script setup lang="ts">
const props = defineProps<{
  count?: number;
}>();
let html = "";
for (let index = 0; index < (props.count || 200); index++) {
  html += "<br/>";
}
</script>

<style scoped></style>
