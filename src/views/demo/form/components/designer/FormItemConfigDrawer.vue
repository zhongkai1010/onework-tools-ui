<template>
  <div class="config-container">
    <el-drawer :model-value="dialogShow" @closed="dialogShow = false" title="表单项配置">
      <el-form :model="formValue" label-width="120px" label-position="left" ref="formRef">
        <div>
          <!---基础配置--->
          <el-divider content-position="left">表单项配置</el-divider>
          <el-form-item label="表单名称" :required="true" prop="name">
            <el-input v-model="formValue.name" />
          </el-form-item>
          <el-form-item label="数据路径" :required="true" prop="props.prop">
            <el-input v-model="formValue.props.prop" />
          </el-form-item>
          <el-form-item label="标签名称" :required="true" prop="props.label">
            <el-input v-model="formValue.props.label" />
          </el-form-item>
          <el-form-item label="标签宽度">
            <el-input v-model="formValue.props.labelWidth" prop="props.labelWidth" />
          </el-form-item>
          <el-form-item label="默认值">
            <el-input v-model="formValue.defaultValue" prop="defaultValue" />
          </el-form-item>
          <el-divider content-position="left">布局配置</el-divider>
          <el-form-item label="表单栅格">
            <el-slider
              v-model.number="formValue.span"
              :min="0"
              :max="24"
              style="width: 95%"
              prop="span"
            />
          </el-form-item>
        </div>
        <div v-if="formValue.component.config?.dataMode !== 'none'">
          <!---数据配置--->
          <el-button-group v-if="isData">
            <el-button
              :type="dataMode == 'static' ? 'primary' : 'default'"
              @click="onChangeDataMode('static')"
              >静态数据</el-button
            >
            <el-button
              :type="dataMode == 'dynamic' ? 'primary' : 'default'"
              @click="onChangeDataMode('dynamic')"
              >动态数据</el-button
            >
          </el-button-group>
          <div class="options-container" v-if="dataMode === 'static'">
            <el-divider content-position="left">静态数据</el-divider>
            <draggable group="options" :list="options" item-key="id">
              <template #item="{ element, index }">
                <div class="option">
                  <iconify-icon icon="mi:drag" :size="32" class="drag" />
                  <el-form-item class="first" prop="component.config.options.index.label">
                    <el-input
                      :model-value="options[index].label"
                      @update:model-value="(value) => (options[index].label = value)"
                    />
                  </el-form-item>
                  <el-form-item prop="component.config.options.index.value">
                    <el-input
                      :model-value="options[index].value"
                      @update:model-value="(value) => (options[index].value = value)"
                    />
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
          <div class="remote-container" v-if="dataMode === 'dynamic'">
            <el-divider content-position="left">动态数据</el-divider>
            <el-form-item label="接口地址" prop="component.config.remote.url">
              <el-input v-model="formValue.component.config.remote.url">
                <template #prepend>
                  <el-select v-model="formValue.component.config.remote.method" style="width: 90px">
                    <el-option label="POST" value="post" />
                    <el-option label="GET" value="get" />
                  </el-select>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item label="标签键名" prop="component.config.remote.labelKey">
              <el-input v-model="formValue.component.config.remote.labelKey" />
            </el-form-item>
            <el-form-item label="值键名" prop="component.config.remote.valueKey">
              <el-input v-model="formValue.component.config.remote.valueKey" />
            </el-form-item>
            <el-form-item label="子级键名" prop="component.config.remote.childerKey">
              <el-input v-model="formValue.component.config.remote.childerKey" />
            </el-form-item>
            <el-form-item label="搜索键名" prop="component.config.remote.searchKey">
              <el-input v-model="formValue.component.config.remote.searchKey" />
            </el-form-item>
          </div>
        </div>
        <div class="rule-container">
          <el-divider content-position="left">验证规则</el-divider>
          <div class="item" v-for="(rule, index) in rules" :key="index">
            <el-form-item label="验证表达式" prop="props.formRules.index.pattern">
              <el-input v-model="rule.pattern" :required="true" />
            </el-form-item>
            <el-form-item label="错误消息" prop="props.formRules.index.message">
              <el-input v-model="rule.message" :required="true" />
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
      <template #footer>
        <div style="flex: auto">
          <el-button @click="dialogShow = false">取消</el-button>
          <el-button type="primary" @click="onSave(formRef)">保存</el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
  import _ from 'lodash';
  import draggable from 'vuedraggable';
  import { FormInstance } from 'element-plus';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { log } from '/@/utils/log';
  import {
    DEFAULT_DRAGGABLE_ITEM_CONFIG,
    DraggableItemConfig,
    FormItemDrawerInstance,
  } from '/@/views/demo/form/types';
  import { DataMode, FormItemOption, FormItemRule } from '/@/components/DynamicForm';

  const { message } = useMessage();
  const formValue = reactive<DraggableItemConfig>({ id: '', ...DEFAULT_DRAGGABLE_ITEM_CONFIG });

  const formRef = ref<FormInstance>();
  const dialogShow = ref(false);
  const dataMode = ref<DataMode>();
  const options = ref<FormItemOption[]>([]);
  const rules = ref<FormItemRule[]>([]);

  const isData = computed(() => formValue.component.config?.dataMode !== 'none');
  const emits = defineEmits<{ (e: 'save', value: DraggableItemConfig) }>();

  const onOpen = (config: DraggableItemConfig) => {
    formValue.id = config.id;
    Object.keys(DEFAULT_DRAGGABLE_ITEM_CONFIG).forEach((t) => {
      formValue[t] = config[t];
    });
    dataMode.value = formValue.component.config.dataMode;
    options.value = formValue.component.config.options;
    dialogShow.value = true;
    // 未知原因，默认加入 {"required":true}，排除掉
    const temp = formValue.props.rules.filter((t) => typeof t.pattern !== 'undefined');
    rules.value = temp;
  };

  const onSave = (form: FormInstance) => {
    const data = _.cloneDeep(formValue);
    log('form item config save', data);
    form.validate((valid, fields) => {
      if (valid) {
        emits('save', data);
        dialogShow.value = false;
      } else {
        console.log('save error', fields);
        message('验证失败', 'error');
      }
    });
  };

  const onChangeDataMode = (mode: DataMode) => {
    dataMode.value = mode;
    formValue.component.config.dataMode = mode;
  };

  const onCloseOption = (option) => {
    const index = options.value.findIndex((t) => t.value == option.value);
    options.value.splice(index, 1);
  };

  const onAddOption = () => {
    options.value.push({
      label: '',
      value: '',
    });
  };

  const onAddRule = () => {
    rules.value.push({
      pattern: '',
      message: '',
    });
  };

  const onCloseRule = (index) => {
    rules.value.splice(index, 1);
  };

  watch([options], () => {
    log('form item config watch options', options.value);
    formValue.component.config.options = options.value;
  });

  watch([rules], () => {
    log('form item config watch rules', rules.value);
    formValue.props.rules = rules.value;
  });

  defineExpose<FormItemDrawerInstance>({ open: onOpen });
</script>
<style scoped lang="scss">
  .config-container {
    :deep(.el-drawer__header) {
      margin-bottom: 0px;
    }
    .footer {
      text-align: center;
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
        margin: 10px;
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
        margin: 10px;
      }
    }
  }
</style>
