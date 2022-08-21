<template>
  <page-view class="container">
    <data-table v-bind="config" ref="tableRef" />
  </page-view>
</template>

<script setup lang="ts">
  import { DataTableProps } from '/@/components/ConfigTable';

  let tableRef = ref<{ selectRows: any[] }>();

  const config = {
    title: '表格示例',
    rowKey: 'uid',
    serialNumber: true,
    multiple: true,
    pagination: true,

    operate: ['remove', 'show', 'edit'],
    toolbar: ['add', 'column', 'edit', 'remove', 'search', 'refresh'],
    url: '/api/test/getPageTableData',
    fields: [
      {
        label: 'ID',
        name: 'uid',
        type: 'string',
        hide: true,
        editable: {
          hide: true,
        },
      },
      {
        label: '字段名称',
        name: 'fieldName',
        type: 'string',
        order: 2,
        width: 120,
        columnProps: {
          sortable: true,
        },
      },
      {
        label: '组件类型',
        name: 'componentType',
        type: 'string',
        order: 1,
        editable: {
          component: 'radio',
          props: {
            options: [
              {
                label: 'radio',
                value: 'radio',
              },
            ],
          },
        },
      },
      {
        label: '标题',
        name: 'title',
        type: 'string',
      },
      {
        label: '占位符提示',
        name: 'placeholderTips',
        type: 'string',
      },
      {
        label: '表单栅格',
        name: 'formGrid',
        type: 'string',
      },
      {
        label: '最小行数',
        name: 'minimum',
        type: 'string',
      },
      {
        label: '最大行数',
        name: 'maximum',
        type: 'string',
      },
    ],
  } as DataTableProps;
  const selectRows = computed(() => {
    if (tableRef.value) {
      return tableRef.value.selectRows;
    }
    return [];
  });

  console.log(tableRef.value);
  watch([selectRows], () => {
    console.log('`````````watch selectRows```````````', selectRows.value);
  });
</script>

<style scoped lang="scss"></style>
