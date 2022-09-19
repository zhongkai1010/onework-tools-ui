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
      {
        propertyName: 'props',
        description: '可选项数据源，键名可通过 Props 属性配置',
        dataType: 'string'
      },
      { propertyName: 'size', description: '尺寸', dataType: 'string' },
      { propertyName: 'placeholder', description: '输入框占位文本', dataType: 'string' },
      { propertyName: 'disabled', description: '是否禁用', dataType: 'string' },
      { propertyName: 'clearable', description: '是否支持清空选项', dataType: 'string' },
      {
        propertyName: 'show-all-levels',
        description: '输入框中是否显示选中值的完整路径',
        dataType: 'string'
      },
      { propertyName: 'collapse-tags', description: '多选模式下是否折叠Tag', dataType: 'string' },
      {
        propertyName: 'collapse-tags-tooltip',
        description:
          '当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。 要使用此属性，collapse-tags属性必须设定为 true',
        dataType: 'string'
      },
      { propertyName: 'separator', description: '用于分隔选项的字符', dataType: 'string' },
      { propertyName: 'filterable', description: '该选项是否可以被搜索', dataType: 'string' },
      {
        propertyName: 'filter-method',
        description:
          '自定义搜索逻辑，第一个参数是node，第二个参数是keyword，返回的布尔值表示是否保留该选项',
        dataType: 'string'
      },
      {
        propertyName: 'debounce',
        description: '搜索关键词正在输入时的去抖延迟，单位为毫秒',
        dataType: 'string'
      },
      {
        propertyName: 'before-filter',
        description:
          '过滤函数调用前欲被调用的钩子函数，该函数接受一个参数。 如果该函数的返回值是 false 或者是一个被拒绝的 Promise，那么接下来的过滤逻辑便不会执行。',
        dataType: 'string'
      },
      { propertyName: 'popper-class', description: '弹出内容的自定义类名', dataType: 'string' },
      { propertyName: 'teleported', description: '弹层是否使用 teleport', dataType: 'string' },
      { propertyName: 'tag-type', description: '标签类型', dataType: 'string' },
      { propertyName: 'tag-type', description: '输入时是否触发表单的校验', dataType: 'string' }
    ]
  },
  {
    name: 'el-checkbox',
    displayName: 'Checkbox 多选框',
    props: [
      {
        propertyName: 'label',
        description: '选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）',
        dataType: 'string'
      },
      { propertyName: 'true-label', description: '选中时的值', dataType: 'string' },
      { propertyName: 'false-label', description: '没有选中时的值', dataType: 'string' },
      { propertyName: 'disabled', description: '是否禁用', dataType: 'string' },
      { propertyName: 'border', description: '是否显示边框', dataType: 'string' },
      { propertyName: 'size', description: 'Checkbox 的尺寸', dataType: 'string' },
      { propertyName: 'name', description: '原生 name 属性', dataType: 'string' },
      { propertyName: 'checked', description: '当前是否勾选', dataType: 'string' },
      {
        propertyName: 'indeterminate',
        description: '设置 indeterminate 状态，只负责样式控制',
        dataType: 'string'
      },
      {
        propertyName: 'validate-event',
        description: '输入时是否触发表单的校验',
        dataType: 'string'
      }
    ]
  },
  {
    name: 'el-checkbox-group',
    displayName: 'Checkbox 多选框',
    props: [
      { propertyName: 'size', description: '多选框组尺寸', dataType: 'string' },
      { propertyName: 'disabled', description: '是否禁用', dataType: 'string' },
      { propertyName: 'min', description: '可被勾选的 checkbox 的最小数量', dataType: 'string' },
      { propertyName: 'max', description: '可被勾选的 checkbox 的最大数量', dataType: 'string' },
      { propertyName: 'label', description: '为屏幕阅读器准备的标签', dataType: 'string' },
      {
        propertyName: 'text-color',
        description: '当按钮为活跃状态时的字体颜色',
        dataType: 'string'
      },
      {
        propertyName: 'fill',
        description: '当按钮为活跃状态时的边框和背景颜色',
        dataType: 'string'
      },
      {
        propertyName: 'validate-event',
        description: '输入时是否触发表单的校验',
        dataType: 'string'
      }
    ]
  },
  {
    name: 'el-color-picker',
    displayName: 'ColorPicker 颜色选择器',
    props: [
      { propertyName: 'disabled', description: '是否禁用', dataType: 'string' },
      { propertyName: 'size', description: '尺寸', dataType: 'string' },
      { propertyName: 'show-alpha', description: '是否支持透明度选择', dataType: 'string' },
      {
        propertyName: 'color-format',
        description: '写入 v-model 的颜色的格式',
        dataType: 'string'
      },
      { propertyName: 'popper-class', description: 'ColorPicker 下拉框的类名', dataType: 'string' },
      { propertyName: 'predefine', description: '预定义颜色', dataType: 'string' },
      {
        propertyName: 'validate-event',
        description: '输入时是否触发表单的校验',
        dataType: 'string'
      }
    ]
  },
  {
    name: 'el-date-picker',
    displayName: 'DatePicker 日期选择器',
    props: [
      { propertyName: 'readonly', description: '只读', dataType: 'string' },
      { propertyName: 'disabled', description: '禁用', dataType: 'string' },
      { propertyName: 'size', description: '输入框尺寸', dataType: 'string' },
      { propertyName: 'editable', description: '文本框可输入', dataType: 'string' },
      { propertyName: 'clearable', description: '是否显示清除按钮', dataType: 'string' },
      { propertyName: 'placeholder', description: '非范围选择时的占位内容', dataType: 'string' },
      {
        propertyName: 'start-placeholder',
        description: '范围选择时开始日期的占位内容',
        dataType: 'string'
      },
      {
        propertyName: 'end-placeholder',
        description: '范围选择时结束日期的占位内容',
        dataType: 'string'
      },
      { propertyName: 'type', description: '显示类型', dataType: 'string' },
      { propertyName: 'format', description: '弹出内容的自定义类名', dataType: 'string' },
      { propertyName: 'popper-class', description: 'DatePicker 下拉框的类名', dataType: 'string' },
      { propertyName: 'range-separator', description: '选择范围时的分隔符', dataType: 'string' },
      { propertyName: 'default-value', description: '选择范围时的分隔符', dataType: 'string' },
      {
        propertyName: 'default-time',
        description: '范围选择时选中日期所使用的当日内具体时刻',
        dataType: 'string'
      },
      {
        propertyName: 'value-format',
        description: '可选，绑定值的格式。 不指定则绑定值为 Date 对象',
        dataType: 'string'
      },
      { propertyName: 'id', description: '等价于原生 id 属性', dataType: 'string' },
      { propertyName: 'name', description: '等价于原生 name 属性', dataType: 'string' },
      {
        propertyName: 'unlink-panels',
        description: '在范围选择器里取消两个日期面板之间的联动',
        dataType: 'string'
      },
      { propertyName: 'prefix-icon', description: '自定义前缀图标', dataType: 'string' },
      { propertyName: 'clear-icon', description: '自定义清除图标', dataType: 'string' },
      {
        propertyName: 'validate-event',
        description: '输入时是否触发表单的校验',
        dataType: 'string'
      },
      {
        propertyName: 'disabled-date',
        description:
          '一个用来判断该日期是否被禁用的函数，接受一个 Date 对象作为参数。 应该返回一个 Boolean 值。',
        dataType: 'string'
      },
      {
        propertyName: 'shortcuts',
        description: '设置快捷选项，需要传入数组对象',
        dataType: 'string'
      },
      { propertyName: 'cell-class-name', description: '设置自定义类名', dataType: 'string' },
      {
        propertyName: 'teleported',
        description: '是否将 date-picker 的下拉列表插入至 body 元素',
        dataType: 'string'
      }
    ]
  },

  {
    name: 'el-input',
    displayName: 'Input 输入框',
    props: [
      { propertyName: 'type', description: '类型', dataType: 'string' },
      { propertyName: 'maxlength', description: '最大输入长度', dataType: 'string' },
      { propertyName: 'minlength', description: '原生属性，最小输入长度', dataType: 'string' },
      {
        propertyName: 'show-word-limit',
        description: '是否显示统计字数, 只在 type 为 text 或 textarea 的时候生效',
        dataType: 'string'
      },
      { propertyName: 'placeholder', description: '输入框占位文本', dataType: 'string' },
      { propertyName: 'clearable', description: '是否可清空', dataType: 'string' },
      {
        propertyName: 'formatter',
        description: '指定输入值的格式。(只有当 type 是"text"时才能工作)',
        dataType: 'string'
      },
      {
        propertyName: 'parser',
        description: '指定从格式化器输入中提取的值。(仅当 type 是"text"时才起作用)',
        dataType: 'string'
      },
      { propertyName: 'show-password', description: '是否显示切换密码图标', dataType: 'string' },
      { propertyName: 'disabled', description: '是否显示切换密码图标', dataType: 'string' },
      {
        propertyName: 'size',
        description: '输入框尺寸，只在 type 不为 textarea 时有效',
        dataType: 'string'
      },
      { propertyName: 'prefix-icon', description: '自定义前缀图标', dataType: 'string' },
      { propertyName: 'suffix-icon', description: '自定义后缀图标', dataType: 'string' },
      {
        propertyName: 'rows',
        description: '输入框行数，仅 type 为 textarea 时有效',
        dataType: 'string'
      },
      {
        propertyName: 'autosize',
        description:
          'textarea 高度是否自适应，仅 type 为 textarea 时生效。 可以接受一个对象，比如: { minRows: 2, maxRows: 6 }',
        dataType: 'string'
      },
      { propertyName: 'autocomplete', description: '原生 autocomplete 属性', dataType: 'string' },
      { propertyName: 'name', description: '等价于原生 input name 属性', dataType: 'string' },
      {
        propertyName: 'readonly',
        description: '原生  readonly 属性，是否只读',
        dataType: 'string'
      },
      { propertyName: 'max', description: '原生 max 属性，设置最大值', dataType: 'string' },
      { propertyName: 'min', description: '原生属性，设置最小值', dataType: 'string' },
      {
        propertyName: 'step',
        description: '原生属性，设置输入字段的合法数字间隔',
        dataType: 'string'
      },
      { propertyName: 'resize', description: '控制是否能被用户缩放', dataType: 'string' },
      { propertyName: 'autofocus', description: '原生属性，自动获取焦点', dataType: 'string' },
      { propertyName: 'form', description: '原生属性', dataType: 'string' },
      { propertyName: 'label', description: '标签文本', dataType: 'string' },
      { propertyName: 'tabindex', description: '输入框的 tabindex', dataType: 'string' },
      {
        propertyName: 'validate-event',
        description: '输入时是否触发表单的校验',
        dataType: 'string'
      },
      {
        propertyName: 'input-style',
        description: 'input 元素或 textarea 元素的 style',
        dataType: 'string'
      }
    ]
  },
  {
    name: 'el-input-number ',
    displayName: 'Input Number 数字输入框',
    props: [
      { propertyName: 'min', description: '设置计数器允许的最小值', dataType: 'string' },
      { propertyName: 'max', description: '设置计数器允许的最大值', dataType: 'string' },
      {
        propertyName: 'step-strictly',
        description: '是否只能输入 step 的倍数',
        dataType: 'string'
      },
      { propertyName: 'precision', description: '数值精度', dataType: 'string' },
      { propertyName: 'size', description: '计数器尺寸', dataType: 'string' },
      {
        propertyName: 'readonly',
        description: '原生  readonly 属性，是否只读',
        dataType: 'string'
      },
      { propertyName: 'disabled', description: '是否禁用状态', dataType: 'string' },
      { propertyName: 'controls', description: '是否使用控制按钮', dataType: 'string' },
      { propertyName: 'controls-position', description: '控制按钮位置', dataType: 'string' },
      { propertyName: 'name', description: '等价于原生 input name 属性', dataType: 'string' },
      { propertyName: 'label', description: '输入框关联的 label 文字', dataType: 'string' },
      { propertyName: 'placeholder', description: '输入框默认 placeholder', dataType: 'string' },
      {
        propertyName: 'value-on-clear',
        description: '当输入框被清空时显示的值',
        dataType: 'string'
      },
      {
        propertyName: 'validate-event',
        description: '输入时是否触发表单的校验',
        dataType: 'string'
      }
    ]
  },
  {
    name: 'l-radio',
    displayName: 'Radio 单选框',
    props: [
      { propertyName: 'label', description: '单选框对应的值', dataType: 'string' },
      { propertyName: 'disabled', description: '是否禁用单选框', dataType: 'string' },
      { propertyName: 'border', description: '是否显示边框', dataType: 'string' },
      { propertyName: 'size', description: 'Radio 的尺寸', dataType: 'string' },
      { propertyName: 'name', description: '原生 name 属性', dataType: 'string' }
    ]
  },
  {
    name: 'el-radio-group',
    displayName: 'Radio 单选框组',
    props: [
      { propertyName: 'size', description: '单选框组尺寸', dataType: 'string' },
      { propertyName: 'disabled', description: '是否禁用', dataType: 'string' },
      {
        propertyName: 'text-color',
        description: '按钮形式的 Radio 激活时的文本颜色',
        dataType: 'string'
      },
      {
        propertyName: 'fill',
        description: '按钮形式的 Radio 激活时的填充色和边框色',
        dataType: 'string'
      },
      {
        propertyName: 'validate-event',
        description: '输入时是否触发表单的校验',
        dataType: 'string'
      }
    ]
  },
  {
    name: 'el-rate',
    displayName: 'Rate 评分',
    props: [
      { propertyName: 'max', description: '最大分值', dataType: 'string' },
      { propertyName: 'size', description: '尺寸', dataType: 'string' },
      { propertyName: 'disabled', description: '是否为只读', dataType: 'string' },
      { propertyName: 'allow-half', description: '是否允许半选', dataType: 'string' },
      {
        propertyName: 'low-threshold',
        description: '低分和中等分数的界限值， 值本身被划分在低分中',
        dataType: 'string'
      },
      {
        propertyName: 'high-threshold',
        description: '高分和中等分数的界限值， 值本身被划分在高分中',
        dataType: 'string'
      },
      {
        propertyName: 'colors',
        description:
          'icon 的颜色。 若传入数组，共有 3 个元素，为 3 个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色',
        dataType: 'string'
      },
      { propertyName: 'void-color', description: '未选中 icon 的颜色', dataType: 'string' },
      {
        propertyName: 'disabled-void-color',
        description: '只读时未选中 icon 的颜色',
        dataType: 'string'
      },

      {
        propertyName: 'icons',
        description:
          '图标组件 若传入数组，共有 3 个元素，为 3 个分段所对应的类名；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名',
        dataType: 'string'
      },
      { propertyName: 'void-icon', description: '未被选中的图标组件', dataType: 'string' },
      {
        propertyName: 'disabled-void-icon',
        description: '禁用状态的未选择图标',
        dataType: 'string'
      },
      {
        propertyName: 'show-text',
        description: '是否显示当前分数， show-score 和 show-text 不能同时为真',
        dataType: 'string'
      },
      { propertyName: 'show-score', description: '辅助文字的颜色', dataType: 'string' },
      { propertyName: 'text-color', description: '辅助文字数组', dataType: 'string' },
      { propertyName: 'score-template', description: '分数显示模板', dataType: 'string' }
    ]
  },
  {
    name: 'el-select',
    displayName: 'Select 选择器',
    props: [
      { propertyName: 'multiple', description: '是否多选', dataType: 'string' },
      { propertyName: 'disabled', description: '是否禁用', dataType: 'string' },
      {
        propertyName: 'value-key',
        description: '作为 value 唯一标识的键名，绑定值为对象类型时必填',
        dataType: 'string'
      },
      { propertyName: 'size', description: '输入框尺寸', dataType: 'string' },
      { propertyName: 'clearable', description: '是否可以清空选项', dataType: 'string' },
      {
        propertyName: 'collapse-tags',
        description: '多选时是否将选中值按文字的形式展示',
        dataType: 'string'
      },
      {
        propertyName: 'collapse-tags-tooltip',
        description:
          '当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。 要使用此属性，collapse-tags属性必须设定为 true',
        dataType: 'string'
      },
      {
        propertyName: 'multiple-limit',
        description:
          'multiple 属性设置为 true 时，代表多选场景下用户最多可以选择的项目数， 为 0 则不限制',
        dataType: 'string'
      },
      { propertyName: 'name', description: 'Select 输入框的原生 name 属性', dataType: 'string' },
      {
        propertyName: 'effect',
        description: 'Tooltip 主题，内置了 dark / light 两种',
        dataType: 'string'
      },
      {
        propertyName: 'autocomplete',
        description: 'Select 输入框的原生 autocomplete 属性',
        dataType: 'string'
      },
      { propertyName: 'placeholder', description: '占位文字', dataType: 'string' },
      { propertyName: 'filterable', description: 'Select 组件是否可筛选', dataType: 'string' },
      {
        propertyName: 'allow-create',
        description: '是否允许用户创建新条目， 只有当 filterable 设置为 true 时才会生效。',
        dataType: 'string'
      },
      { propertyName: 'remote', description: '其中的选项是否从服务器远程加载', dataType: 'string' },
      { propertyName: 'filter-method', description: '自定义远程搜索方法', dataType: 'string' },
      {
        propertyName: 'remote-method',
        description: '远程搜索方法显示后缀图标',
        dataType: 'string'
      },
      {
        propertyName: 'remote-show-suffix',
        description: '远程搜索方法显示后缀图标',
        dataType: 'string'
      },
      { propertyName: 'loading', description: '是否正在从远程获取数据', dataType: 'string' },
      {
        propertyName: 'loading-text',
        description: '从服务器加载内容时显示的文本',
        dataType: 'string'
      },
      {
        propertyName: 'no-match-text',
        description: '搜索条件无匹配时显示的文字，也可以使用 empty 插槽设置',
        dataType: 'string'
      },
      {
        propertyName: 'no-data-text',
        description: '无选项时显示的文字，也可以使用 empty 插槽设置自定义内容',
        dataType: 'string'
      },
      {
        propertyName: 'popper-class',
        description: '选择器下拉菜单的自定义类名',
        dataType: 'string'
      },
      {
        propertyName: 'reserve-keyword',
        description:
          '当 multiple 和 filter被设置为 true 时，是否在选中一个选项后保留当前的搜索关键词',
        dataType: 'string'
      },
      {
        propertyName: 'default-first-option',
        description: '是否在输入框按下回车时，选择第一个匹配项。 需配合 filterable 或 remote 使用',
        dataType: 'string'
      },
      {
        propertyName: 'teleported',
        description: '该下拉菜单是否使用teleport插入body元素',
        dataType: 'string'
      },
      {
        propertyName: 'persistent',
        description: '当下拉选择器未被激活并且persistent设置为false，选择器会被删除。',
        dataType: 'string'
      },
      {
        propertyName: 'automatic-dropdown',
        description: '对于不可过滤的 Select 组件，此属性决定是否在输入框获得焦点后自动弹出选项菜单',
        dataType: 'string'
      },
      { propertyName: 'clear-icon', description: '自定义清除图标', dataType: 'string' },
      {
        propertyName: 'fit-input-width',
        description: '下拉框的宽度是否与输入框相同',
        dataType: 'string'
      },
      { propertyName: 'suffix-icon', description: '自定义后缀图标组件', dataType: 'string' },
      {
        propertyName: 'suffix-transition',
        description: '下拉菜单显示/消失时的动画',
        dataType: 'string'
      },
      { propertyName: 'tag-type', description: '标签类型', dataType: 'string' },
      { propertyName: 'validate-event', description: '是否触发表单验证', dataType: 'string' },
      { propertyName: 'placement', description: '下拉框出现的位置', dataType: 'string' }
    ]
  },
  {
    name: 'el-slider',
    displayName: 'Slider 滑块',
    props: [
      { propertyName: 'min', description: '最小值', dataType: 'string' },
      { propertyName: 'max', description: '最大值', dataType: 'string' },
      { propertyName: 'disabled', description: '是否禁用', dataType: 'string' },
      { propertyName: 'step', description: '步长', dataType: 'string' },
      {
        propertyName: 'show-input',
        description: '是否显示输入框，仅在非范围选择时有效',
        dataType: 'string'
      },
      {
        propertyName: 'show-input-controls',
        description: '在显示输入框的情况下，是否显示输入框的控制按钮',
        dataType: 'string'
      },

      {
        propertyName: 'input-size',
        description: 'slider 包装器的大小，垂直模式下该属性不可用',
        dataType: 'string'
      },
      {
        propertyName: 'show-stops',
        description: '输入框的大小，如果设置了 size 属性，默认值自动取 size',
        dataType: 'string'
      },
      { propertyName: 'show-tooltip', description: '是否显示间断点', dataType: 'string' },
      { propertyName: 'format-tooltip', description: '格式化提示信息', dataType: 'string' },
      { propertyName: 'range', description: '是否开启选择范围', dataType: 'string' },
      { propertyName: 'vertical', description: '垂直模式', dataType: 'string' },
      { propertyName: 'height', description: '滑块高度，垂直模式必填', dataType: 'string' },
      { propertyName: 'label', description: '屏幕阅读器标签', dataType: 'string' },
      {
        propertyName: 'range-start-label',
        description: '当 range 为true时，屏幕阅读器标签开始的标记',
        dataType: 'string'
      },
      {
        propertyName: 'range-end-label',
        description: '当 range 为true时，屏幕阅读器标签结尾的标记',
        dataType: 'string'
      },
      {
        propertyName: 'format-value-text',
        description: '显示屏幕阅读器的 aria-valuenow 属性的格式',
        dataType: 'string'
      },
      {
        propertyName: 'debounce',
        description: '输入时的去抖延迟，毫秒，仅在 show-input 等于 true 时有效',
        dataType: 'string'
      },
      { propertyName: 'tooltip-class', description: 'tooltip 的自定义类名', dataType: 'string' },
      { propertyName: 'placement', description: 'Tooltip 出现的位置', dataType: 'string' },
      {
        propertyName: 'marks',
        description:
          '标记， key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标记可以单独设置样式',
        dataType: 'string'
      },
      {
        propertyName: 'validate-event',
        description: '输入时是否触发表单的校验',
        dataType: 'string'
      }
    ]
  },
  {
    name: 'el-switch',
    displayName: 'Switch 开关',
    props: [
      { propertyName: 'disabled', description: '是否禁用', dataType: 'string' },
      { propertyName: 'loading', description: '是否显示加载中', dataType: 'string' },
      { propertyName: 'size', description: 'switch 的大小', dataType: 'string' },
      { propertyName: 'width', description: 'switch 的宽度', dataType: 'string' },
      {
        propertyName: 'inline-prompt',
        description: '无论图标或文本是否显示在点内，只会呈现文本的第一个字符',
        dataType: 'string'
      },
      {
        propertyName: 'active-icon',
        description: 'switch 状态为 on 时所显示图标，设置此项会忽略 active-text',
        dataType: 'string'
      },
      {
        propertyName: 'inactive-icon',
        description: 'switch 状态为 off 时所显示图标，设置此项会忽略 inactive-text',
        dataType: 'string'
      },
      { propertyName: 'active-text', description: 'switch 打开时的文字描述', dataType: 'string' },
      {
        propertyName: 'inactive-text',
        description: 'switch 的状态为 off 时的文字描述',
        dataType: 'string'
      },
      { propertyName: 'active-value', description: 'switch 状态为 on 时的值', dataType: 'string' },
      {
        propertyName: 'inactive-value',
        description: 'switch的状态为 off 时的值',
        dataType: 'string'
      },
      { propertyName: 'name', description: 'switch 对应的 name 属性', dataType: 'string' },
      {
        propertyName: 'validate-event',
        description: '改变 switch 状态时是否触发表单的校验',
        dataType: 'string'
      },
      {
        propertyName: 'before-change',
        description: 'switch 状态改变前的钩子， 返回 false 或者返回 Promise 且被 reject 则停止切换',
        dataType: 'string'
      }
    ]
  },
  {
    name: 'el-time-picker',
    displayName: 'TimePicker 时间选择器',
    props: [
      { propertyName: 'readonly', description: '完全只读', dataType: 'string' },
      { propertyName: 'disabled', description: '禁用', dataType: 'string' },
      { propertyName: 'editable', description: '文本框可输入', dataType: 'string' },
      { propertyName: 'clearable', description: '是否显示清除按钮', dataType: 'string' },
      { propertyName: 'size', description: '输入框尺寸', dataType: 'string' },
      { propertyName: 'placeholder', description: '非范围选择时的占位内容', dataType: 'string' },
      {
        propertyName: 'start-placeholder',
        description: '范围选择时开始日期的占位内容',
        dataType: 'string'
      },
      {
        propertyName: 'end-placeholder',
        description: '范围选择时结束日期的占位内容',
        dataType: 'string'
      },
      { propertyName: 'is-range', description: '是否为时间范围选择', dataType: 'string' },
      {
        propertyName: 'arrow-control',
        description: '是否使用箭头进行时间选择',
        dataType: 'string'
      },
      { propertyName: 'popper-class', description: 'TimePicker 下拉框的类名', dataType: 'string' },
      { propertyName: 'range-separator', description: '选择范围时的分隔符', dataType: 'string' },
      { propertyName: 'format', description: '显示在输入框中的格式', dataType: 'string' },
      {
        propertyName: 'default-value',
        description: '可选，选择器打开时默认显示的时间',
        dataType: 'string'
      },
      { propertyName: 'id', description: '等价于原生 input id 属性', dataType: 'string' },
      { propertyName: 'name', description: '等价于原生 input name 属性', dataType: 'string' },
      { propertyName: 'prefix-icon', description: '自定义前缀图标', dataType: 'string' },
      { propertyName: 'clear-icon', description: '自定义清除图标', dataType: 'string' },
      { propertyName: 'disabled-hours', description: '禁止选择部分小时选项', dataType: 'string' },
      { propertyName: 'disabled-minutes', description: '禁止选择部分分钟选项', dataType: 'string' },
      { propertyName: 'disabled-seconds', description: '禁止选择部分秒选项', dataType: 'string' },
      {
        propertyName: 'teleported',
        description: '是否将 popover 的下拉列表镜像至 body 元素',
        dataType: 'string'
      }
    ]
  },
  {
    name: 'el-time-select',
    displayName: 'TimeSelect 时间选择',
    props: [
      { propertyName: 'readonly', description: '完全只读', dataType: 'string' },
      { propertyName: 'disabled', description: '禁用', dataType: 'string' },
      { propertyName: 'editable', description: '文本框可输入', dataType: 'string' },
      { propertyName: 'clearable', description: '是否显示清除按钮', dataType: 'string' },
      { propertyName: 'size', description: '输入框尺寸', dataType: 'string' },
      { propertyName: 'placeholder', description: '非范围选择时的占位内容', dataType: 'string' },

      { propertyName: 'name', description: '等价于原生 input name 属性', dataType: 'string' },
      {
        propertyName: 'effect',
        description: 'Tooltip 主题，内置了 dark / light 两种主题',
        dataType: 'string'
      },
      { propertyName: 'prefix-icon', description: '自定义前缀图标', dataType: 'string' },
      { propertyName: 'clear-icon', description: '自定义清除图标', dataType: 'string' },

      { propertyName: 'start', description: '开始时间', dataType: 'string' },
      { propertyName: 'end', description: '结束时间', dataType: 'string' },
      { propertyName: 'step', description: '间隔时间', dataType: 'string' },
      {
        propertyName: 'min-time',
        description: '最早时间点，早于该时间的时间段将被禁用',
        dataType: 'string'
      },
      {
        propertyName: 'max-time',
        description: '最晚时间点，晚于该时间的时间段将被禁用',
        dataType: 'string'
      },
      { propertyName: 'format', description: '设置时间格式', dataType: 'string' }
    ]
  },
  {
    name: 'el-transfer',
    displayName: 'Transfer 穿梭框',
    props: [
      { propertyName: 'data', description: 'Transfer 的数据源', dataType: 'string' },
      { propertyName: 'filterable', description: '是否可搜索', dataType: 'string' },
      { propertyName: 'filter-placeholder', description: '搜索框占位符', dataType: 'string' },
      { propertyName: 'filter-method', description: '自定义搜索方法', dataType: 'string' },
      {
        propertyName: 'target-order',
        description:
          '右侧列表元素的排序策略： 若为 original，则保持与数据源相同的顺序； 若为 push，则新加入的元素排在最后； 若为 unshift，则新加入的元素排在最前',
        dataType: 'string'
      },
      { propertyName: 'titles', description: '自定义列表标题', dataType: 'string' },
      { propertyName: 'button-texts', description: '自定义按钮文案', dataType: 'string' },
      { propertyName: 'render-content', description: '自定义数据项渲染函数', dataType: 'string' },
      { propertyName: 'format', description: '列表顶部勾选状态文案', dataType: 'string' },
      { propertyName: 'props', description: '数据源的字段别名', dataType: 'string' },
      {
        propertyName: 'left-default-checked',
        description: '初始状态下左侧列表的已勾选项的 key 数组',
        dataType: 'string'
      },
      {
        propertyName: 'right-default-checked',
        description: '初始状态下右侧列表的已勾选项的 key 数组',
        dataType: 'string'
      },
      { propertyName: 'validate-event', description: '是否触发表单验证', dataType: 'string' }
    ]
  },
  {
    name: 'el-upload',
    displayName: 'Upload 上传',
    props: [
      { propertyName: 'action', description: '请求 URL', dataType: 'string' },
      { propertyName: 'headers', description: '设置上传的请求头部', dataType: 'string' },
      { propertyName: 'method', description: '设置上传请求方法', dataType: 'string' },
      { propertyName: 'multiple', description: '是否支持多选文件', dataType: 'string' },
      { propertyName: 'data', description: '上传时附带的额外参数', dataType: 'string' },
      { propertyName: 'name', description: '上传的文件字段名', dataType: 'string' },
      {
        propertyName: 'with-credentials',
        description: '支持发送 cookie 凭证信息',
        dataType: 'string'
      },
      { propertyName: 'drag', description: '是否显示已上传文件列表', dataType: 'string' },
      { propertyName: 'accept', description: '接受上传的文件类型', dataType: 'string' },
      {
        propertyName: 'on-preview',
        description: '点击文件列表中已上传的文件时的钩子',
        dataType: 'string'
      },
      { propertyName: 'on-remove', description: '文件列表移除文件时的钩子', dataType: 'string' },
      { propertyName: 'on-success', description: '文件上传成功时的钩子', dataType: 'string' },
      { propertyName: 'on-progress', description: '文件上传失败时的钩子', dataType: 'string' },
      { propertyName: 'on-change', description: '文件上传时的钩子', dataType: 'string' },
      {
        propertyName: 'on-exceed',
        description: '文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用',
        dataType: 'string'
      },
      {
        propertyName: 'before-upload',
        description: '当超出限制时，执行的钩子函数',
        dataType: 'string'
      },
      {
        propertyName: 'before-remove',
        description:
          '上传文件之前的钩子，参数为上传的文件， 若返回false或者返回 Promise 且被 reject，则停止上传。',
        dataType: 'string'
      },
      {
        propertyName: 'file-list',
        description:
          '删除文件之前的钩子，参数为上传的文件和文件列表， 若返回 false 或者返回 Promise 且被 reject，则停止删除。',
        dataType: 'string'
      },
      { propertyName: 'list-type', description: '默认上传文件', dataType: 'string' },
      { propertyName: 'auto-upload', description: '是否自动上传文件', dataType: 'string' },
      {
        propertyName: 'http-request',
        description: '覆盖默认的 Xhr 行为，允许自行实现上传文件的请求',
        dataType: 'string'
      },
      { propertyName: 'disabled', description: '是否禁用上传', dataType: 'string' },
      { propertyName: 'limit', description: '允许上传文件的最大数量', dataType: 'string' }
    ]
  }
];

export default components;
