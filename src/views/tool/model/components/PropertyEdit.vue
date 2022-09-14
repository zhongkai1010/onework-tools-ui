<template>
  <el-dialog v-model="show">
    <template #header>
      <div class="header">
        <iconify-icon icon="carbon:model-alt" :size="32" />
        <span>{{ model ? '修改模型' : '创建模型' }}</span>
      </div>
    </template>
    <el-form v-model="formValue" label-position="top">
      <el-form-item label="属性名称">
        <el-input v-model="formValue.name" />
      </el-form-item>
      <el-form-item label="显示名称">
        <el-input v-model="formValue.displayName" />
      </el-form-item>
      <el-form-item label="属性类型">
        <ModelFormItem v-model="formValue.fields" />
      </el-form-item>
      <el-form-item label="默认值">
        <el-input v-model="formValue.displayName" />
      </el-form-item>
      <el-form-item label="是否必填">
        <el-input v-model="formValue.displayName" />
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="formValue.displayName" />
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
  import { log } from '/@/utils/log';

  import { Field } from '/@/components/DynamicForm/src/ModelFormItem/types';

  interface FormValue {
    name: string;
    displayName: string;
    fields: Field[];
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

  const onClickSubmit = () => {};

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

  const getField = (property: ModelProperty): Field => {
    const field: Field = {
      uid: property.id,
      name: property.name,
      displayName: property.displayName,
      type: property.propertyType,
      array: property.arrayType,
      required: property.required,
      remark: '',
      defalutValue: property.defaultValue,
      enum: [],
      mock: '',
      parent: property.parentId,
      parentPath: property.parentIds,
      order: property.order
    };
    return field;
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
