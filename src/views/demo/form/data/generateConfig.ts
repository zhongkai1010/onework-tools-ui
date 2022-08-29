import { ConfigFormProps } from '/@/components/ConfigForm';

export default {
  labelPosition: 'top',
  labelWidth: '80px',
  config: {
    name: 'defalut',
    gutter: 20,
    fields: [
      {
        name: 'input',
        span: 24,
        props: {
          prop: 'input',
          label: '文本框',
          required: true,
        },
        component: {
          component: 'el-input',
        },
      },
      {
        name: 'autocomplete',
        span: 24,
        props: {
          prop: 'autocomplete',
          label: '自动补全输入框',
          required: true,
        },
        component: {
          component: 'el-autocomplete',
          config: {
            options: [
              {
                label: '选项1',
                value: 'value1',
              },
              {
                label: '选项2',
                value: 'value2',
              },
              {
                label: '选项3',
                value: 'value3',
              },
              {
                label: '选项4',
                value: 'value4',
              },
            ],
          },
        },
      },
      {
        name: 'cascader',
        span: 24,
        props: {
          prop: 'cascader',
          label: '级联选择器',
          required: true,
        },
        component: {
          component: 'el-cascader',
          config: {
            options: [
              {
                label: '选项1',
                value: 'value1',
              },
              {
                label: '选项2',
                value: 'value2',
              },
              {
                label: '选项3',
                value: 'value3',
              },
              {
                label: '选项4',
                value: 'value4',
              },
            ],
          },
        },
      },
      {
        name: 'checkbox',
        span: 24,
        props: {
          prop: 'checkbox',
          label: '多选框',
          required: true,
        },
        component: {
          component: 'el-checkbox-group',
          config: {
            options: [
              {
                label: '选项1',
                value: 'value1',
              },
              {
                label: '选项2',
                value: 'value2',
              },
              {
                label: '选项3',
                value: 'value3',
              },
              {
                label: '选项4',
                value: 'value4',
              },
            ],
          },
        },
      },
      {
        name: 'color-picker',
        span: 24,
        props: {
          prop: 'color-picker',
          label: '颜色选择器',
          required: true,
        },
        component: {
          component: 'el-color-picker',
          config: {
            options: [
              {
                label: '选项1',
                value: 'value1',
              },
              {
                label: '选项2',
                value: 'value2',
              },
              {
                label: '选项3',
                value: 'value3',
              },
              {
                label: '选项4',
                value: 'value4',
              },
            ],
          },
        },
      },
      {
        name: 'date-picker',
        span: 24,
        props: {
          prop: 'date-picker',
          label: '日期选择器',
          required: true,
        },
        component: {
          component: 'el-date-picker',
        },
      },
      {
        name: 'input-number',
        span: 24,
        props: {
          prop: 'input-number',
          label: '数字输入框',
          required: true,
        },
        component: {
          component: 'el-input-number',
        },
      },
      {
        name: 'radio',
        span: 24,
        props: {
          prop: 'radio',
          label: '单选框',
          required: true,
        },
        component: {
          component: 'el-radio-group',
          config: {
            options: [
              {
                label: '选项1',
                value: 'value1',
              },
              {
                label: '选项2',
                value: 'value2',
              },
              {
                label: '选项3',
                value: 'value3',
              },
              {
                label: '选项4',
                value: 'value4',
              },
            ],
          },
        },
      },
      {
        name: 'rate',
        span: 24,
        props: {
          prop: 'rate',
          label: '评分',
          required: true,
        },
        component: {
          component: 'el-rate',
        },
      },
      {
        name: 'select',
        span: 24,
        props: {
          prop: 'select',
          label: '选择器',
          required: true,
        },
        component: {
          component: 'el-select',
          config: {
            options: [
              {
                label: '选项1',
                value: 'value1',
              },
              {
                label: '选项2',
                value: 'value2',
              },
              {
                label: '选项3',
                value: 'value3',
              },
              {
                label: '选项4',
                value: 'value4',
              },
            ],
          },
        },
      },
      {
        name: 'slider',
        span: 24,
        props: {
          prop: 'slider',
          label: '滑块',
          required: true,
        },
        component: {
          component: 'el-slider',
        },
      },
      {
        name: 'switch',
        span: 24,
        props: {
          prop: 'switch',
          label: '开关',
          required: true,
        },
        component: {
          component: 'el-switch',
        },
      },

      {
        name: 'time-picker',
        span: 24,
        props: {
          prop: 'time-picker',
          label: '时间选择器',
          required: true,
        },
        component: {
          component: 'el-time-picker',
        },
      },
      {
        name: 'time-select',
        span: 24,
        props: {
          prop: 'time-select',
          label: '时间选择',
          required: true,
        },
        component: {
          component: 'el-time-select',
        },
      },
      {
        name: 'transfer',
        span: 24,
        props: {
          prop: 'transfer',
          label: '穿梭框',
          required: true,
        },
        component: {
          component: 'el-transfer',
        },
      },
      {
        name: 'upload',
        span: 24,
        props: {
          prop: 'upload',
          label: '上传',
          required: true,
        },
        component: {
          component: 'el-upload',
        },
      },
    ],
  },
} as ConfigFormProps;
