<!--
 * @Author: zhongkai1010 zhongkai1010@163.com
 * @Date: 2022-09-20 09:07:06
 * @LastEditors: zhongkai1010 zhongkai1010@163.com
 * @LastEditTime: 2022-09-20 17:58:33
 * @FilePath: \onework-tools-ui\src\views\tools\model\components\PropertyGrid.vue
 * @Description:
-->
<template>
  <el-table rowKey="id" :data="data" stripe>
    <el-table-column type="index" label="序号" width="60" :index="indexMethod" />
    <el-table-column label="属性名称" prop="name" :show-overflow-tooltip="true" />
    <el-table-column label="显示名称" prop="displayName" />
    <el-table-column label="属性类型" prop="propertyType" />
    <el-table-column label="数组类型" prop="arrayType" />
    <el-table-column label="默认值" prop="defaultValue" />
    <el-table-column label="是否必填" prop="required">
      <template #default="scope">
        <el-switch
          v-model="scope.row.required"
          @change="(value) => onChangeRequired(value, scope.row)"
        />
      </template>
    </el-table-column>
    <el-table-column label="备注" prop="remark" />
    <el-table-column label="所属组织" prop="objectName" />

    <el-table-column prop="operate" label="操作" align="center">
      <template #default="scope">
        <el-button link type="primary" @click="emit('edit', scope.row)"> 编辑 </el-button>
        <el-button link type="primary" @click="onClickDelete(scope.row)"> 删除 </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
  import { ModelProperty } from '/@/api/tools/model';
  import { generateTreeNodes } from '/@/utils/tree';
  import { useMessage } from '/@/hooks/web/useMessage';

  const { confirm } = useMessage();

  const props = defineProps<{
    data: ModelProperty[];
  }>();

  const data = computed(() => {
    return generateTreeNodes(props.data, 'id', 'parentId', null, 'children', 'order');
  });

  const emit = defineEmits<{
    (e: 'edit', value: ModelProperty): void;
    (e: 'remove', value: ModelProperty): void;
    (e: 'update', value: ModelProperty): void;
  }>();

  const onChangeRequired = (value, property: ModelProperty) => {
    property.required = value;
    emit('update', property);
  };

  const onClickDelete = (property: ModelProperty) => {
    confirm(`确认是否删除,"${property.displayName}"!`).then(async () => {
      emit('remove', property);
    });
  };

  const indexMethod = (index: number) => {
    return index + 1;
  };
</script>
