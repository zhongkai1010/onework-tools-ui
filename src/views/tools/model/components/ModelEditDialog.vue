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
    <el-form
      ref="formRef"
      :model="model"
      label-position="top"
      v-loading="getModelFetch.isFetching.value"
    >
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

  import modelApi, { Model, ModelProperty, EditModel } from '/@/api/tools/model';

  import { useHttpFetch } from '/@/hooks/fetch';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { ModelField } from '/@/components/Form/types';

  const { message } = useMessage();
  const emit = defineEmits<{ (e: 'save', value: Model) }>();
  const saveModelFetch = useHttpFetch(modelApi.saveModel);
  const getModelFetch = useHttpFetch(modelApi.getModel);

  const formRef = ref<FormInstance>();
  const show = ref(false);
  const model = computed<EditModel>({
    get: () => {
      let model: EditModel = {
        name: '',
        displayName: '',
        properties: []
      };
      if (getModelFetch.data.value) {
        model = getModelFetch.data.value;
      }
      return model;
    },
    set: (value) => {
      getModelFetch.data.value = value as Model;
    }
  });
  const properties = ref<ModelField[]>([]);

  const onClickSubmit = async (formEl: FormInstance | undefined) => {
    await formEl.validate(async (valid) => {
      if (valid) {
        const data: EditModel = {
          id: model.value.id,
          name: model.value.name,
          displayName: model.value.displayName,
          group: model.value.group,
          properties: properties.value.map(getProperty)
        };

        saveModelFetch
          .execute(data as EditModel)
          .then((result) => {
            message('提交成功！', 'success');
            show.value = false;
            emit('save', result as Model);
          })
          .catch(() => {
            message('提交异常！', 'error');
          });
      } else {
        message('表单验证失败！', 'error');
      }
    });
  };

  const onOpen = (value?: Model) => {
    show.value = true;
    if (value) {
      getModelFetch.execute(value.id).then((t) => {
        model.value = t;
        properties.value = (t.properties ?? []).map(getField);
      });
    } else {
      model.value = {
        name: '',
        displayName: '',
        properties: []
      };
      properties.value = [];
    }
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
