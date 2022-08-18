<template>
  <page-view class="page_wrapper">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card" :title="`自定义表单`">
          <template #header>
            <div class="card-header">
              <span>自定义表单</span>
              <el-button type="primary" @click="onClickSubmitForm">提交</el-button>
              <el-button @click="onClickResetForm">重置</el-button>
            </div>
          </template>
          <dynamic-form v-bind="config" ref="dynamicFormRef" />
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>配置代码</span>
              <el-button type="primary" @click="onClickGenerate">生成表单</el-button>
              <el-button @click="onClickResetCode">重置</el-button>
            </div>
          </template>
          <codemirror
            v-model="code"
            placeholder="Code goes here..."
            :extensions="[json(), linter(jsonParseLinter())]"
            @ready="log('ready', $event)"
            @change="log('change', $event)"
            @focus="log('focus', $event)"
            @blur="log('blur', $event)"
          />
        </el-card>
      </el-col>
    </el-row>
  </page-view>
</template>

<script setup lang="ts">
  import { json, jsonParseLinter } from '@codemirror/lang-json';
  import { linter } from '@codemirror/lint';
  import { MessageType, useMessage } from '/@/hooks/web/useMessage';
  import defaultConfig from './defaultConfig';
  import { FormInstance } from 'element-plus';

  const { message, confirm } = useMessage();
  const log = console.log;
  const code = ref(JSON.stringify(defaultConfig, null, '\t'));
  const config = ref(defaultConfig);
  const dynamicFormRef = ref<{
    formRef: FormInstance;
    formValues: Record<string, any>;
  }>();

  const onClickSubmitForm = async () => {
    console.log('dynamicFormRef', dynamicFormRef.value.formRef);
    const formEl = dynamicFormRef.value.formRef;
    if (!formEl) return;
    await formEl.validate((valid: boolean, fields) => {
      if (valid) {
        confirm(JSON.stringify(dynamicFormRef.value.formValues), {
          title: '表单值',
          type: 'info',
        });
      } else {
        console.log(fields);
      }
    });
  };

  const onClickResetForm = () => {
    const formEl = dynamicFormRef.value.formRef;
    console.log('onClickResetForm', formEl);
    formEl.resetFields();
  };

  const onClickGenerate = () => {
    try {
      config.value = JSON.parse(code.value);
      console.log(config.value);
    } catch (error) {
      message({ message: error, type: MessageType.Error });
    }
  };

  const onClickResetCode = () => {
    config.value = defaultConfig;
    code.value = JSON.stringify(defaultConfig, null, '\t');
  };
</script>

<style lang="scss" scoped>
  .page_wrapper {
    background-color: transparent !important;
    padding: 0px !important;

    .card-header {
      display: flex;
      align-items: center;
      span {
        margin-right: auto;
      }
    }
    .box-card {
      min-height: $main-no-margin-height;
    }
  }
</style>
