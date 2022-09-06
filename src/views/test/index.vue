<template>
  <page-view class="container">
    <div class="form-container">
      <FormItemConfig.Form v-model="formValue" />
    </div>
    <div class="button">
      <el-button type="primary" @click="onPrintLog">Primary</el-button>
      <el-button type="success">Success</el-button>
    </div>
  </page-view>
</template>

<script setup lang="ts">
  import { DynamicFormField } from '/@/components/DynamicForm';
  import * as FormItemConfig from '/@/components/DynamicForm/src/FormItemConfig';
  const formValue = reactive<DynamicFormField>({
    name: 'test',
    span: 6,
    defaultValue: undefined,
    showLabel: true,
    props: {
      prop: 'name',
      label: '标签',
      verifies: [],
    },
    component: {
      component: 'el-input',
      props: {},
      config: {
        dataMode: 'all',
        options: [],
        remote: {
          url: '',
          method: 'get',
          params: {},
          labelKey: 'label',
          valueKey: 'value',
          childerKey: 'childer',
          searchKey: 'search',
        },
      },
    },
    group: '基本信息',
    step: 1,
  });

  const onPrintLog = () => {
    console.log(formValue);
  };
</script>

<style lang="scss" scoped>
  .container {
    .form-container {
      width: 600px;
      margin: auto;
    }

    .button {
      text-align: right;
    }
  }
</style>
