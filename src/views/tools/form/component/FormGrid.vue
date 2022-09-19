<template>
  <el-table rowKey="id" :data="data">
    <el-table-column type="index" label="序号" width="60" :index="indexMethod" />
    <el-table-column label="标签" prop="label" />
    <el-table-column label="表单名称" prop="name" />
    <el-table-column label="默认值" prop="defaultValue" />
    <el-table-column label="组件" prop="component" />
    <el-table-column label="步骤" prop="setp" />
    <el-table-column label="分组" prop="group" />
    <el-table-column label="备注" prop="remark" :show-overflow-tooltip="true" />

    <el-table-column prop="operate" label="操作" align="center">
      <template #default="scope">
        <el-button link type="primary" @click="emit('edit', scope.row)"> 编辑 </el-button>
        <el-button link type="primary" @click="emit('remove', scope.row)"> 删除 </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
  import { FormField } from '/@/api/tools/form';

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

  const indexMethod = (index: number) => {
    return index + 1;
  };
</script>

<style scoped></style>
