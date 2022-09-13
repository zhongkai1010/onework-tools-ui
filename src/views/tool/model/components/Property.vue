<template>
  <el-table rowKey="id" :data="data">
    <el-table-column type="index" label="序号" width="60" :index="indexMethod" />
    <el-table-column label="属性名称" prop="name" :show-overflow-tooltip="true" />
    <el-table-column label="显示名称" prop="displayName" />
    <el-table-column label="属性类型" prop="propertyType" />
    <el-table-column label="数组类型" prop="arrayType" />
    <el-table-column label="默认值" prop="defaultValue" />
    <el-table-column label="是否扩展" prop="extended">
      <template #default="scope">
        <el-switch v-model="scope.row.extended" @change="emit('update', scope)" />
      </template>
    </el-table-column>
    <el-table-column label="是否必填" prop="required">
      <template #default="scope">
        <el-switch v-model="scope.row.required" @change="emit('update', scope)" />
      </template>
    </el-table-column>
    <el-table-column label="备注" prop="remark" />
    <el-table-column prop="operate" label="操作" align="center">
      <template #default="scope">
        <el-button link type="primary" @click="emit('edit', scope.row)"> 编辑 </el-button>
        <el-button link type="primary" @click="emit('remove', scope.row)"> 删除 </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
  import { ModelProperty } from '/@/api/tool/model';
  import { generateTreeNodes } from '/@/utils';

  const props = defineProps<{
    data: ModelProperty[];
  }>();

  const data = computed(() => {
    return generateTreeNodes(props.data, 'id', 'parentId', null);
  });

  const emit = defineEmits<{
    (e: 'edit', value: ModelProperty): void;
    (e: 'remove', value: ModelProperty): void;
    (e: 'update', value: ModelProperty): void;
  }>();

  const indexMethod = (index: number) => {
    return index + 1;
  };
</script>
