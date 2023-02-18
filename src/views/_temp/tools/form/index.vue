<!--
 * @Author: zhongkai1010 zhongkai1010@163.com
 * @Date: 2022-09-16 15:26:20
 * @LastEditors: zhongkai1010 zhongkai1010@163.com
 * @LastEditTime: 2022-09-23 17:14:23
 * @FilePath: \onework-tools-ui\src\views\tools\form\index.vue
 * @Description:
-->
<template>
  <page-view class="container" :gutter="0" :bgColor="false">
    <el-row :gutter="20">
      <el-col :span="4">
        <CardTitle title="表单" icon="carbon:model-alt">
          <template #button>
            <el-button type="primary" @click="formEditRef.open()">创建</el-button>
          </template>
          <FormTree
            ref="formTreeRef"
            v-loading="formHook.isFetching.value"
            :data="formHook.data.value ?? []"
            @select="(form) => formHook.setCurrent(form)"
            @edit="(form) => formEditRef.open(form)"
            @remove="(form) => formHook.removeForm(form)"
          />
        </CardTitle>
      </el-col>
      <el-col :span="20">
        <CardTitle :title="title" icon="carbon:property-relationship">
          <template #button>
            <FormSelectDictionary
              :name="DictionarNameEnum.ORGANIZATION"
              v-model="formHook.selectOrg.value"
              style="margin-right: 5px"
              placeholder="请选择组织"
              clearable
            />
            <el-button type="primary"> 设计表单 </el-button>
          </template>
          <FormFieldGrid :data="formHook.fields.value" />
        </CardTitle>
      </el-col>
    </el-row>
    <FormEditDialog ref="formEditRef" />
  </page-view>
</template>
<script setup lang="ts">
  import _ from 'lodash';

  import { DictionarNameEnum } from '/@/enums/dictionarNameEnum';

  import FormTree from './component/FormTree.vue';
  import FormFieldGrid from './component/FormFieldGrid.vue';
  import FormEditDialog from './component/FormEditDialog.vue';
  import { FormEditInstance } from './types';

  import useForm from './useForm';

  const formHook = useForm();
  const formTreeRef = ref();
  const formEditRef = ref<FormEditInstance>();

  const title = computed(() => {
    if (formHook.current.value) {
      return `${formHook.current.value.displayName}(${formHook.current.value.name}) - 表单字段`;
    }
    return '表单字段';
  });
</script>

<style lang="scss" scoped>
  .container {
  }
</style>
