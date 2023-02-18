<template>
  <page-view class="container" :gutter="0" :bg-color="false">
    <el-card class="card-container">
      <template #header>
        <div class="header">
          <iconify-icon icon="ant-design:table-outlined" :size="18" />
          <span>动态表格</span>
          <div class="tool">
            <el-button type="primary">查看配置</el-button>
          </div>
        </div>
      </template>
      <data-table v-bind="config" ref="tableRef" />
    </el-card>
  </page-view>
</template>

<script setup lang="ts">
  import { DataTableConfig } from '/@/components/DynamicTable';
  import { log } from '/@/utils/log';

  let tableRef = ref<{ selectRows: any[] }>();

  const config: DataTableConfig = {
    title: '表格示例',
    rowKey: 'uid',
    serialNumber: true,
    multiple: true,
    pagination: true,
    props: {},
    operate: ['remove', 'show', 'edit'],
    toolbar: ['add', 'column', 'edit', 'remove', 'search', 'refresh'],
    remote: {
      url: '/api/test/getPageTableData',
      method: 'get'
    },
    fields: [
      {
        label: 'ID',
        name: 'uid',
        type: 'string',
        hide: true,
        editable: {
          hide: true
        }
      },
      {
        label: '字段名称',
        name: 'fieldName',
        type: 'string',
        order: 2,
        props: {
          sortable: true
        }
      },
      {
        label: '组件类型',
        name: 'componentType',
        type: 'string',
        order: 1,
        editable: {
          component: {
            component: 'el-radio',
            config: {
              options: [
                {
                  label: 'radio',
                  value: 'radio'
                }
              ]
            }
          }
        }
      },
      {
        label: '标题',
        name: 'title',
        type: 'string'
      },
      {
        label: '占位符提示',
        name: 'placeholderTips',
        type: 'string'
      },
      {
        label: '表单栅格',
        name: 'formGrid',
        type: 'string'
      },
      {
        label: '最小行数',
        name: 'minimum',
        type: 'string'
      },
      {
        label: '最大行数',
        name: 'maximum',
        type: 'string'
      }
    ]
  };
  const selectRows = computed(() => {
    if (tableRef.value) {
      return tableRef.value.selectRows;
    }
    return [];
  });

  watch([selectRows], () => {
    log('select row watch', selectRows.value);
  });
</script>

<style scoped lang="scss">
  .container {
    .card-container {
      .header {
        display: flex;
        align-items: center;
        i {
          margin-right: 5px;
        }
        .tool {
          margin-left: auto;
        }
      }
      :deep(.el-card__body) {
        padding: 20px;
      }
    }
  }
</style>
