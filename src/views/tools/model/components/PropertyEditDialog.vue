<!--
 * @Author: zhongkai1010 zhongkai1010@163.com
 * @Date: 2022-09-21 09:06:11
 * @LastEditors: zhongkai1010 zhongkai1010@163.com
 * @LastEditTime: 2022-09-23 16:44:25
 * @FilePath: \onework-tools-ui\src\views\tools\model\components\PropertyEditDialog.vue
 * @Description:
-->
<template>
  <el-dialog
    v-model="show"
    :show-close="!savePropertyFetch.isFetching.value"
    :close-on-click-modal="!savePropertyFetch.isFetching.value"
    :close-on-press-escape="!savePropertyFetch.isFetching.value"
  >
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
      <el-row :gutter="20">
        <el-col :span="12" :offset="0">
          <el-form-item label="属性类型">
            <FormPropertyType v-model="property.propertyType" disabled style="width: 100%" />
          </el-form-item>
        </el-col>
        <el-col :span="12" :offset="0">
          <el-form-item label="数组类型">
            <FormPropertyType v-model="property.arrayType" disabled style="width: 100%" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="是否必填">
        <el-switch v-model="property.required" />
      </el-form-item>
      <el-form-item label="默认值">
        <el-input v-model="property.defaultValue" />
      </el-form-item>

      <el-form-item label="备注">
        <el-input v-model="property.remark" />
      </el-form-item>
      <el-form-item label="组织编号">
        <FormSelectDictionary
          :name="DictionarNameEnum.ORGANIZATION"
          v-model="property.orgId"
          style="margin-right: 5px; width: 100%"
          placeholder="请选择组织"
          clearable
        />
      </el-form-item>
    </el-form>

    <template #footer>
      <span>
        <el-button
          type="primary"
          @click="onClickSubmit"
          :loading="savePropertyFetch.isFetching.value"
          >提交</el-button
        >
        <el-button @click="show = false" :disabled="savePropertyFetch.isFetching.value"
          >关闭</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
  import { PropertyEditInstance } from '../types';
  import modelApi, { Model, ModelProperty } from '/@/api/tools/model';
  import { DictionarNameEnum } from '/@/enums/dictionarNameEnum';
  import { useHttpFetch } from '/@/hooks/fetch';

  // import { log } from '/@/utils/log';
  const emit = defineEmits<{
    (e: 'save', value: ModelProperty): void;
  }>();
  const model = ref<Model>();
  const property = ref<ModelProperty>();
  const show = ref(false);

  const savePropertyFetch = useHttpFetch(modelApi.saveProperty);

  const onClickSubmit = async () => {
    const result = await savePropertyFetch.execute({
      modelId: model.value.id,
      data: property.value
    });
    show.value = false;
    emit('save', result);
  };
  const onOpen = (m: Model, p: ModelProperty) => {
    show.value = true;
    model.value = m;
    property.value = p;
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
