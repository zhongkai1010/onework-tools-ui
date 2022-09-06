<template>
  <el-select
    :model-value="props.modelValue"
    @update:model-value="(val) => $emit('update:model-value', val)"
  >
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </el-select>
</template>

<script setup lang="ts">
  import { FormComponentType } from '..';
  import ComponentData from '/@/components/DynamicForm/component';

  interface Props {
    modelValue: FormComponentType;
  }

  const props = defineProps<Props>();

  const options = Object.keys(ComponentData).map((t) => {
    return {
      label: ComponentData[t].displayName,
      value: t,
    };
  });
</script>

<style scoped></style>
