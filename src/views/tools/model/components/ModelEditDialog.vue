<template>
  <el-dialog
    v-model="show"
    :show-close="!saveModelFetch.isFetching.value"
    :close-on-click-modal="!saveModelFetch.isFetching.value"
    :close-on-press-escape="!saveModelFetch.isFetching.value"
  >
    <template #header>
      <div class="header">
        <iconify-icon icon="akar-icons:edit" :size="32" />
        <span>{{ model.id ? '修改模型' : '创建模型' }}</span>
      </div>
    </template>
    <el-form ref="formRef" :model="model" label-position="top">
      <el-form-item
        label="模型名称"
        prop="name"
        :required="true"
        :rules="{ required: true, message: '模型名称是必填项！' }"
      >
        <el-input v-model="model.name" />
      </el-form-item>
      <el-form-item
        label="显示名称"
        prop="displayName"
        :rules="{ required: true, message: '显示名称是必填项！' }"
      >
        <el-input v-model="model.displayName" />
      </el-form-item>
      <el-form-item label="分组" prop="displayName">
        <el-input v-model="model.group" />
      </el-form-item>
      <el-form-item label="模型属性" prop="fields">
        <FormModel v-model="properties" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span>
        <el-button
          type="primary"
          :loading="saveModelFetch.isFetching.value"
          @click="onClickSubmit(formRef)"
          >提交</el-button
        >
        <el-button @click="show = false" :disabled="saveModelFetch.isFetching.value"
          >关闭</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
  import { FormInstance } from 'element-plus';
  import { ModelEditInstance } from '../types';
  import { useHttpFetch } from '/@/hooks/fetch';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { ModelField } from '/@/components/Form/types';
  import { log } from '/@/utils/log';
  import { DEFULT_MODEL, getField, getProperty } from '../../helps';
  import modelApi, { Model, EditModel } from '/@/api/tools/model';

  const { message } = useMessage();
  const emit = defineEmits<{ (e: 'save', value: Model) }>();
  const saveModelFetch = useHttpFetch(modelApi.saveModel);

  const formRef = ref<FormInstance>();
  const show = ref(false);
  const model = ref<EditModel>();
  const properties = ref<ModelField[]>([]);
  const onClickSubmit = async (formEl: FormInstance | undefined) => {
    await formEl.validate(async (valid, fields) => {
      if (!valid) {
        log('submit model verification failed', fields);
        message('表单验证失败！', 'error');
        return;
      }
      const data = {
        ...model.value,
        properties: properties.value.map(getProperty)
      } as EditModel;
      const result = await saveModelFetch.execute(data);
      show.value = false;
      message('提交成功！', 'success');
      emit('save', result);
    });
  };
  const onOpen = async (value?: Model) => {
    show.value = true;
    if (value) {
      model.value = value;
      properties.value = (model.value.properties ?? []).map(getField);
    } else {
      model.value = { ...DEFULT_MODEL };
      properties.value = [];
    }
  };
  onMounted(() => {
    model.value = { ...DEFULT_MODEL };
    properties.value = [];
  });
  defineExpose<ModelEditInstance>({
    open: onOpen
  });
</script>

<style lang="scss" scoped>
  .header {
    i {
      margin-right: 5px;
    }
    display: flex;
    align-items: center;
  }
  :deep(.el-form-item__label) {
    font-weight: 600;
  }
</style>
