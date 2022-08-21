import { FormConfig } from '/@/components/ConfigForm';

export default {
  name: '',
  gutter: 20,
  labelPosition: 'top',
  labelWidth: '80px',
  fields: [
    {
      label: '表单名称',
      name: 'name',
      span: 24,
      defaultValue: '',
      component: 'input',
      required: true,
    },
    {
      label: '栅栏间隔',
      name: 'gutter',
      span: 12,
      component: 'slider',
      defaultValue: 20,
      props: {
        min: 1,
        max: 24,
      },
    },
    {
      label: '标签对其方式',
      name: 'labelPosition',
      span: 12,
      component: 'radio',
      defaultValue: 'top',
      props: {
        options: [
          {
            label: '顶部',
            value: 'top',
          },
          {
            label: '左侧',
            value: 'left',
          },
          {
            label: '右侧',
            value: 'right',
          },
        ],
      },
    },
    {
      label: '表单3',
      name: 'name3',
      span: 12,
      component: 'checkbox',

      props: {
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
    {
      label: '表单4',
      name: 'name4',
      span: 12,
      component: 'color_picker',
    },
    {
      label: '表单5',
      name: 'name5',
      span: 12,
      component: 'date_picker',
      defaultValue: '2022-02-01',
    },
    {
      label: '表单6',
      name: 'name6',
      span: 12,
      component: 'date_time_picker',
    },
    {
      label: '表单7',
      name: 'name7',
      span: 12,
      component: 'input_number',
    },
    {
      label: '表单8',
      name: 'name8',
      span: 12,
      component: 'radio',

      props: {
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
    {
      label: '表单9',
      name: 'name9',
      span: 12,
      component: 'rate',
    },
    {
      label: '表单10',
      name: 'name10',
      span: 12,
      component: 'select',
      props: {
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
    {
      label: '表单12',
      name: 'name12',
      span: 12,
      component: 'slider',
    },
    {
      label: '表单13',
      name: 'name13',
      span: 12,
      component: 'switch',
    },
    {
      label: '表单14',
      name: 'name14',
      span: 12,
      component: 'time_picker',
    },
    {
      label: '表单15',
      name: 'name15',
      span: 12,
      component: 'time_select',
    },
    {
      label: '表单16',
      name: 'name16',
      span: 24,
      component: 'transfer',
    },
    {
      label: '表单17',
      name: 'name17',
      span: 24,
      component: 'upload',
    },
  ],
} as FormConfig;
