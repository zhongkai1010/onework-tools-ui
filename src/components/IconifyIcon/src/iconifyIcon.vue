<template>
  <el-icon :size="props.size || 14" :color="(props.color as string)">
    <Icon :icon="props.icon" />
  </el-icon>
</template>

<script setup lang="ts">
  import { Icon } from '@iconify/vue';
  import { CSSProperties } from 'vue';

  const props = defineProps<{
    icon: string;
    size?: number;
    color?: Pick<CSSProperties, 'color'>;
  }>();
</script>
