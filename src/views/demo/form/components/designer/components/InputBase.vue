<template>
  <div>
    <el-divider content-position="left">表单项配置</el-divider>
    <el-form-item label="表单名称" :required="true" prop="name">
      <el-input v-model="formValue.name" />
    </el-form-item>
    <el-form-item label="数据路径" :required="true" prop="props.prop">
      <el-input v-model="formValue.props.prop" />
    </el-form-item>
    <el-form-item label="标签名称" :required="true" prop="props.label">
      <el-input v-model="formValue.props.label" />
    </el-form-item>
    <el-form-item label="标签宽度">
      <el-input v-model="formValue.props.labelWidth" prop="props.labelWidth" />
    </el-form-item>
    <el-form-item label="默认值">
      <el-input v-model="formValue.defaultValue" prop="defaultValue" />
    </el-form-item>
    <el-divider content-position="left">布局配置</el-divider>
    <el-form-item label="表单栅格">
      <el-slider
        v-model.number="formValue.span"
        :min="0"
        :max="24"
        style="width: 95%"
        prop="span"
      />
    </el-form-item>
  </div>
</template>

<script setup lang="ts">
  import { DraggableItemConfig } from '/@/views/demo/form/types';
  const props = defineProps<{
    modelValue: DraggableItemConfig;
  }>();
  const formValue = reactive(props.modelValue);
  console.log('-------InputBase----------', formValue);
</script>

<style scoped></style>
