<template>
  <div class="config-container">
    <el-drawer :model-value="dialogShow" @closed="onClose" title="表单项配置">
      <el-form :model="formValue" label-width="120px" label-position="left" ref="formRef">
        <InputBase v-model="formValue" />
        <!-- <InputConfig v-model="formValue" />
        <InputData v-model="formValue" />
        <InputRule v-model="formValue" />
        <InputState v-model="formValue" /> -->
      </el-form>
      <template #footer>
        <div style="flex: auto">
          <el-button @click="onClose">取消</el-button>
          <el-button type="primary" @click="onSave(formRef)">保存</el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
  import { FormInstance } from 'element-plus';
  import _ from 'lodash';
  import {
    DEFAULT_DRAGGABLE_ITEM_CONFIG,
    DraggableItemConfig,
    FormItemDrawerInstance,
  } from '/@/views/demo/form/types';
  import { log } from '/@/utils/log';
  import InputBase from './components/InputBase.vue';
  // import InputConfig from './components/InputConfig.vue';
  // import InputData from './components/InputData.vue';
  // import InputRule from './components/InputRule.vue';
  // import InputState from './components/InputState.vue';
  import { useMessage } from '/@/hooks/web/useMessage';
  const { message } = useMessage();

  const formValue = reactive<DraggableItemConfig>({
    id: '',
    ...DEFAULT_DRAGGABLE_ITEM_CONFIG,
  });
  const formRef = ref<FormInstance>();
  const dialogShow = ref(false);
  const emits = defineEmits<{ (e: 'save', value: DraggableItemConfig) }>();

  const onOpen = (config: DraggableItemConfig) => {
    const temp = Object.assign({}, config);
    Object.keys(formValue).forEach((t) => {
      formValue[t] = temp[t];
    });
    log('open', formValue);
    dialogShow.value = true;
  };

  const onSave = (form: FormInstance) => {
    console.log('save', formValue);
    form.validate((valid, fields) => {
      if (valid) {
        const temp = Object.assign({}, formValue);
        emits('save', temp);
        dialogShow.value = false;
      } else {
        console.log('save error', fields);
        message('验证失败', 'error');
      }
    });
  };

  const onClose = () => {
    dialogShow.value = false;
  };

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
  }
</style>
