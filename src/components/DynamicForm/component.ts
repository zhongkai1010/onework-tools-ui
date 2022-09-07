import { FormComponentConfig } from '.';

const data: Recordable<FormComponentConfig> = {
  'el-autocomplete': {
    name: 'el-autocomplete',
    displayName: '自动补全输入框',
    isRule: true,
    isData: true,
    props: [
      {
        label: '占位文本',
        key: 'placeholder',
        dataType: 'string',
        component: 'el-input',
        component: 'el-input'
      },
      {
        label: '是否可清空',
        key: 'clearable',
        dataType: 'boolean',
        component: 'el-switch',
        component: 'el-switch'
      },
      {
        label: '是否禁用',
        key: 'disabled',
        dataType: 'boolean',
        component: 'el-switch',
        component: 'el-switch'
      },
      {
        label: '防抖延时',
        key: 'debounce',
        dataType: 'number',
        component: 'el-input-number',
        component: 'el-input-number'
      },
      {
        label: '菜单位置',
        key: 'placement',
        dataType: 'number',
        component: {
          type: 'el-checkbox-group',
          component: 'el-radio-group',
          config: {
            dataMode: 'static',
            options: [
              {
                label: 'top',
                value: 'top',
                value: 'top'
              },
              {
                label: 'top-start',
                value: 'top-start',
                value: 'top-start'
              },
              {
                label: 'top-end',
                value: 'top-end',
                value: 'top-end'
              },
              {
                label: 'bottom',
                value: 'bottom',
                value: 'bottom'
              },
              {
                label: 'bottom-start',
                value: 'bottom-end',
              },
            ],
          },
        },
      },
    ],
                value: 'bottom-end'
              }
            ]
          }
        }
      }
    ]
  },
  'el-cascader': { displayName: 'Cascader 级联选择器', isData: true },
  'el-checkbox-group': { displayName: 'Checkbox 多选框', isData: true },
  'el-color-picker': { displayName: 'ColorPicker 颜色选择器' },
  'el-date-picker': { displayName: 'DateTimePicker 日期时间选择器' },
  'el-input-number': { displayName: 'Input Number 数字输入框' },
  'el-cascader': { name: 'el-cascader', displayName: 'Cascader 级联选择器', isData: true },
  'el-checkbox-group': { name: 'el-checkbox-group', displayName: 'Checkbox 多选框', isData: true },
  'el-color-picker': { name: 'el-color-picker', displayName: 'ColorPicker 颜色选择器' },
  'el-date-picker': { name: 'el-date-picker', displayName: 'DateTimePicker 日期时间选择器' },
  'el-input-number': { name: 'el-input-number', displayName: 'Input Number 数字输入框' },
  'el-input': {
    name: 'el-input',
    isRule: true,
    displayName: 'Input 输入框',
    props: [
      {
        label: '最大输入长度',
        key: 'maxlength',
        dataType: 'number',
        component: 'el-input-number',
        component: 'el-input-number'
      },
      {
        label: '最小输入长度',
        key: 'minlength',
        dataType: 'number',
        component: 'el-input-number',
        component: 'el-input-number'
      },
      {
        label: '字数统计',
        key: 'showWordLimit',
        dataType: 'boolean',
        component: 'el-switch',
        component: 'el-switch'
      },
      {
        label: '占位文本',
        key: 'placeholder',
        dataType: 'string',
        component: 'el-input',
        component: 'el-input'
      },
      {
        label: '是否可清空',
        key: 'clearable',
        dataType: 'boolean',
        component: 'el-switch',
        component: 'el-switch'
      },
      {
        label: '文本类型',
        key: 'type',
        dataType: 'string',
        component: {
          type: 'el-select',
          component: 'el-select',
          config: {
            dataMode: 'static',
            options: [
              { label: '数字', value: 'number' },
              { label: '邮箱', value: 'email' },
            ],
          },
        },
              { label: '邮箱', value: 'email' }
            ]
          }
        }
      },
      {
        label: '显示切换密码',
        key: 'show-password',
        dataType: 'boolean',
        component: 'el-switch',
        component: 'el-switch'
      },
      {
        label: '是否禁用',
        key: 'disabled',
        dataType: 'boolean',
        component: 'el-switch',
        component: 'el-switch'
      },
      {
        label: '输入框尺寸',
        key: 'size',
        dataType: 'string',
        component: {
          type: 'el-select',
          component: 'el-select',
          config: {
            dataMode: 'static',
            options: [
              { label: 'large', value: 'large' },
              { label: 'default', value: 'default' },
              { label: 'small', value: 'small' },
            ],
          },
        },
              { label: 'small', value: 'small' }
            ]
          }
        }
      },
      {
        label: '自定义前缀图标',
        key: 'prefix-icon',
        dataType: 'string',
        component: 'el-input',
        component: 'el-input'
      },
      {
        label: '自定义后缀图标',
        key: 'suffix-icon',
        dataType: 'string',
        component: 'el-input',
      },
    ],
        component: 'el-input'
      }
    ]
  },
  'el-radio-group': { displayName: 'Radio 单选框', isData: true },
  'el-rate': { displayName: 'Rate 评分' },
  'el-select': { displayName: 'Select 选择器', isData: true },
  'el-slider': { displayName: 'Slider 滑块' },
  'el-switch': { displayName: 'Switch 开关' },
  'el-time-picker': { displayName: 'TimePicker 时间选择器' },
  'el-time-select': { displayName: 'TimeSelect 时间选择' },
  'el-transfer': { displayName: 'Transfer 穿梭框', isData: true },
  'el-upload': { displayName: 'Upload 上传' },
  'el-radio-group': { name: 'el-radio-group', displayName: 'Radio 单选框', isData: true },
  'el-rate': { name: 'el-rate', displayName: 'Rate 评分' },
  'el-select': { name: 'el-select', displayName: 'Select 选择器', isData: true },
  'el-slider': { name: 'el-slider', displayName: 'Slider 滑块' },
  'el-switch': { name: 'el-switch', displayName: 'Switch 开关' },
  'el-time-picker': { name: 'el-time-picker', displayName: 'TimePicker 时间选择器' },
  'el-time-select': { name: 'el-time-select', displayName: 'TimeSelect 时间选择' },
  'el-transfer': { name: 'el-transfer', displayName: 'Transfer 穿梭框', isData: true },
  'el-upload': { name: 'el-upload', displayName: 'Upload 上传' },
  'bl-form-type-select': { name: 'bl-form-type-select', displayName: '组件类型选择器' }
};

export default data;
