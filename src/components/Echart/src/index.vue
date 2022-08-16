<template>
  <v-chart :option="props.option" ref="el" />
</template>

<script setup lang="ts">
  import { useWindowSize } from '@vueuse/core';
  import { ECharts } from 'echarts/core';

  const { width, height } = useWindowSize();
  const el = ref<ECharts>(null);
  const props = defineProps<{
    option: any;
  }>();
  watch([width, height], () => {
    if (el) {
      el.value.resize();
    }
  });

  defineExpose({ el });
</script>

<style lang="scss" scoped></style>
