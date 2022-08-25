import { DraggableItemConfig } from '../types';
import { ConfigFormItemProps } from '/@/components/ConfigForm';

export default [
  {
    name: 'base',
    title: '基础组件',
    components: [
      { name: 'input', label: 'Input 输入框', component: 'input' },
      { name: 'input_number', label: 'Input Number 数字输入框', component: 'input_number' },
      {
        name: 'radio',
        label: 'Radio 单选框',
        component: 'radio',
        props: {
          options: [
            { label: 'A', value: 'a' },
            { label: 'B', value: 'b' },
          ],
        },
      },
      {
        name: 'checkbox',
        label: 'Checkbox 多选框',
        component: 'checkbox',
        props: {
          options: [
            { label: 'A', value: 'a' },
            { label: 'B', value: 'b' },
          ],
        },
      },
      {
        name: 'select',
        label: 'Select 选择器',
        component: 'select',
        props: {
          options: [
            { label: 'A', value: 'a' },
            { label: 'B', value: 'b' },
          ],
        },
      },
      {
        name: 'slider',
        label: 'Slider 滑块',
        component: 'slider',
        props: {
          style: {
            width: '50%',
          },
        },
      },
      { name: 'date_picker', label: 'DatePicker 日期选择器', component: 'date_picker' },
      { name: 'time_picker', label: 'TimePicker 时间选择器', component: 'time_picker' },
      { name: 'time_select', label: 'TimeSelect 时间选择', component: 'time_select' },
      { name: 'switch', label: 'Switch 开关', component: 'switch' },
      {
        name: 'autodcomplete',
        label: '自动补全输入框',
        component: 'autodcomplete',
        props: {
          options: [
            { label: 'A', value: 'a' },
            { label: 'B', value: 'b' },
          ],
        },
      },
      {
        name: 'cascader',
        label: 'Cascader 级联选择器',
        component: 'cascader',
        props: {
          options: [
            {
              label: 'A',
              value: 'a',
              children: [
                { label: 'A1', value: 'a1' },
                { label: 'A2', value: 'a2' },
              ],
            },
            { label: 'B', value: 'b' },
          ],
        },
      },

      { name: 'color_picker', label: 'ColorPicker 颜色选择器', component: 'color_picker' },

      {
        name: 'date_time_picker',
        label: 'DateTimePicker 日期时间选择器',
        component: 'date_time_picker',
      },

      { name: 'rate', label: 'Rate 评分', component: 'rate' },

      { name: 'transfer', label: 'Transfer 穿梭框', component: 'transfer' },
      { name: 'upload', label: 'Upload 上传', component: 'upload' },
    ] as DraggableItemConfig[],
  },
  {
    name: 'dynamic',
    title: '动态数据组件',
    components: [
      { name: 'asyn_autodcomplete', label: '动态自动补全输入框', component: 'asyn_autodcomplete' },
      { name: 'asyn_cascader', label: '动态级联选择器', component: 'asyn_cascader' },
      { name: 'asyn_checkbox', label: '动态多选框', component: 'asyn_checkbox' },
      { name: 'asyn_radio', label: '动态单选框', component: 'asyn_radio' },
      { name: 'asyn_select', label: '动态下拉选项器', component: 'asyn_select' },
      { name: 'asyn_table', label: '动态数据表格器', component: 'asyn_table' },
      { name: 'asyn_treeSelect', label: '动态数据树形器', component: 'asyn_treeSelect' },
    ] as ConfigFormItemProps[],
  },
  {
    name: 'business',

    title: '业务组件',
    components: [] as ConfigFormItemProps[],
  },
];
