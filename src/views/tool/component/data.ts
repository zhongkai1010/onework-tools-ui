import { Component } from './types';

const components: Component[] = [
  {
    name: 'el-autocomplete',
    displayName: '自动补全输入框',
    props: [
      { propertyName: 'placeholder', description: '占位文本', dataType: 'string' },
      { propertyName: 'clearable', description: '是否可清空', dataType: 'boolean' },
      { propertyName: 'disabled', description: '是否禁用', dataType: 'boolean' },
      {
        propertyName: 'value-key',
        description: '输入建议对象中用于显示的键名',
        dataType: 'string'
      },
      { propertyName: 'model-value', description: '选中项绑定值', dataType: 'string' },
      { propertyName: 'debounce', description: '获取输入建议的防抖延时', dataType: 'number' },
      { propertyName: 'placement', description: '菜单弹出位置', dataType: 'string' },
      {
        propertyName: 'fetch-suggestions',
        description:
          '获取输入建议的方法， 仅当你的输入建议数据 resolve 时，通过调用 callback(data:[])  来返回它',
        dataType: 'function'
      },
      { propertyName: 'popper-class', description: '下拉列表的类名', dataType: 'string' },
      {
        propertyName: 'trigger-on-focus',
        description: '是否在输入框 focus 时显示建议列表',
        dataType: 'boolean'
      },
      { propertyName: 'name', description: '等价于原生 input name 属性', dataType: 'string' },
      {
        propertyName: 'select-when-unmatched',
        description: '在输入没有任何匹配建议的情况下，按下回车是否触发 select 事件',
        dataType: 'boolean'
      },
      { propertyName: 'label', description: '标签文本', dataType: 'string' },
      {
        propertyName: 'hide-loading',
        description: '是否隐藏远程加载时的加载图标',
        dataType: 'boolean'
      },
      {
        propertyName: 'popper-append-to-body',
        description:
          '是否将下拉列表插入至 body 元素。 在下拉列表的定位出现问题时，可将该属性设置为 false',
        dataType: 'boolean'
      },
      {
        propertyName: 'teleported',
        description: '是否将下拉列表插入至 body 元素',
        dataType: 'boolean'
      },
      {
        propertyName: 'highlight-first-item',
        description: '是否默认突出显示远程搜索建议中的第一项',
        dataType: 'boolean'
      },
      {
        propertyName: 'fit-input-width',
        description: '下拉框是否与输入框同宽',
        dataType: 'boolean'
      }
    ]
  },
  {
    name: 'el-cascader',
    displayName: 'Cascader 级联选择器',
    props: [
      { propertyName: 'options', description: '占位文本', dataType: 'string' },
      { propertyName: 'props', description: '占位文本', dataType: 'string' },
      { propertyName: 'size', description: '占位文本', dataType: 'string' },
      { propertyName: 'placeholder', description: '占位文本', dataType: 'string' },
      { propertyName: 'disabled', description: '占位文本', dataType: 'string' },
      { propertyName: 'clearable', description: '占位文本', dataType: 'string' },
      { propertyName: 'show-all-levels', description: '占位文本', dataType: 'string' },
      { propertyName: 'collapse-tags', description: '占位文本', dataType: 'string' },
      { propertyName: 'collapse-tags-tooltip', description: '占位文本', dataType: 'string' },
      { propertyName: 'separator', description: '占位文本', dataType: 'string' },
      { propertyName: 'filterable', description: '占位文本', dataType: 'string' },
      { propertyName: 'filter-method', description: '占位文本', dataType: 'string' },
      { propertyName: 'debounce', description: '占位文本', dataType: 'string' },
      { propertyName: 'before-filter', description: '占位文本', dataType: 'string' },
      { propertyName: 'popper-class', description: '占位文本', dataType: 'string' },
      { propertyName: 'teleported', description: '占位文本', dataType: 'string' },
      { propertyName: 'tag-type', description: '占位文本', dataType: 'string' },
      { propertyName: 'tag-type', description: '占位文本', dataType: 'string' }
    ]
  },
  {
    name: 'el-checkbox-group',
    displayName: 'Checkbox 多选框',
    props: []
  },
  {
    name: 'el-color-picker',
    displayName: 'ColorPicker 颜色选择器',
    props: []
  },
  {
    name: 'el-date-picker',
    displayName: 'DateTimePicker 日期时间选择器',
    props: []
  },
  {
    name: 'el-input-number',
    displayName: 'Input Number 数字输入框',
    props: []
  },
  {
    name: 'el-input',
    displayName: 'Input 输入框',
    props: []
  },
  {
    name: 'el-radio-group',
    displayName: 'Radio 单选框',
    props: []
  },
  {
    name: 'el-rate',
    displayName: 'Rate 评分',
    props: []
  },
  {
    name: 'el-select',
    displayName: 'Select 选择器',
    props: []
  },
  {
    name: 'el-slider',
    displayName: 'Slider 滑块',
    props: []
  },
  {
    name: 'el-switch',
    displayName: 'Switch 开关',
    props: []
  },
  {
    name: 'el-time-picker',
    displayName: 'TimePicker 时间选择器',
    props: []
  },
  {
    name: 'el-time-select',
    displayName: 'TimeSelect 时间选择',
    props: []
  },
  {
    name: 'el-transfer',
    displayName: 'Transfer 穿梭框',
    props: []
  },
  {
    name: 'el-upload',
    displayName: 'Upload 上传',
    props: [
      { propertyName: 'action', description: '请求 URL', dataType: 'string' },
      { propertyName: 'headers', description: '请求 URL', dataType: 'string' },
      { propertyName: 'method', description: '请求 URL', dataType: 'string' },
      { propertyName: 'multiple', description: '请求 URL', dataType: 'string' },
      { propertyName: 'data', description: '请求 URL', dataType: 'string' },
      { propertyName: 'name', description: '请求 URL', dataType: 'string' },
      { propertyName: 'with-credentials', description: '请求 URL', dataType: 'string' },
      { propertyName: 'drag', description: '请求 URL', dataType: 'string' },
      { propertyName: 'accept', description: '请求 URL', dataType: 'string' },
      { propertyName: 'on-preview', description: '请求 URL', dataType: 'string' },
      { propertyName: 'on-remove', description: '请求 URL', dataType: 'string' },
      { propertyName: 'on-success', description: '请求 URL', dataType: 'string' },
      { propertyName: 'on-progress', description: '请求 URL', dataType: 'string' },
      { propertyName: 'on-change', description: '请求 URL', dataType: 'string' },
      { propertyName: 'on-exceed', description: '请求 URL', dataType: 'string' },
      { propertyName: 'before-upload', description: '请求 URL', dataType: 'string' },
      { propertyName: 'before-remove', description: '请求 URL', dataType: 'string' },
      { propertyName: 'file-list', description: '请求 URL', dataType: 'string' },
      { propertyName: 'list-type', description: '请求 URL', dataType: 'string' },
      { propertyName: 'auto-upload', description: '请求 URL', dataType: 'string' },
      { propertyName: 'http-request', description: '请求 URL', dataType: 'string' },
      { propertyName: 'disabled', description: '请求 URL', dataType: 'string' },
      { propertyName: 'limit', description: '请求 URL', dataType: 'string' }
    ]
  }
];

export default components;
