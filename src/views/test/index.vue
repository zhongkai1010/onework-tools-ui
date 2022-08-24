<template>
  <page-view class="container">
    <el-form :model="form" label-width="120px" label-position="left">
      <el-divider content-position="left">基本配置</el-divider>
      <el-form-item label="字段名">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="form.label" />
      </el-form-item>
      <el-form-item label="提示文字">
        <el-input v-model="form.placeholder" />
      </el-form-item>

      <el-form-item label="表单栅格">
        <el-slider v-model="form.span" :min="0" :max="24" style="width: 95%" />
      </el-form-item>
      <el-form-item label="标签宽度">
        <el-input v-model="form.labelWidth">
          <template #append>px</template>
        </el-input>
      </el-form-item>
      <el-form-item label="组件宽度">
        <el-input v-model="form.width">
          <template #append>px</template>
        </el-input>
      </el-form-item>
      <el-form-item label="默认值">
        <el-input v-model="form.defaultValue" />
      </el-form-item>
      <el-divider content-position="left">组件配置</el-divider>

      <el-divider content-position="left">静态数据</el-divider>
      <div class="options-container">
        <draggable
          group="options"
          :list="form.props.options"
          item-key="value"
          @start="dragging = true"
          @end="dragging = false"
        >
          <template #item="{ element, index }">
            <div class="option">
              <iconify-icon icon="mi:drag" :size="32" class="drag" />
              <el-form-item class="first">
                <el-input v-model="form.props.options[index].lable" />
              </el-form-item>
              <el-form-item>
                <el-input v-model="form.props.options[index].value" />
              </el-form-item>
              <iconify-icon
                icon="ant-design:close-circle-outlined"
                :size="32"
                @click="onCloseOption(element)"
              />
            </div>
          </template>
        </draggable>

        <div class="button">
          <el-button @click="onAddOption">
            <iconify-icon icon="carbon:add-alt" />
            <span>添加选项</span>
          </el-button>
        </div>
      </div>
      <el-divider content-position="left">动态数据</el-divider>
      <el-form-item label="接口地址">
        <el-input v-model="form.props.remote.url">
          <template #prepend>
            <el-select v-model="form.props.remote.method">
              <el-option label="POST" value="post" />
              <el-option label="GET" value="get" />
            </el-select>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="标签键名">
        <el-input v-model="form.props.remote.labelKey" />
      </el-form-item>
      <el-form-item label="值键名">
        <el-input v-model="form.props.remote.valueKey" />
      </el-form-item>
      <el-form-item label="子级键名">
        <el-input v-model="form.props.remote.childerKey" />
      </el-form-item>
      <el-divider content-position="left">状态设置</el-divider>
      <el-form-item label="是否显示标签">
        <el-switch v-model="form.showLabel" />
      </el-form-item>
      <el-form-item label="是否只读">
        <el-switch v-model="form.props.readonly" />
      </el-form-item>
      <el-form-item label="是否禁用">
        <el-switch v-model="form.props.disabled" />
      </el-form-item>
      <el-form-item label="是否必填">
        <el-switch v-model="form.required" />
      </el-form-item>
      <el-divider content-position="left">验证规则</el-divider>
      <div class="rule-container">
        <div class="item" v-for="(rule, index) in form.props.rules" :key="index">
          <el-form-item label="验证表达式">
            <el-input v-model="form.props.rules[index].rule" />
          </el-form-item>
          <el-form-item label="错误消息">
            <el-input v-model="form.props.rules[index].message" />
          </el-form-item>
          <div class="close" @click="onCloseRule(index)">
            <iconify-icon icon="ant-design:close-circle-outlined" :size="16" />
          </div>
        </div>
        <div class="button">
          <el-button @click="onAddRule">
            <iconify-icon icon="carbon:add-alt" />
            <span>添加验证规则</span>
          </el-button>
        </div>
      </div>
      <div class="footer">
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button>取消</el-button>
      </div>
    </el-form>
  </page-view>
</template>

<script setup lang="ts">
  import draggable from 'vuedraggable';
  // import { useMessage } from '/@/hooks/web/useMessage';
  // const { message } = useMessage();
  const dragging = ref(false);
  const form = reactive({
    name: 'name',
    label: '标签',
    placeholder: '',
    span: 6,
    labelWidth: '60',
    width: '',
    defaultValue: '',
    props: {
      options: [],
      remote: {
        url: '',
        method: 'get',
        labelKey: '',
        valueKey: '',
        childerKey: '',
      },
      readonly: false,
      disabled: false,
      rules: [
        {
          rule: '',
          message: '',
        },
      ],
    },
    showLabel: true,
    required: false,
  });
  const onSubmit = () => {
    console.log(unref(form));
  };
  const onAddOption = () => {
    form.props.options.push({
      label: '',
      value: '',
    });
  };
  const onCloseOption = (option) => {
    const index = form.props.options.findIndex((t) => t.value == option.value);
    form.props.options.splice(index, 1);
  };
  const onAddRule = () => {
    form.props.rules.push({
      rule: '',
      message: '',
    });
  };
  const onCloseRule = (index) => {
    form.props.rules.splice(index, 1);
  };
</script>

<style scoped lang="scss">
  .container {
    margin: 20px;
    background-color: #fff;

    :deep(.el-divider__text) {
    }
    .options-container {
      .option {
        margin-left: 100px;
        display: flex;
        i {
          margin: 0 5px;
        }
        .drag {
          cursor: pointer;
        }
        .first {
          margin-right: 20px;
        }
        :deep(.el-form-item__content) {
          margin-left: 0px !important;
        }
      }
      .button {
        margin: 20px;
      }
    }

    .rule-container {
      .item {
        padding: 20px;
        background: #f8f8f8;
        position: relative;
        border-radius: 10px;
        background-color: #f8f8f8;
        margin-bottom: 10px;
      }
      .close {
        cursor: pointer;
        position: absolute;
        right: 5px;
        top: 5px;
        color: var(--el-color-error);
      }
      .button {
        margin: 20px;
      }
    }
    .footer {
      text-align: center;
    }
  }
</style>
