<template>
  <el-dialog v-model="dialogShow" title="表单预览效果">
    <DynamicForm v-bind="props.config" ref="formRef" :model="formValue" />
  </el-dialog>
</template>

<script setup lang="ts">
  import { DynamicFormConfig } from '/@/components/DynamicForm';
  const props = defineProps<{ config: DynamicFormConfig }>();
  const dialogShow = ref(false);
  const formValue = reactive({});
  const formRef = ref();

  const open = () => {
    dialogShow.value = true;
  };

  defineExpose<{ open: () => void }>({ open });
</script>

<style scoped></style>
