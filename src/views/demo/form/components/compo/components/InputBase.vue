<template>
  <div>
    <el-divider content-position="left">基本配置</el-divider>
    <el-form-item label="字段名" :required="true" prop="name">
      <el-input v-model="formValue.name" />
    </el-form-item>
    <el-form-item label="标题" :required="true" prop="label">
      <el-input v-model="formValue.label" />
    </el-form-item>
    <el-form-item label="表单栅格">
      <el-slider
        v-model.number="formValue.span"
        :min="0"
        :max="24"
        style="width: 95%"
        prop="span"
      />
    </el-form-item>
    <el-form-item label="标签宽度">
      <el-input v-model="formValue.labelWidth" prop="labelWidth" />
    </el-form-item>
    <el-form-item label="组件宽度">
      <el-input v-model="formValue.width" prop="width" />
    </el-form-item>
    <el-form-item label="默认值">
      <el-input v-model="formValue.defaultValue" prop="defaultValue" />
    </el-form-item>
    <el-form-item label="提示文字">
      <el-input v-model="formValue.placeholder" prop="placeholder" />
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
