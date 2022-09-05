<template>
  <div class="config-container">
    <el-drawer :model-value="dialogShow" @closed="onClickClose" title="表单配置">
      <el-form :model="formValue" :label-width="180" label-position="left">
        <el-divider content-position="left">基本配置</el-divider>
        <el-form-item label="表单名称" prop="name">
          <el-input v-model="formValue.name" clearable />
        </el-form-item>
        <el-form-item label="提交地址" prop="url">
          <el-input v-model="formValue.url" clearable />
        </el-form-item>
        <el-divider content-position="left">表单配置</el-divider>
        <el-form-item label="标签长度">
          <el-input
            v-model="labelWidth"
            type="number"
            clearable
            @input="(value) => changeLabelWidth(value, labelWidthUnit)"
          >
            <template #append>
              <el-select
                v-model="labelWidthUnit"
                placeholder="单位"
                style="width: 80px"
                @change="(value) => changeLabelWidth(labelWidth, value)"
              >
                <el-option label="%" value="%" />
                <el-option label="px" value="px" />
              </el-select>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="标签位置" prop="props.labelPosition">
          <el-radio-group v-model="formValue.props.labelPosition">
            <el-radio label="left">left</el-radio>
            <el-radio label="right">right</el-radio>
            <el-radio label="top">top</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="标签的后缀" prop="props.labelSuffix">
          <el-input v-model="formValue.props.labelSuffix" clearable />
        </el-form-item>
        <el-form-item label="红色星号" prop="props.hideRequiredAsterisk">
          <el-switch v-model="formValue.props.hideRequiredAsterisk" />
        </el-form-item>
        <el-form-item label="星号位置" prop="props.requireAsteriskPosition">
          <el-radio-group v-model="formValue.props.requireAsteriskPosition">
            <el-radio label="left">left</el-radio>
            <el-radio label="right">right</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="错误信息" prop="props.showMessage">
          <el-switch v-model="formValue.props.showMessage" />
        </el-form-item>
        <el-form-item label="行内错误信息" prop="props.inlineMessage">
          <el-switch v-model="formValue.props.inlineMessage" />
        </el-form-item>
        <el-form-item label="反馈图标" prop="props.statusIcon">
          <el-switch v-model="formValue.props.statusIcon" />
        </el-form-item>
        <el-form-item label="立即触发验证" prop="props.validateOnRuleChange">
          <el-switch v-model="formValue.props.validateOnRuleChange" />
        </el-form-item>
        <el-form-item label="组件尺寸" prop="props.size">
          <el-radio-group v-model="formValue.props.size">
            <el-radio label="large">large</el-radio>
            <el-radio label="default">default</el-radio>
            <el-radio label="small">small</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="错误表单项" prop="props.scrollToError">
          <el-switch v-model="formValue.props.scrollToError" />
        </el-form-item>
        <el-divider content-position="left">布局配置</el-divider>
        <el-form-item label="栅格间隔" prop="layout.gutter">
          <el-slider v-model="formValue.layout.gutter" :min="4" :max="24" style="width: 90%" />
        </el-form-item>
        <el-form-item label="水平排列方式" prop="layout.justify">
          <el-radio-group v-model="formValue.layout.justify">
            <el-radio label="start">start</el-radio>
            <el-radio label="end">end</el-radio>
            <el-radio label="center">center</el-radio>
            <el-radio label="space-around">space-around</el-radio>
            <el-radio label="space-between">space-between</el-radio>
            <el-radio label="space-evenly">space-evenly</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="垂直排列方式" prop="layout.align">
          <el-radio-group v-model="formValue.layout.align">
            <el-radio label="top">top</el-radio>
            <el-radio label="middle">middle</el-radio>
            <el-radio label="bottom">bottom</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="footer">
          <el-button @click="dialogShow = false">关闭</el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
  import _ from 'lodash';
  import { DynamicFormDesignConfig } from '../types';

  const props = defineProps<{
    modelValue: DynamicFormDesignConfig;
  }>();
  const emits = defineEmits<{ (e: 'update-model', value: DynamicFormDesignConfig) }>();

  const labelWidthUnit = ref('px');
  const labelWidth = ref<string | number>(80);
  const dialogShow = ref(false);
  const formValue = reactive<DynamicFormDesignConfig>(props.modelValue);

  const onClickOpen = () => {
    dialogShow.value = true;
  };
  const onClickClose = () => {
    dialogShow.value = false;
  };

  const changeLabelWidth = (value, unit) => {
    labelWidth.value = value;
    labelWidthUnit.value = unit;
    switch (unit) {
      case '%':
        formValue.props.labelWidth = `${value}%`;
        break;
      default:
        formValue.props.labelWidth = `${value}px`;
        break;
    }
    emits('update-model', formValue);
  };

  defineExpose({ open: onClickOpen, config: formValue });
</script>

<style scoped lang="scss">
  .config-container {
    :deep(.el-drawer__header) {
      margin-bottom: 10px;
    }
    :deep(.el-form-item__label) {
      font-weight: 700;
    }
    .footer {
      text-align: left;
    }
  }
</style>
