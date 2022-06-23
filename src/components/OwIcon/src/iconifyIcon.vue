<template>
  <el-icon :size="size" :color="color">
    <Icon :icon="icon" />
  </el-icon>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { CSSProperties } from "vue";

const { icon = "", size = 20 } = defineProps<{
  icon: string;
  size: number;
  color: Pick<CSSProperties, "color">;
}>();
</script>
