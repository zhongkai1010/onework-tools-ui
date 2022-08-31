<template>
  <el-dialog v-model="dialogShow" title="表单预览效果">
    <DynamicForm v-bind="formConfig" ref="formRef" :model="formValue" />
  </el-dialog>
</template>

<script setup lang="ts">
  import { DynamicFormConfig } from '/@/components/DynamicForm';

  const dialogShow = ref(false);
  const formValue = reactive({});
  const formRef = ref();
  const formConfig = reactive<DynamicFormConfig>({
    name: '',
    fields: [],
  });
  const open = (config: DynamicFormConfig) => {
    Object.keys(config).forEach((t) => {
      formConfig[t] = config[t];
    });
    dialogShow.value = true;
  };

  defineExpose<{ open: (config: DynamicFormConfig) => void }>({ open });
</script>

<style scoped></style>
