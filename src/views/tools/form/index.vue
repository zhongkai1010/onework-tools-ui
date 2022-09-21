<!--
 * @Author: zhongkai1010 zhongkai1010@163.com
 * @Date: 2022-09-16 15:26:20
 * @LastEditors: zhongkai1010 zhongkai1010@163.com
 * @LastEditTime: 2022-09-21 17:37:15
 * @FilePath: \onework-tools-ui\src\views\tools\form\index.vue
 * @Description:
-->
<template>
  <page-view
    class="container"
    :gutter="0"
    :bgColor="false"
    v-loading="getFieldsFetch.isFetching.value"
  >
    <el-row :gutter="20">
      <el-col :span="4">
        <CardTitle title="表单" icon="carbon:model-alt">
          <template #button>
            <el-button type="primary">创建</el-button>
          </template>
          <FormTree
            ref="formTreeRef"
            v-loading="getFormFetch.isFetching.value"
            :data="getFormFetch.data.value ?? []"
            @select="onSelectForm"
            @edit="(value) => onEditForm(value)"
            @remove="onRemoveForm"
          />
        </CardTitle>
      </el-col>
      <el-col :span="20">
        <CardTitle :title="title" icon="carbon:property-relationship">
          <template #button>
            <FormSelectDictionary
              :name="DictionarNameEnum.ORGANIZATION"
              v-model="selectOrg"
              style="margin-right: 5px"
              placeholder="请选择组织"
              clearable
              @change="onChangeOrg"
            />
            <el-button type="primary"> 设计表单 </el-button>
          </template>
          <FormFieldGrid :data="fields" />
        </CardTitle>
      </el-col>
    </el-row>
  </page-view>
</template>
<script setup lang="ts">
  import _ from 'lodash';
  import formApi, { Form, FormField } from '/@/api/tools/form';
  import { DictionarNameEnum } from '/@/enums/dictionarNameEnum';
  import { useHttpFetch } from '/@/hooks/fetch';
  import FormTree from './component/FormTree.vue';
  import FormFieldGrid from './component/FormFieldGrid.vue';
  import { log } from '/@/utils/log';
  const getFieldsFetch = useHttpFetch(formApi.getFormFields);
  const fields = computed<FormField[]>({
    get: () => {
      return getFieldsFetch.data.value ?? [];
    },
    set: (value) => {
      getFieldsFetch.data.value = value;
    }
  });

  const getFormFetch = useHttpFetch(formApi.getAllForms, null, {
    immediate: true
  });
  const getFeildFetch = useHttpFetch(formApi.getFormFields);
  const formTreeRef = ref();
  const selectOrg = ref<string>();
  const current = ref<Form | null>();
  const title = computed(() => {
    if (current.value) {
      return `${current.value.displayName}(${current.value.name}) - 表单字段`;
    }
    return '表单字段';
  });
  const onSelectForm = async (form: Form) => {
    log('select form', form);
    if (current.value?.id == form.id) return;
    current.value = form;
    await getFieldsFetch.execute({ formId: form.id, objectId: selectOrg.value });
  };
  const onEditForm = (form: Form) => {
    log('edit form', form);
  };
  const onChangeOrg = async (value) => {
    if (current.value) {
      await getFeildFetch.execute({ formId: current.value.id, objectId: value });
    }
  };
  const onRemoveForm = (form: Form) => {
    const index = getFormFetch.data.value.findIndex((t) => t.id == form.id);
    getFormFetch.data.value.splice(index, 1);
    if (current?.value.id === form.id) {
      fields.value = [];
      current.value = null;
    }
  };
</script>

<style lang="scss" scoped>
  .container {
  }
</style>
