<template>
  <el-dialog
    v-model="show"
    :show-close="!isFetching"
    :close-on-click-modal="!isFetching"
    :close-on-press-escape="!isFetching"
  >
    <template #header>
      <div class="header">
        <iconify-icon icon="akar-icons:edit" :size="32" />
        <span>{{ model.id ? '修改模型' : '创建模型' }}</span>
      </div>
    </template>
    <el-form ref="formRef" :model="model" label-position="left">
      <el-form-item label="模型名称" prop="name" :required="true">
        <el-input v-model="model.name" />
      </el-form-item>
      <el-form-item label="显示名称" prop="displayName" :required="true">
        <el-input v-model="model.displayName" />
      </el-form-item>
      <el-form-item label="模型属性" prop="fields" :required="true">
        <FormModel v-model="model.fields" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span>
        <el-button type="primary" @click="onClickSubmit(formRef)" :loading="isFetching"
          >提交</el-button
        >
        <el-button @click="show = false" :disabled="isFetching">关闭</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
  import { FormInstance } from 'element-plus';
  import { ModelEditInstance } from '../types';
  import { SaveModelParam, Model, ModelProperty } from '/@/api/tools/model';
  import { ModelField } from '/@/components/Form/types';
  import { log } from '/@/utils/log';
  import ModelApi from '/@/api/tools/model';
  import { useHttpFetch } from '/@/hooks/fetch';
  import { useMessage } from '/@/hooks/web/useMessage';

  interface FormValue extends Partial<Model> {
    fields: ModelField[];
  }

  const emit = defineEmits<{ (e: 'save', value: Model) }>();
  const { message } = useMessage();
  const formRef = ref<FormInstance>();
  const model = ref<FormValue>();
  const show = ref(false);
  const { execute, isFetching } = useHttpFetch(ModelApi.saveModel);

  const onClickSubmit = async (formEl: FormInstance | undefined) => {
    await formEl.validate(async (valid, fields) => {
      if (valid) {
        const data = { ...model.value };
        data.properties = data.fields.map(getProperty) as ModelProperty[];
        log('save', data);
        execute(data as SaveModelParam)
          .then(() => {
            message('提交成功！', 'success');
            show.value = false;
            emit('save', data as Model);
          })
          .catch((error) => {
            message('提交异常！', 'error');
            log('submit error !', error);
          });

        log('submit!');
      } else {
        message('表单验证失败！', 'error');
        log('submit fail !', fields);
      }
    });
  };

  const onOpen = (value?: Model) => {
    show.value = true;
    if (value) {
      model.value = { ...value, fields: value.properties.map(getField) };
    } else {
      model.value = {
        fields: []
      };
    }
    log('open', model.value);
  };

  const getField = (property: ModelProperty): ModelField => {
    const field: ModelField = {
      ...property,
      id: property.id,
      name: property.name,
      displayName: property.displayName,
      type: property.propertyType,
      array: property.arrayType,
      required: property.required,
      parent: property.parentId,
      parentPath: property.parentIds,
      order: property.order,
      remark: property.remark
    };
    return field;
  };

  const getProperty = (field: ModelField): Omit<ModelProperty, 'modelId'> => {
    const property: Omit<ModelProperty, 'modelId'> = {
      ...field,
      id: field.id,
      name: field.name,
      displayName: field.displayName,
      propertyType: field.type,
      arrayType: field.array,
      required: field.required,
      parentId: field.parent,
      parentIds: field.parentPath,
      order: field.order,
      remark: field.remark
    };
    return property;
  };

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
