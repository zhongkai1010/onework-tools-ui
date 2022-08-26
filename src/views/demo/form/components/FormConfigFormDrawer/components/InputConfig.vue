<template>
  <div>
    <el-divider content-position="left">组件配置</el-divider>
    <el-form-item
      v-for="config in props.modelValue.componentConfig"
      :key="config.key"
      :prop="`componentConfig.index.value`"
      :label="config.label"
    >
      <form-item :component="config.component" v-model="config.value" :props="config.props" />
    </el-form-item>
  </div>
</template>

<script setup lang="ts">
  import { DraggableItemConfig } from '/@/views/demo/form/types';

  const props = defineProps<{
    modelValue: DraggableItemConfig;
  }>();
</script>

<style scoped></style>
