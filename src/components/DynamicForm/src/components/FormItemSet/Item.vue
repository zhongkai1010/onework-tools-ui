<template>
  <div>
    <!---基础配置--->
    <el-divider content-position="left">表单项配置</el-divider>
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

  const modelValue = ref<ModelValue>({
    name: '',
    span: 6,
    defaultValue: undefined,
    showLabel: true,
  });

  const emits = defineEmits<{ (e: 'update:modelValue', value: ModelValue) }>();

  watch([props.modelValue], () => {
    modelValue.value = { ...props.modelValue };
  });

  watch([modelValue], () => {
    emits('update:modelValue', modelValue.value);
  });
</script>
