<template>
  <div>
    <el-divider content-position="left">状态设置</el-divider>
    <el-form-item label="是否显示标签" prop="showLabel">
      <el-switch v-model="formValue.showLabel" />
    </el-form-item>
    <el-form-item label="是否只读">
      <el-switch v-model="formValue.props.readonly" prop="props.readonly" />
    </el-form-item>
    <el-form-item label="是否禁用" prop="props.disabled">
      <el-switch v-model="formValue.props.disabled" />
    </el-form-item>
    <el-form-item label="是否必填">
      <el-switch v-model="formValue.required" prop="required" />
    </el-form-item>
  </div>
</template>

<script setup lang="ts">
  import { DraggableItemConfig } from '/@/views/demo/form/types';

  const props = defineProps<{
    modelValue: DraggableItemConfig;
  }>();
  const formValue = reactive(props.modelValue);

  // const initProps = () => {
  //   if (typeof formValue.showLabel === 'undefined') {
  //     formValue.showLabel = true;
  //   }
  //   if (typeof formValue.props === 'undefined') {
  //     formValue.props = {
  //       readonly: false,
  //       disabled: false,
  //     };
  //   }
  //   if (typeof formValue.props?.readonly == 'undefined') {
  //     formValue.props.readonly = false;
  //   }
  //   if (typeof formValue.props?.disabled == 'undefined') {
  //     formValue.props.disabled = false;
  //   }
  //   if (typeof formValue.required === 'undefined') {
  //     formValue.required = false;
  //   }
  // };
  // initProps();
</script>
