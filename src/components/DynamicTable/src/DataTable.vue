<template>
  <div class="container">
    <div class="toolbar-container" v-if="state.showToolbar">
      <div class="title" v-if="props.title">{{ props.title }}</div>
      <div class="button">
        <el-space wrap>
          <el-button type="primary" v-if="state.toolbar.refresh" @click="onClickToolbarRefresh">
            <iconify-icon icon="ci:refresh" />
          </el-button>
          <el-button type="primary" v-if="state.toolbar.add" @click="onClickToolbarAdd"
            >新增</el-button
          >
          <el-button v-if="state.toolbar.edit" @click="onClickToolbarEdit">编辑</el-button>
          <el-button type="danger" v-if="state.toolbar.remove" @click="onClickToolbarRemove"
            >删除</el-button
          >
        </el-space>
      </div>
      <div class="search">
        <el-input
          placeholder="请输入搜索关键字"
          @input="onInputKeywords"
          :model-value="keywords"
          clearable
          @clear="onClearKeywords"
          @keyup.enter="onInputEnter"
          v-if="state.toolbar.search"
        />
        <el-button-group v-if="state.toolbar.search || state.toolbar.column">
          <el-button @click="onClickToolbarSearch" type="primary">
            <iconify-icon icon="ant-design:search-outlined" v-if="state.toolbar.search" />
          </el-button>
          <el-popover placement="bottom" v-if="state.toolbar.column">
            <template #reference>
              <el-button>
                <iconify-icon icon="ci:table" />
              </el-button>
            </template>
            <el-checkbox-group :model-value="showFields" @change="onFieldCheck">
              <el-checkbox
                v-for="(field, index) in props.fields"
                :key="index"
                :label="field.label"
              />
            </el-checkbox-group>
          </el-popover>
        </el-button-group>
      </div>
    </div>
    <el-table
      class="table-container"
      :row-key="props.rowKey"
      :data="data"
      :stripe="true"
      v-loading="loading"
      :highlight-current-row="true"
      @row-click="onClickRow"
      @selection-change="onSelectRow"
      @select-all="onSelectRow"
      @sort-change="onSortChange"
      v-bind="props.table"
    >
      <el-table-column type="selection" width="60" v-if="props.multiple" />
      <el-table-column
        type="index"
        label="序号"
        width="60"
        :index="indexMethod"
        v-if="props.serialNumber"
      />
      <el-table-column
        v-for="(filed, index) in fields"
        :prop="filed.name"
        :label="filed.label"
        :key="index"
        :show-overflow-tooltip="true"
        v-bind="filed.props"
      />
      <el-table-column prop="operate" label="操作" v-if="state.showOperate" align="center">
        <template #default="scope">
          <el-button
            link
            type="primary"
            @click="onClickOperateEdit(scope)"
            v-if="(props.operate??[] as OperateType[]).includes('edit')"
          >
            编辑
          </el-button>
          <el-button
            link
            type="primary"
            @click="onClickOperateShow(scope)"
            v-if="(props.operate??[] as OperateType[]).includes('show')"
          >
            查看
          </el-button>
          <el-button
            link
            type="primary"
            @click="onClickOperateRemove(scope)"
            v-if="(props.operate??[] as OperateType[]).includes('remove')"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-if="state.showPage"
      class="page-container"
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      v-bind="typeof props.pagination == 'object' ? props.pagination : {}"
      @current-change="onChangePage"
      @size-change="onChangePageSize"
    />
    <form-dialog ref="dialogRef" :fields="props.fields" />
  </div>
</template>

<script setup lang="ts">
  import { PaginationProps } from 'element-plus';
  import _, { isEmpty } from 'lodash';
  import { isArray } from 'lodash';
  import { ref } from 'vue';
  import { DataTableFieldProps, FormDialogInstance, OperateType } from '..';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { http } from '/@/plugins/axios';
  import { TABLE_DEFAULT_PAGE_SIZE } from '/@/settings/constant';
  import FormDialog from './FormDialog.vue';

  const { message } = useMessage();

  const props = defineProps<{
    title?: string;
    rowKey?: string; // 数据主键
    serialNumber?: boolean; //是否显示序号
    fields: DataTableFieldProps[]; // 字段
    multiple?: boolean; // 是否多选
    data?: any[];
    pagination?: boolean | PaginationProps;
    toolbar?: OperateType[]; // 工具栏选项
    operate?: OperateType[];
    url?: string;
    remote?: {
      get: string;
      add: string;
      remove: string;
    };
    table?: any;
  }>();

  const data = ref(props.data ?? []);

  const dialogRef = ref<FormDialogInstance | undefined>();

  const selectRow = ref(null);
  const selectRows = ref([]);
  const loading = ref(false);
  const total = ref(props.data ? props.data.length : 0);
  const showFields = ref(props.fields.filter((t) => !t.hide).map((t) => t.label));
  const keywords = ref('');
  const fields = computed(() => {
    let temp = props.fields.filter((t) => showFields.value.includes(t.label));
    if (temp.length > 0) {
      temp = temp.sort((a, b) => a.order - b.order);
    }
    return temp;
  });

  const state = computed(() => {
    return {
      showOperate: typeof props.operate == 'boolean' ? props.operate : props.operate != undefined,
      showPage:
        typeof props.pagination == 'boolean' ? props.pagination : props.pagination != undefined,
      isRemote: typeof props.url != 'undefined' || (props.remote && props.remote?.get),
      showToolbar: props.title || props.toolbar,
      operate: {
        edit: props.operate?.includes('edit'),
        remove: props.operate?.includes('remove'),
        show: props.operate?.includes('show'),
      },
      toolbar: {
        refresh: props.toolbar?.includes('refresh'),
        add: props.toolbar?.includes('edit'),
        edit: props.toolbar?.includes('edit'),
        remove: props.toolbar?.includes('remove'),
        search: props.toolbar?.includes('search'),
        column: props.toolbar?.includes('column'),
      },
    };
  });

  const requestConfig = reactive({
    page: 1,
    pageSize: state.value.showPage
      ? (props.pagination as PaginationProps).pageSize ?? TABLE_DEFAULT_PAGE_SIZE
      : TABLE_DEFAULT_PAGE_SIZE,
    order: undefined,
    sort: undefined,
    keywords: undefined,
  });

  /**
   * 辅助函数
   */
  const checkResult = (result) => {
    if (!result) {
      message('请求表格数据结果异常！', 'error');
      return false;
    }
    if (state.value.showPage && !Object.keys(result).includes('total')) {
      message('请求表格数据结果异常！', 'error');
      return false;
    }
    if (!state.value.showPage && !isArray(result)) {
      message('请求表格数据结果异常！', 'error');
      return false;
    }
    return true;
  };

  const loadData = (params: Record<string, any>) => {
    loading.value = true;
    http
      .get({
        url: props.url || props.remote?.get,
        params,
      })
      .then((result) => {
        if (!checkResult(result)) return;
        if (state.value.showPage) {
          data.value = result.data;
          total.value = result.total;
        } else {
          data.value = result;
          total.value = data.value.length;
        }
      })
      .finally(() => {
        loading.value = false;
      });
  };
  watch([requestConfig], () => {
    if (state.value.isRemote) {
      loadData(requestConfig);
    }
    if (state.value.showPage && !state.value.isRemote) {
      loading.value = true;
      setTimeout(() => {
        let filterSize =
          requestConfig.page <= 0 ? 0 : requestConfig.pageSize * (requestConfig.page - 1);
        data.value = props.data.slice(filterSize, filterSize + requestConfig.pageSize);
        loading.value = false;
      }, 500);
    }
  });

  /**
   * 事件
   */
  const onChangePage = (val) => {
    requestConfig.page = val;
  };
  const onChangePageSize = (val) => {
    requestConfig.pageSize = val;
  };
  const onClickRow = (row) => {
    if (!props.multiple) {
      selectRows.value = [row];
    }
    selectRow.value = row;
  };
  const onSelectRow = (selection) => {
    selectRows.value = selection;
  };

  const onClickOperateEdit = (row: any) => {
    console.log('-----------onClickOperateEdit--------', row);
  };

  const onClickOperateShow = (row: any) => {
    console.log('-----------onClickOperateShow--------', row);
  };
  const onClickOperateRemove = (row: any) => {
    console.log('-----------onClickOperateRemove--------', row);
  };
  const onClickToolbarRefresh = () => {
    loadData(requestConfig);
  };
  const onClickToolbarAdd = () => {
    dialogRef.value.open();
  };
  const onClickToolbarEdit = () => {
    if (isEmpty(selectRow)) {
      message('请选择一行数据操作！', 'warning');
    } else {
      dialogRef.value.open(true, unref(selectRow));
    }
  };
  const onClickToolbarRemove = () => {
    if (isEmpty(selectRow)) {
      message('请选择一行数据操作！', 'warning');
    }
    console.log('-----------onClickToolbarRemove--------');
  };
  const onInputKeywords = (val) => {
    keywords.value = val;
    console.log('-----------onInputKeywords--------', val);
  };
  const onClearKeywords = () => {
    requestConfig.keywords = undefined;
    console.log('-----------onClearKeywords--------');
  };
  const onInputEnter = () => {
    requestConfig.keywords = keywords.value;
    console.log('-----------onInputEnter--------');
  };
  const onClickToolbarSearch = () => {
    if (!isEmpty(keywords.value)) {
      requestConfig.keywords = keywords.value;
    }
    console.log('-----------onClickToolbarSearch--------');
  };
  const indexMethod = (index: number) => {
    return index + 1;
  };
  const onSortChange = ({ column, prop, order }) => {
    console.log('----------onSortChange------', column);
    console.log('----------prop------', prop);
    console.log('----------order------', order);
    if (column && state.value.isRemote) {
      requestConfig.order = prop;
      requestConfig.sort = order === 'ascending' ? 'asc' : 'desc';
    }
  };
  const onFieldCheck = (val) => {
    showFields.value = val;
  };
  onMounted(() => {
    data.value = [];
    total.value = 0;
    requestConfig.page = 0;
    requestConfig.pageSize = TABLE_DEFAULT_PAGE_SIZE;
    requestConfig.keywords = undefined;
    selectRows.value = [];
    selectRow.value = null;
  });
  defineExpose({ selectRows });
</script>

<style lang="scss" scoped>
  .container {
    .table-container {
      height: auto;
    }
    .toolbar-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 0;

      .title {
        margin: 0px 20px;
        font-size: large;
        font-weight: 500;
      }

      .button {
        margin-right: auto;
      }

      .search {
        display: flex;

        .el-input {
          margin-right: 20px;
        }

        .el-button-group {
          display: flex;
        }
      }
    }

    .page-container {
      margin-top: 10px;
    }
  }
</style>
