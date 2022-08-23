<template>
  <el-drawer :model-value="dialogShow" @closed="onClose" title="表单项配置">
    <el-form :model="formValue" label-width="120px" label-position="top">
      <el-row :gutter="20">
        <el-col :span="24" :offset="0">
          <el-form-item label="表单名称" prop="name">
            <el-input v-model="formValue.name" />
          </el-form-item>
        </el-col>
        <el-col :span="24" :offset="0">
          <el-form-item label="栅格间隔" prop="span">
            <el-slider v-model="formValue.span" :min="1" :max="24" style="width: 90%" />
          </el-form-item>
        </el-col>
        <el-col :span="24" :offset="0">
          <el-form-item label="默认值" prop="defaultValue">
            <el-input v-model="formValue.defaultValue" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <template #footer>
      <div style="flex: auto">
        <el-button @click="onClose">取消</el-button>
        <el-button type="primary" @click="onClose">保存</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<script setup lang="ts">
  import { FormItemDrawerInstance } from '../types';
  import { ConfigFormItemProps } from '/@/components/ConfigForm';

  const formValue = reactive<ConfigFormItemProps>({
    label: '',
    name: '',
    component: 'input',
  });

  const dialogShow = ref(false);

  const onClickOpen = (config: ConfigFormItemProps) => {
    Object.keys(config).forEach((t) => {
      formValue[t] = config[t];
    });
    dialogShow.value = true;
  };

  const onClose = () => {
    dialogShow.value = false;
    emits('save', unref(formValue));
  };

  const emits = defineEmits<{ (e: 'save', value: ConfigFormItemProps) }>();

  defineExpose<FormItemDrawerInstance>({ open: onClickOpen });
</script>
