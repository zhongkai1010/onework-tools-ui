<template>
  <page-view class="container" :gutter="0">
    <el-card class="box-card" :title="`自定义表单`">
      <template #header>
        <div class="card-header">
          <span>自定义表单</span>
          <el-button type="primary" @click="show = true">配置代码</el-button>
          <el-button @click="onClickSubmitForm">验证表单</el-button>
          <el-button @click="configFormRef.formRef.resetFields()">重置表单</el-button>
        </div>
      </template>
      <DynamicForm v-bind="formConfig" ref="configFormRef" :model="formValue" />
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
  import { FormInstance } from 'element-plus';
  import { json, jsonParseLinter } from '@codemirror/lang-json';
  import { linter } from '@codemirror/lint';
  import { log } from '/@/utils/log';
  import { useMessage } from '/@/hooks/web/useMessage';
  import formConfig from './data';

  const { message, alert } = useMessage();

  const code = ref(JSON.stringify(formConfig, null, '\t'));
  const config = ref(formConfig);
  const show = ref(false);
  const formValue = reactive({});
  const configFormRef = ref<{ formRef: FormInstance }>();

  const onClickSubmitForm = async () => {
    console.log(configFormRef.value);
    await configFormRef.value.formRef.validate((valid: boolean, fields) => {
      if (valid) {
        alert(JSON.stringify(formValue, null, '\t\r\n'), {
          title: '表单值',
          type: 'info',
          dangerouslyUseHTMLString: true
        });
      } else {
        console.log(fields);
      }
    });
  };

  const onClickGenerate = () => {
    try {
      config.value = JSON.parse(code.value);
      console.log(config.value);
    } catch (error) {
      message({ message: error, type: 'error' });
    }
  };

  const onClickResetCode = () => {
    config.value = formConfig;
    code.value = JSON.stringify(formConfig, null, '\t');
  };
</script>

<style lang="scss" scoped>
  .container {
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
