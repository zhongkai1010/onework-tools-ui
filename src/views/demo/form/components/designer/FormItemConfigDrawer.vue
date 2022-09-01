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
        <FormItemSet.Rule v-model="itemConfig.props.rules" v-if="itemConfig.design.isRule" />
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
    .footer {
      text-align: center;
    }
  }
</style>
