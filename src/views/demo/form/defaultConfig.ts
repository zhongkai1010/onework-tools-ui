import { FormConfig } from '/@/components/DynamicForm';

export default {
  name: '',
  gutter: 20,
  labelPosition: 'top',
  labelWidth: '80px',
  fields: [
    {
      label: '表单18',
      name: 'name18',
      span: 24,
      defaultValue: '123456@163.com',
      component: 'input',
      required: true,
      rules: [
        {
          type: 'email',
          message: '请填写邮箱地址!',
        },
        {
          required: true,
          message: '请填写表单18值!',
        },
      ],
    },
    {
      label: '表单1',
      name: 'name1',
      span: 12,
      component: 'autodcomplete',
    },
    {
      label: '表单2',
      name: 'name2',
      span: 12,
      component: 'cascader',
      props: {
        options: [
          {
            label: '选项1',
            value: 'value1',
            children: [
              {
                label: '选项1-1',
                value: 'value1-1',
              },
              {
                label: '选项1-2',
                value: 'value1-2',
                children: [
                  {
                    label: '选项1-2-1',
                    value: 'value1-2-1',
                  },
                ],
              },
            ],
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
      label: '表单3',
      name: 'name3',
      span: 12,
      component: 'checkbox',
      required: true,
      rules: [
        {
          required: true,
          message: '该项为必填项!',
        },
      ],
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
      required: true,
      rules: [
        {
          required: true,
          message: '请填选择具体颜色!',
        },
      ],
    },
    {
      label: '表单5',
      name: 'name5',
      span: 12,
      component: 'date_picker',
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
      required: true,
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
