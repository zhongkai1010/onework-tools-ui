<!--
 * @Author: zhongkai1010 zhongkai1010@163.com
 * @Date: 2022-09-20 09:07:06
 * @LastEditors: zhongkai1010 zhongkai1010@163.com
 * @LastEditTime: 2022-09-21 17:38:35
 * @FilePath: \onework-tools-ui\src\views\tools\form\component\FormFieldGrid.vue
 * @Description:
-->
<template>
  <el-table rowKey="id" :data="data" stripe>
    <el-table-column type="index" label="序号" width="60" :index="indexMethod" />
    <el-table-column label="标签" prop="label" :show-overflow-tooltip="true" />
    <el-table-column label="字段名称" prop="name" />
    <el-table-column label="组件" prop="component" />
    <el-table-column label="默认值" prop="defaultValue" />
    <el-table-column label="是否必填" prop="required">
      <template #default="scope">
        <el-switch
          v-model="scope.row.required"
          @change="(value) => onChangeRequired(value, scope.row)"
        />
      </template>
    </el-table-column>
    <el-table-column label="步骤" prop="setp" />
    <el-table-column label="分组" prop="group" />
    <el-table-column label="所属组织" prop="orgId">
      <template #default="scope">
        {{ isNumber(scope.row.orgId) ? orgs[scope.row.orgId] : '' }}
      </template>
    </el-table-column>
    <el-table-column prop="operate" label="操作" align="center">
      <template #default="scope">
        <el-button link type="primary" @click="emit('edit', scope.row)"> 编辑 </el-button>
        <el-button link type="primary" @click="onClickDelete(scope.row)"> 删除 </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
  import { isNumber } from 'lodash';
  import { FormField } from '/@/api/tools/form';

  import { useMessage } from '/@/hooks/web/useMessage';

  const { confirm } = useMessage();

  const orgs = [null, '组织1', '组织2', '组织3'];

  const props = defineProps<{
    data: FormField[];
  }>();

  const data = computed(() => {
    return props.data;
  });

  const emit = defineEmits<{
    (e: 'edit', value: FormField): void;
    (e: 'remove', value: FormField): void;
    (e: 'update', value: FormField): void;
  }>();

  const onChangeRequired = (value, field: FormField) => {
    field.required = value;
    emit('update', field);
  };

  const onClickDelete = (field: FormField) => {
    confirm(`确认是否删除,"${field.label}"!`).then(async () => {
      emit('remove', field);
    });
  };

  const indexMethod = (index: number) => {
    return index + 1;
  };
</script>
