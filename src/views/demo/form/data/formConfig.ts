import _ from 'lodash';
import {
  DefaultDraggableItemConfig,
  DEFAULT_DRAGGABLE_ITEM_CONFIG,
  DraggableItemConfig,
} from '../types';

function initDefaultValues(config: DefaultDraggableItemConfig): DraggableItemConfig {
  _.defaultsDeep(config, DEFAULT_DRAGGABLE_ITEM_CONFIG);
  return config as DraggableItemConfig;
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
            dataMode: 'dynamic',
            options: [],
            remote: {
              url: '/api/test/getOptions',
              method: 'get',
            },
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
            dataMode: 'dynamic',
            remote: {
              url: '/api/test/getCascadeData',
              method: 'get',
            },
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
            dataMode: 'dynamic',
            remote: {
              url: '/api/test/getOptions',
              method: 'get',
            },
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
        design: {
          isRule: true,
          items: [
            {
              label: '最大输入长度',
              component: {
                component: 'el-input-number',
              },
              prop: 'maxlength',
            },
            {
              label: '最小输入长度',
              component: {
                component: 'el-input-number',
              },
              prop: 'showWordLimit',
            },
            {
              label: '占位文本',
              component: {
                component: 'el-input',
              },
              prop: 'placeholder',
            },
            {
              label: '是否可清空',
              component: {
                component: 'el-switch',
              },
              prop: 'clearable',
            },
            {
              label: '是否可清空',
              component: {
                component: 'el-select',
                config: {
                  dataMode: 'static',
                  options: [
                    { label: '数字', value: 'number' },
                    { label: '邮箱', value: 'email' },
                  ],
                },
              },
              prop: 'clearable',
            },
          ],
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
            dataMode: 'static',
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
            dataMode: 'dynamic',
            remote: {
              url: '/api/test/getOptions',
              method: 'get',
            },
          },
        },
        design: {},
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
    ] as DefaultDraggableItemConfig[],
  },
  {
    name: 'dynamic',
    title: '动态数据组件',
    components: [] as DefaultDraggableItemConfig[],
  },
  {
    name: 'business',

    title: '业务组件',
    components: [] as DefaultDraggableItemConfig[],
  },
];
