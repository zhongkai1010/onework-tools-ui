<template>
  <page-view class="container">
    <ConfigForm v-bind="confg" :model="values" />
  </page-view>
</template>

<script setup lang="ts">
  import { ConfigFormProps } from '/@/components/ConfigForm';

  const values = reactive({
    name1: '1',
    name2: '2',
  });
  const confg: ConfigFormProps = {
    labelPosition: 'left',
    config: {
      name: 'test',
      gutter: 20,
      fields: [
        {
          name: 'name1',
          props: {
            label: '表单1',
            prop: 'name1',
            required: false,
          },
          component: {
            component: 'el-input',
          },
        },
        {
          name: 'name2',
          span: 24,
          props: {
            label: '表单2',
            prop: 'name2',
            required: false,
          },
          component: {
            component: 'el-select',
            props: {
              style: {
                width: '100%',
              },
            },
            config: {
              remote: {
                url: '/api/test/getPageConfig',
                method: 'get',
                valueKey: 'value',
                labelKey: 'label',
              },
            },
          },
        },
        {
          name: 'name3',
          span: 24,
          props: {
            label: '表单2',
            prop: 'name3',
            required: true,
          },
          component: {
            component: 'el-checkbox-group',
            config: {
              remote: {
                url: '/api/test/getPageConfig',
                method: 'get',
                valueKey: 'value',
                labelKey: 'label',
              },
            },
          },
        },
      ],
    },
  };
</script>

<style scoped lang="scss">
  .container {
    margin: 20px;
    background-color: #fff;
  }
</style>
