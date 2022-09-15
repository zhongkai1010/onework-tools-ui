<template>
  <el-dialog v-model="show">
    <template #header>
      <div class="header">
        <iconify-icon icon="carbon:model-alt" :size="32" />
        <span>{{ property.id ? '修改模型' : '创建模型' }}</span>
      </div>
    </template>
    <el-form v-model="property" label-position="top">
      <el-form-item label="属性名称">
        <el-input v-model="property.name" />
      </el-form-item>
      <el-form-item label="显示名称">
        <el-input v-model="property.displayName" />
      </el-form-item>
      <el-form-item label="属性类型">
        <FormPropertyType v-model="property.propertyType" disabled />
      </el-form-item>
      <el-form-item label="数组类型">
        <FormPropertyType v-model="property.arrayType" disabled />
      </el-form-item>
      <el-form-item label="是否必填">
        <el-switch v-model="property.required" />
      </el-form-item>
      <el-form-item label="默认值">
        <el-input v-model="property.defaultValue" />
      </el-form-item>
      <el-form-item label="顺序">
        <el-input-number v-model="property.order" />
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="property.remark" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span>
        <el-button type="primary" @click="onClickSubmit">提交</el-button>
        <el-button @click="show = false">关闭</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
  import { PropertyEditInstance } from '../types';
  import { ModelProperty } from '/@/api/tool/model';

  // import { log } from '/@/utils/log';
  const emit = defineEmits<{
    (e: 'save', value: ModelProperty): void;
  }>();
  const property = ref<ModelProperty>();
  const show = ref(false);

  const onClickSubmit = () => {
    emit('save', property.value);
  };

  const onOpen = (value: ModelProperty) => {
    show.value = true;
    property.value = { ...value };
  };

  defineExpose<PropertyEditInstance>({
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
