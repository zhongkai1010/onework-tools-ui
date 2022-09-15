<template>
  <el-select :model-value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
    <el-option
      v-for="item in ModelPropertyTypeOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script setup lang="ts">
  import { ModelPropertyTypeOptions } from '../types';

  defineProps<{ modelValue: any }>();
  defineEmits(['update:modelValue']);
</script>

<style scoped></style>
