<template>
  <div class="config-container">
    <el-drawer :model-value="dialogShow" @closed="dialogShow = false" title="表单项配置">
      <el-form :model="itemConfig" label-width="120px" label-position="left" ref="formRef">
        <FormItemSet.Item v-model="itemConfig" />
        <FormItemSet.Props v-model="itemConfig.props" />
        <FormItemSet.Data
          v-model="itemConfig.component.config"
          v-if="itemConfig.component.config.dataMode !== 'none'"
        />
        <FormItemSet.Rule v-model="itemConfig.props.verifies" v-if="itemConfig.design.isRule" />
        <div v-if="itemConfig.design?.items">
          <el-divider content-position="left">组件配置</el-divider>
          <el-form-item
            v-for="(item, index) in itemConfig.design?.items"
            :key="item.key"
            :label="item.label"
          >
            <form-item
              :model-value="itemConfig.design?.items[index].value"
              :component="item.component.component"
              :props="item.component.props"
              :config="item.component.config"
              @update:model-value="(value) => (itemConfig.design.items[index].value = value)"
            />
          </el-form-item>
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

  import { FormInstance } from 'element-plus';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { log } from '/@/utils/log';
  import * as FormItemSet from '/@/components/DynamicForm/src/components/FormItemSet';
  import {
    DEFAULT_DRAGGABLE_ITEM_CONFIG,
    DraggableItemConfig,
    FormItemDrawerInstance,
  } from '/@/views/demo/form/types';

  const { message } = useMessage();

  const dialogShow = ref(false);
  const itemConfig = reactive<DraggableItemConfig>({ id: '', ...DEFAULT_DRAGGABLE_ITEM_CONFIG });
  const formRef = ref<FormInstance>();
  const emits = defineEmits<{ (e: 'save', value: DraggableItemConfig) }>();

  const onOpen = (config: DraggableItemConfig) => {
    log('open set', config);
    itemConfig.id = config.id;
    Object.keys(DEFAULT_DRAGGABLE_ITEM_CONFIG).forEach((t) => {
      itemConfig[t] = config[t];
    });
    dialogShow.value = true;
  };

  const onSave = (form: FormInstance) => {
    const data = _.cloneDeep(itemConfig);
    form.validate((valid, fields) => {
      if (valid) {
        if (data.design?.items) {
          data.design?.items.forEach((t) => {
            if (!_.isUndefined(t.value)) {
              data.component.props[t.key] = t.value;
            }
          });
        }
        emits('save', data);
        log('form item config save', data);

        dialogShow.value = false;
      } else {
        console.log('save error', fields);
        message('验证失败', 'error');
      }
    });
  };

  defineExpose<FormItemDrawerInstance>({ open: onOpen });

  watch([itemConfig], () => {
    log('itemConfig', itemConfig);
  });
</script>
<style scoped lang="scss">
  .config-container {
    :deep(.el-drawer__header) {
      margin-bottom: 0px;
    }
    :deep(.el-form-item__label) {
      font-weight: 500;
    }
    :deep(.el-divider__text) {
      font-size: 14px;
      font-weight: 700;
      padding: 0 20px 0 0;
      left: 0;
    }
    .footer {
      text-align: center;
    }
  }
</style>
