<template>
  <div class="table">
    <el-table
      style="width: 100%"
      :row-key="props.rowKey"
      :data="props.data"
      :stripe="true"
      v-loading="props.loading"
      :highlight-current-row="true"
      @row-click="onRowClick"
      @selection-change="onSelectRow"
      @select-all="onSelectRow"
    >
      <el-table-column type="selection" width="55" v-if="props.multiple" />
      <el-table-column type="index" :index="indexMethod" />
      <el-table-column
        v-for="(filed, index) in props.fields"
        :prop="filed.name"
        :label="filed.label"
        :key="index"
        :show-overflow-tooltip="true"
      />
      <el-table-column prop="operate" label="操作">
        <template #default="scope">
          <el-button link type="primary" @click="emit('edit', scope.row)"> 编辑 </el-button>
          <el-button link type="primary" @click="emit('check', scope.row)"> 查看 </el-button>
          <el-button link type="primary" @click="emit('delete', scope.row)"> 删除 </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="page"
      background
      :page-size="props.pageSize ?? TABLE_PAGE_SIZE"
      layout="total, sizes, prev, pager, next, jumper"
      :total="props.total"
      @current-change="(val) => emit('pageChange', val)"
      @size-change="(val) => emit('sizeChange', val)"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { TablePageField } from '/@/api/model/page';
  import { TABLE_PAGE_SIZE } from '/@/settings/constant';

  const selectRows = ref([]);

  const props = defineProps<{
    multiple?: boolean;
    rowKey: string;
    fields: TablePageField[];
    loading: boolean;
    data: any[];
    total: number;
    pageSize?: number;
  }>();

  const emit = defineEmits<{
    (e: 'sizeChange', num: number): void;
    (e: 'pageChange', num: number): void;
    (e: 'edit', row): void;
    (e: 'check', row);
    (e: 'delete', row);
    (e: 'clickRow', row);
    (e: 'selectRow', rows: any[]);
  }>();

  const onRowClick = (row) => {
    if (!props.multiple) {
      const key = row[props.rowKey];
      selectRows.value = [key];
      emit('selectRow', selectRows.value);
    }
  };
  const onSelectRow = (selection) => {
    selectRows.value = getKeys(selection);
    emit('selectRow', selectRows.value);
  };

  const indexMethod = (index: number) => {
    return index + 1;
  };
  const getKeys = (items: any[]) => {
    const keys = [];
    for (let index = 0; index < items.length; index++) {
      const row = items[index];
      const key = row[props.rowKey];
      keys.push(key);
    }
    return keys;
  };
</script>

<style lang="scss" scoped>
  .table {
    .page {
      margin-top: 10px;
    }
  }
</style>
