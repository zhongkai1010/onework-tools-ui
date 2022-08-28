<template>
  <el-drawer :model-value="dialogShow" @closed="onClickClose" title="表单配置">
    <el-form :model="formValue" label-width="120px" label-position="top">
      <el-row :gutter="20">
        <el-col :span="24" :offset="0">
          <el-form-item label="栅格间隔" prop="gutter">
            <el-slider v-model="formValue.gutter" :min="4" :max="24" style="width: 90%" />
          </el-form-item>
        </el-col>
        <el-col :span="24" :offset="0">
          <el-form-item label="标签长度" prop="labelWidth">
            <el-slider v-model="formValue.labelWidth" :min="80" :max="160" style="width: 90%" />
          </el-form-item>
        </el-col>
        <el-col :span="24" :offset="0">
          <el-form-item label="标签位置" prop="labelPosition">
            <el-radio-group v-model="formValue.labelPosition">
              <el-radio label="left">left</el-radio>
              <el-radio label="right">right</el-radio>
              <el-radio label="top">top</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="24" :offset="0">
          <el-form-item label="组件尺寸" prop="size">
            <el-radio-group v-model="formValue.size">
              <el-radio label="large">large</el-radio>
              <el-radio label="default">default</el-radio>
              <el-radio label="small">small</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>

        <el-col :span="24" :offset="0">
          <el-form-item label="水平排列方式" prop="justify">
            <el-radio-group v-model="formValue.justify">
              <el-radio label="start">start</el-radio>
              <el-radio label="end">end</el-radio>
              <el-radio label="center">center</el-radio>
              <el-radio label="space-around">space-around</el-radio>
              <el-radio label="space-between">space-between</el-radio>
              <el-radio label="space-evenly">space-evenly</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="24" :offset="0">
          <el-form-item label="垂直排列方式" prop="align">
            <el-radio-group v-model="formValue.align">
              <el-radio label="top">top</el-radio>
              <el-radio label="middle">middle</el-radio>
              <el-radio label="bottom">bottom</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-drawer>
</template>

<script setup lang="ts">
  const formValue = reactive<{
    gutter: number;
    labelWidth: number;
    labelPosition: 'left' | 'right' | 'top';
    size: 'large' | 'default' | 'small';
    justify: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly';
    align: 'top' | 'middle' | 'bottom';
  }>({
    gutter: 20,
    labelWidth: 80,
    labelPosition: 'top',
    size: 'default',
    justify: 'start',
    align: 'middle',
  });

  const dialogShow = ref(false);

  const onClickOpen = () => {
    dialogShow.value = true;
  };
  const onClickClose = () => {
    dialogShow.value = false;
  };

  defineExpose({ open: onClickOpen, config: formValue });
</script>

<style scoped></style>
