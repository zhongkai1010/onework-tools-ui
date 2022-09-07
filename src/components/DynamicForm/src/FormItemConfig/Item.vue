<template>
  <div>
    <el-divider content-position="left">表单项配置</el-divider>
    <el-form-item label="数据路径" prop="props.prop">
      <el-input v-model="modelValue.prop" />
    </el-form-item>
    <el-form-item label="标签名称" prop="props.label">
      <el-input v-model="modelValue.label" />
    </el-form-item>
    <el-form-item label="标签宽度">
      <el-input v-model="modelValue.labelWidth" prop="props.labelWidth" />
    </el-form-item>
    <el-form-item label="是否必填" prop="props.required">
      <el-switch v-model="modelValue.required" />
    </el-form-item>
    <el-form-item label="错误消息" prop="props.showMessage">
      <el-switch v-model="modelValue.showMessage" />
    </el-form-item>
    <el-form-item label="行内错误" prop="props.inlineMessage">
      <el-switch v-model="modelValue.inlineMessage" />
    </el-form-item>
    <el-form-item label="组件尺寸" prop="props.size">
      <el-radio-group v-model="modelValue.size">
        <el-radio label="large">large</el-radio>
        <el-radio label="default">default</el-radio>
        <el-radio label="small">small</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="触发方式" prop="props.trigger">
      <el-radio-group v-model="modelValue.trigger">
        <el-radio label="blur">blur</el-radio>
        <el-radio label="change">change</el-radio>
      </el-radio-group>
    </el-form-item>
  </div>
</template>

<script setup lang="ts">
  import _ from 'lodash';

  import { DynamicFormFieldProps } from '/@/components/DynamicForm';

  type ModelValue = Partial<DynamicFormFieldProps>;

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
    }
  });
</script>
