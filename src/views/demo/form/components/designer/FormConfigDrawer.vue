<template>
  <div class="config-container">
    <el-drawer :model-value="dialogShow" @closed="onClickClose" title="表单配置">
      <el-form :model="formValue" label-width="120px" label-position="top">
        <el-divider content-position="left">布局配置</el-divider>
        <el-form-item label="栅格间隔" prop="gutter">
          <el-slider v-model="formValue.layout.gutter" :min="4" :max="24" style="width: 90%" />
        </el-form-item>
        <el-form-item label="水平排列方式" prop="justify">
          <el-radio-group v-model="formValue.layout.justify">
            <el-radio label="start">start</el-radio>
            <el-radio label="end">end</el-radio>
            <el-radio label="center">center</el-radio>
            <el-radio label="space-around">space-around</el-radio>
            <el-radio label="space-between">space-between</el-radio>
            <el-radio label="space-evenly">space-evenly</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="垂直排列方式" prop="align">
          <el-radio-group v-model="formValue.layout.align">
            <el-radio label="top">top</el-radio>
            <el-radio label="middle">middle</el-radio>
            <el-radio label="bottom">bottom</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-divider content-position="left">表单配置</el-divider>
        <el-form-item label="标签长度" prop="labelWidth">
          <el-input v-model="formValue.props.labelWidth" />
        </el-form-item>
        <el-form-item label="标签位置" prop="labelPosition">
          <el-radio-group v-model="formValue.props.labelPosition">
            <el-radio label="left">left</el-radio>
            <el-radio label="right">right</el-radio>
            <el-radio label="top">top</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="组件尺寸" prop="size">
          <el-radio-group v-model="formValue.props.size">
            <el-radio label="large">large</el-radio>
            <el-radio label="default">default</el-radio>
            <el-radio label="small">small</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
  import { FormConfigDrawerProps } from '../../types';

  const props = defineProps<{
    config: FormConfigDrawerProps;
  }>();

  const formValue = reactive<FormConfigDrawerProps>(props.config);

  const dialogShow = ref(false);

  const onClickOpen = () => {
    dialogShow.value = true;
  };
  const onClickClose = () => {
    dialogShow.value = false;
  };

  defineExpose({ open: onClickOpen, config: formValue });
</script>

<style scoped lang="scss">
  .config-container {
    :deep(.el-drawer__header) {
      margin-bottom: 0px;
    }
  }
</style>
