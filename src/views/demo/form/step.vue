<template>
  <page-view class="page_wrapper">
    <el-card class="box-card" :title="`自定义表单`">
      <template #header>
        <div class="card-header">
          <span>自定义表单</span>
          <el-button type="primary" @click="show = true">配置代码</el-button>
          <el-button @click="onClickSubmitForm">验证表单</el-button>
          <el-button @click="onClickResetForm">重置表单</el-button>
        </div>
      </template>
      <dynamic-form v-bind="config" ref="dynamicFormRef" />
    </el-card>
    <el-drawer v-model="show" size="50%" title="配置代码">
      <codemirror
        v-model="code"
        placeholder="Code goes here..."
        :extensions="[json(), linter(jsonParseLinter())]"
        @ready="log('ready', $event)"
        @change="log('change', $event)"
        @focus="log('focus', $event)"
        @blur="log('blur', $event)"
      />
      <template #header>
        <div style="flex: auto">
          <el-button type="primary" @click="onClickGenerate">生成表单</el-button>
          <el-button @click="onClickResetCode">重置代码</el-button>
          <el-button @click="show = false">关闭</el-button>
        </div>
      </template>
    </el-drawer>
  </page-view>
</template>

<script setup lang="ts">
  import { json, jsonParseLinter } from '@codemirror/lang-json';
  import { linter } from '@codemirror/lint';
  import { MessageType, useMessage } from '/@/hooks/web/useMessage';
  import defaultConfig from './defaultConfig';
  import { FormInstance } from 'element-plus';

  const { message, alert } = useMessage();
  const log = console.log;
  const code = ref(JSON.stringify(defaultConfig, null, '\t'));
  const config = ref(defaultConfig);
  const show = ref(false);

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
        alert(JSON.stringify(dynamicFormRef.value.formValues, null, '\t\r\n'), {
          title: '表单值',
          type: 'info',
          dangerouslyUseHTMLString: true,
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

    .box-card {
      min-height: $main-no-margin-height;
      .card-header {
        display: flex;
        align-items: center;
        span {
          margin-right: auto;
        }
      }
    }

    &:deep(.el-drawer__header) {
      margin-bottom: 20px;
    }

    &:deep(.el-drawer__body) {
      @include scrollBar;
    }
  }
</style>
