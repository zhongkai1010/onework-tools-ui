<template>
  <div class="config-container">
    <el-drawer :model-value="dialogShow" @closed="dialogShow = false" title="表单项配置">
      <FormItemConfig.Form v-model="itemConfig" />
      <template #footer>
        <div style="flex: auto">
          <el-button @click="dialogShow = false">取消</el-button>
          <el-button type="primary" @click="onSave">保存</el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
  import _ from 'lodash';
  import { log } from '/@/utils/log';
  import * as FormItemConfig from '/@/components/DynamicForm/src/FormItemConfig';
  import {
    DEFAULT_DRAGGABLE_ITEM_CONFIG,
    DraggableItemConfig,
    FormItemDrawerInstance,
  } from '../types';

  const dialogShow = ref(false);
  const itemConfig = reactive<DraggableItemConfig>({ id: '', ...DEFAULT_DRAGGABLE_ITEM_CONFIG });

  const emits = defineEmits<{ (e: 'save', value: DraggableItemConfig) }>();

  const onOpen = (config: DraggableItemConfig) => {
    log('open set', config);
    itemConfig.id = config.id;
    Object.keys(DEFAULT_DRAGGABLE_ITEM_CONFIG).forEach((t) => {
      itemConfig[t] = config[t];
    });
    dialogShow.value = true;
  };

  const onSave = () => {
    const data = _.cloneDeep(itemConfig);
    emits('save', data);
    log('form item config save', data);
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
