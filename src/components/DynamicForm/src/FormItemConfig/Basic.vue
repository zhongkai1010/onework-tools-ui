<template>
  <div>
    <el-divider content-position="left">基础配置</el-divider>
    <el-form-item label="表单名称" :required="true" prop="name">
      <el-input v-model="modelValue.name" />
    </el-form-item>
    <el-form-item label="表单栅格">
      <el-slider
        v-model.number="modelValue.span"
        :min="0"
        :max="24"
        style="width: 95%"
        prop="span"
      />
    </el-form-item>
    <el-form-item label="默认值">
      <el-input v-model="modelValue.defaultValue" prop="defaultValue" />
    </el-form-item>
    <el-form-item label="是否显示标签">
      <el-switch v-model="modelValue.showLabel" />
    </el-form-item>
  </div>
</template>

<script setup lang="ts">
  import _ from 'lodash';

  import { DynamicFormField } from '/@/components/DynamicForm';

  type ModelValue = Omit<DynamicFormField, 'component' | 'props'>;

  interface Props {
    modelValue: ModelValue;
  }

  const props = defineProps<Props>();
  const emit = defineEmits(['update:modelValue']);

  const modelValue = computed({
    get: () => {
      return props.modelValue;
    },
    set: (value) => {
      emit('update:modelValue', value);
    },
  });
</script>
