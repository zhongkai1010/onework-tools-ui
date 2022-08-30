import _ from 'lodash';
import { DEFAULT_DRAGGABLE_ITEM_CONFIG, DraggableItemConfig, FormItemConfig } from '../types';
import { ConfigFormItemProps } from '/@/components/ConfigForm';

function initDefaultValues(config: FormItemConfig): FormItemConfig {
  _.defaultsDeep(config, DEFAULT_DRAGGABLE_ITEM_CONFIG);
  return config as FormItemConfig;
}

export default [
  {
    name: 'base',
    title: '基础组件',
    components: [
      initDefaultValues({
        name: '自动补全输入框',
        span: 6,
        props: {
          prop: 'autocomplete',
          label: '自动补全输入框',
          required: false,
        },
        component: {
          component: 'el-autocomplete',
          config: {
            remote: true,
            remoteUrl: '/api/test/getOptions',
          },
        },
      }),
      initDefaultValues({
        name: 'Cascader 级联选择器',
        span: 6,
        props: {
          prop: 'cascader',
          label: 'Cascader 级联选择器',
          required: false,
        },
        component: {
          component: 'el-cascader',
          config: {
            remote: true,
            remoteUrl: '/api/test/getCascadeData',
          },
        },
      }),
      initDefaultValues({
        name: 'Checkbox 多选框',
        span: 6,
        props: {
          prop: 'checkbox',
          label: 'Checkbox 多选框',
          required: false,
        },
        component: {
          component: 'el-checkbox-group',
          config: {
            remote: true,
            remoteUrl: '/api/test/getOptions',
          },
        },
      }),
      initDefaultValues({
        name: 'ColorPicker 颜色选择器',
        span: 6,
        props: {
          prop: 'color-picker',
          label: 'ColorPicker 颜色选择器',
          required: false,
        },
        component: {
          component: 'el-color-picker',
        },
      }),
      initDefaultValues({
        name: 'DateTimePicker 日期时间选择器',
        span: 6,
        props: {
          prop: 'date-picker',
          label: 'DateTimePicker 日期时间选择器',
          required: false,
        },
        component: {
          component: 'el-date-picker',
        },
      }),
      initDefaultValues({
        name: 'Input 输入框',
        span: 6,
        props: {
          prop: 'input',
          label: 'Input 输入框',
          required: false,
        },
        component: {
          component: 'el-input',
        },
      }),
      initDefaultValues({
        name: 'Input Number 数字输入框',
        span: 6,
        props: {
          prop: 'input-number',
          label: 'Input Number 数字输入框',
          required: false,
        },
        component: {
          component: 'el-input-number',
        },
      }),
      initDefaultValues({
        name: 'Radio 单选框',
        span: 6,
        props: {
          prop: 'radio',
          label: 'Radio 单选框',
          required: false,
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
      }),
      initDefaultValues({
        name: 'Rate 评分',
        span: 6,
        props: {
          prop: 'rate',
          label: 'Rate 评分',
          required: false,
        },
        component: {
          component: 'el-rate',
        },
      }),
      initDefaultValues({
        name: 'Select 选择器',
        span: 6,
        props: {
          prop: 'select',
          label: 'Select 选择器',
          required: false,
        },
        component: {
          component: 'el-select',
          config: {
            remote: true,
            remoteUrl: '/api/test/getOptions',
          },
        },
      }),
      initDefaultValues({
        name: 'Slider 滑块',
        span: 6,
        props: {
          prop: 'slider',
          label: 'Slider 滑块',
          required: false,
        },
        component: {
          component: 'el-slider',
        },
      }),
      initDefaultValues({
        name: 'Switch 开关',
        span: 6,
        props: {
          prop: 'switch',
          label: 'Switch 开关',
          required: false,
        },
        component: {
          component: 'el-switch',
        },
      }),
      initDefaultValues({
        name: 'TimePicker 时间选择器',
        span: 6,
        props: {
          prop: 'time-picker',
          label: 'TimePicker 时间选择器',
          required: false,
        },
        component: {
          component: 'el-time-picker',
        },
      }),
      initDefaultValues({
        name: 'TimeSelect 时间选择',
        span: 6,
        props: {
          prop: 'time-select',
          label: 'TimeSelect 时间选择',
          required: false,
        },
        component: {
          component: 'el-time-select',
        },
      }),
      initDefaultValues({
        name: 'Transfer 穿梭框',
        span: 6,
        props: {
          prop: 'transfer',
          label: 'Transfer 穿梭框',
          required: false,
        },
        component: {
          component: 'el-transfer',
          props: {
            titles: ['列表1', '列表2'],
            data: [
              {
                key: 'value1',
                label: '选项1',
              },
            ],
          },
        },
      }),
      initDefaultValues({
        name: 'Upload 上传',
        span: 6,
        props: {
          prop: 'upload',
          label: 'Upload 上传',
          required: false,
        },
        component: {
          component: 'el-upload',
        },
      }),
    ] as DraggableItemConfig[],
  },
  {
    name: 'dynamic',
    title: '动态数据组件',
    components: [] as ConfigFormItemProps[],
  },
  {
    name: 'business',

    title: '业务组件',
    components: [] as ConfigFormItemProps[],
  },
];
