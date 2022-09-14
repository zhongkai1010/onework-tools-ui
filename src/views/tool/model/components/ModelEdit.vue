<template>
  <el-dialog v-model="show">
    <template #header>
      <div class="header">
        <iconify-icon icon="carbon:model-alt" :size="32" />
        <span>{{ model ? '修改模型' : '创建模型' }}</span>
      </div>
    </template>
    <el-form v-model="formValue" label-position="top">
      <el-form-item label="模型名称">
        <el-input v-model="formValue.name" />
      </el-form-item>
      <el-form-item label="显示名称">
        <el-input v-model="formValue.displayName" />
      </el-form-item>
      <el-form-item label="模型属性">
        <FormModel v-model="formValue.fields" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span>
        <el-button @click="onClickSubmit">提交</el-button>
        <el-button type="primary" @click="show = false">关闭</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
  import { ModelEditInstance } from '../types';
  import { Model, ModelProperty } from '/@/api/tool/model';
  import { ModelField } from '/@/components/Form/types';
  import { log } from '/@/utils/log';

  interface FormValue {
    name: string;
    displayName: string;
    fields: ModelField[];
  }

  const model = ref<FormValue>();
  const show = ref(false);

  const formValue = computed<FormValue>({
    get: () => {
      return model.value;
    },
    set: (value) => {
      model.value = value;
    }
  });

  const onClickSubmit = () => {
    log('save', formValue.value);
  };

  const onOpen = (value?: Model) => {
    show.value = true;
    if (value) {
      model.value = {
        name: value.name,
        displayName: value.displayName,
        fields: value.properties.map(getField)
      };
    } else {
      model.value = {
        name: '',
        displayName: '',
        fields: []
      };
    }
    log('open', model.value);
  };

  const getField = (property: ModelProperty): ModelField => {
    const field: ModelField = {
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
  const getProperty = (field: ModelField): ModelProperty => {
    const property: ModelProperty = {
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
</style>
