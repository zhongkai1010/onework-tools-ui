<template>
  <page-view>
    <el-table
      :data="tableData"
      :tree-props="{ children: 'children' }"
      row-key="name"
      default-expand-all
    >
      <el-table-column prop="meta.title" label="显示名称">
        <template #default="scope">
          {{ $t(scope.row.meta?.title) }}
        </template>
      </el-table-column>
      <el-table-column prop="name" label="名称" />

      <el-table-column prop="path" label="路径">
        <template #default="scope">
          {{ scope.row.path }}
        </template>
      </el-table-column>
      <el-table-column prop="meta.icon" label="图标">
        <template #default="scope">
          <iconify-icon :icon="scope.row.meta?.icon" />
        </template>
      </el-table-column>
      <el-table-column prop="meta.orderNo" label="顺序" :sortable="true">
        <template #default="scope">
          {{ scope.row.meta?.orderNo }}
        </template>
      </el-table-column>
    </el-table>
  </page-view>
</template>

<script lang="ts" setup>
  import { getModuleRoutes } from '/@/router/utils';
  const tableData = getModuleRoutes();
  console.log(tableData);
</script>
