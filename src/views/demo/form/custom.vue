<template>
  <page-view class="container">
    <FormItem v-bind="confg" component="el-select" v-model="value" @clear="onClear" />
  </page-view>
</template>

<script setup lang="ts">
  import { FormItemRemoteProps } from '/@/components/FormItem';
  import FormItem from '/@/components/FormItem/src/index.vue';
  const value = ref();
  const confg = {
    placeholder: '请输入',
    clearable: true,
    multiple: true,
    config: {
      options: [
        { label: '选项1', value: 'value1' },
        { label: '选项2', value: 'value2' },
        { label: '选项3', value: 'value3' },
      ],
      remote: {
        url: '/api/test/getPageConfig',
        method: 'get',
        valueKey: 'value',
        labelKey: 'label',
      },
      test: '',
    },
  } as FormItemRemoteProps;
  const onClear = () => {
    console.log('object');
  };

  watch(value, () => {
    console.log('--value--', value);
  });
</script>

<style scoped lang="scss">
  .container {
    margin: 20px;
    background-color: #fff;
  }
</style>
