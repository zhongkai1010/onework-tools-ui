<template>
  <el-drawer :model-value="true" @closed="onClose" title="表单项配置">
    <div class="config-container">
      <el-form :model="formValue" label-width="120px" label-position="left">
        <el-divider content-position="left">基本配置</el-divider>
        <el-form-item label="字段名">
          <el-input v-model="formValue.name" />
        </el-form-item>
        <el-form-item label="标题">
          <el-input v-model="formValue.label" />
        </el-form-item>
        <el-form-item label="提示文字">
          <el-input v-model="formValue.placeholder" />
        </el-form-item>

        <el-form-item label="表单栅格">
          <el-slider v-model="formValue.span" :min="0" :max="24" style="width: 95%" />
        </el-form-item>
        <el-form-item label="标签宽度">
          <el-input v-model="formValue.labelWidth">
            <template #append>px</template>
          </el-input>
        </el-form-item>
        <el-form-item label="组件宽度">
          <el-input v-model="formValue.width">
            <template #append>px</template>
          </el-input>
        </el-form-item>
        <el-form-item label="默认值">
          <el-input v-model="formValue.defaultValue" />
        </el-form-item>
        <!-- <el-divider content-position="left">组件配置</el-divider> -->
        <el-button-group>
          <el-button type="primary">静态数据</el-button>
          <el-button type="primary">动态数据</el-button>
        </el-button-group>
        <el-divider content-position="left">静态数据</el-divider>
        <div class="options-container">
          <draggable
            group="options"
            :list="formValue.props?.options || []"
            item-key="value"
            @start="dragging = true"
            @end="dragging = false"
          >
            <template #item="{ element, index }">
              <div class="option">
                <iconify-icon icon="mi:drag" :size="32" class="drag" />
                <el-form-item class="first">
                  <el-input :model-value="formValue.props?.options[index].label" />
                </el-form-item>
                <el-form-item>
                  <el-input :model-value="formValue.props?.options[index].value" />
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
          <el-input :model-value="formValue.props?.remote?.url">
            <template #prepend>
              <el-select :model-value="formValue.props?.remote?.method" style="width: 90px">
                <el-option label="POST" value="post" />
                <el-option label="GET" value="get" />
              </el-select>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="标签键名">
          <el-input :model-value="formValue.props?.remote?.labelKey" />
        </el-form-item>
        <el-form-item label="值键名">
          <el-input :model-value="formValue.props?.remote?.valueKey" />
        </el-form-item>
        <el-form-item label="子级键名">
          <el-input :model-value="formValue.props?.remote?.childerKey" />
        </el-form-item>
        <el-divider content-position="left">状态设置</el-divider>
        <el-form-item label="是否显示标签">
          <el-switch v-model="formValue.showLabel" />
        </el-form-item>
        <el-form-item label="是否只读">
          <el-switch :model-value="formValue.props?.readonly" />
        </el-form-item>
        <el-form-item label="是否禁用">
          <el-switch :model-value="formValue.props?.disabled" />
        </el-form-item>
        <el-form-item label="是否必填">
          <el-switch v-model="formValue.required" />
        </el-form-item>
        <el-divider content-position="left">验证规则</el-divider>
        <div class="rule-container">
          <div class="item" v-for="(rule, index) in formValue.rules" :key="index">
            <el-form-item label="验证表达式">
              <el-input :model-value="rule.pattern" />
            </el-form-item>
            <el-form-item label="错误消息">
              <el-input v-model="rule.message" />
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
      </el-form>
    </div>
    <template #footer>
      <div style="flex: auto">
        <el-button @click="onClose">取消</el-button>
        <el-button type="primary" @click="onSave">保存</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<script setup lang="ts">
  import { DraggableItemProps, FormItemDrawerInstance } from '../types';
  import { FormComponent } from '/@/components/FormItem';
  import draggable from 'vuedraggable';

  const formValue = reactive<DraggableItemProps>({
    component: 'input' as FormComponent,
    name: 'name',
    label: '标签',
  });
  const dragging = ref(false);
  const dialogShow = ref(false);

  const onAddOption = () => {
    if (!formValue.props) formValue.props = {};
    if (!formValue.props.options) formValue.props.options = [];
    formValue.props.options.push({
      label: '',
      value: '',
    });
  };
  const onCloseOption = (option) => {
    const index = formValue.props.options.findIndex((t) => t.value == option.value);
    formValue.props.options.splice(index, 1);
  };
  const onAddRule = () => {
    if (!formValue.rules) formValue.rules = [];
    formValue.rules.push({
      pattern: '',
      message: '',
    });
  };
  const onCloseRule = (index) => {
    formValue.rules.splice(index, 1);
  };

  const onOpen = (config: DraggableItemProps) => {
    Object.keys(config).forEach((t) => {
      formValue[t] = config[t];
    });
    dialogShow.value = true;
  };
  const onSave = () => {
    emits('save', unref(formValue));
    dialogShow.value = false;
  };
  const onClose = () => {
    dialogShow.value = false;
  };

  const emits = defineEmits<{ (e: 'save', value: DraggableItemProps) }>();

  defineExpose<FormItemDrawerInstance>({ open: onOpen });
</script>
<style scoped lang="scss">
  .config-container {
    margin: 20px;
    background-color: #fff;

    :deep(.el-divider__text) {
    }
    .options-container {
      .option {
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
