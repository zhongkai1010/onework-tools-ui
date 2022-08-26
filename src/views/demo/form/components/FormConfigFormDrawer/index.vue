<template>
  <div class="config-container">
    <el-drawer :model-value="dialogShow" @closed="onClose" title="表单项配置">
      <el-form :model="formValue" label-width="120px" label-position="left" ref="formRef">
        <InputBase v-model="formValue" />
        <InputConfig v-if="formValue.componentConfig" v-model="formValue" />
        <InputData v-model="formValue" />
        <InputRule v-if="formValue.formRules" v-model="formValue.formRules" />
        <!-- <InputState /> -->
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
  import InputBase from './components/InputBase.vue';
  import InputConfig from './components/InputConfig.vue';
  import InputData from './components/InputData.vue';
  import InputRule from './components/InputRule.vue';

  // import InputState from './components/InputState.vue';
  // import { useMessage } from '/@/hooks/web/useMessage';
  // const { message } = useMessage();

  interface ItemConfigFormDrawerProps {
    config: DraggableItemConfig | undefined;
  }
  const props = defineProps<ItemConfigFormDrawerProps>();
  const formValue = reactive<DraggableItemConfig>(props.config || DEFAULT_DRAGGABLE_ITEM_CONFIG);

  watch([props], () => {
    console.log('----watch---', props);
    Object.keys(formValue).forEach((t) => {
      formValue[t] = props.config[t];
    });
  });

  // const emits = defineEmits<{ (e: 'save', value: DraggableItemConfig) }>();

  const formRef = ref<FormInstance>();

  const dialogShow = ref(false);
  const onOpen = () => {
    dialogShow.value = true;
  };
  const onSave = (_form: FormInstance) => {
    console.log('-----------onSave-------------', unref(formValue));
    // form.validate((valid, fields) => {
    //   if (valid) {
    //     emits('save', unref(formValue));
    //   } else {
    //     console.log('-----------onSave-------------', valid, fields);
    //   }
    // });
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
