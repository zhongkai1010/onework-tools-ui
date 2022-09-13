<template>
  <div class="container">
    <toolbar
      :title="props.title"
      :fields="props.fields"
      :toolbar="props.toolbar"
      :select-row="selectRow"
      @refresh="loadData(requestConfig)"
      @add="dialogRef.open()"
      @edit="dialogRef.open('edit', selectRow)"
      @remove="onRemoveRow"
      @chang-keywords="(val) => (requestConfig.keywords = val)"
      @clear-keywords="requestConfig.keywords = undefined"
      @chang-field="(val) => (showFields = val)"
      v-if="state.showToolbar"
    />
    <el-table
      class="table-container"
      v-bind="props.props"
      :row-key="props.rowKey"
      :data="data"
      :stripe="true"
      v-loading="loading"
      :highlight-current-row="true"
      @row-click="onClickRow"
      @selection-change="onSelectRow"
      @select-all="onSelectRow"
      @sort-change="onSortChange"
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
        v-bind="filed.props"
        :prop="filed.name"
        :label="filed.label"
        :key="index"
        :show-overflow-tooltip="true"
      />
      <el-table-column prop="operate" label="操作" v-if="state.showOperate" align="center">
        <template #default="scope">
          <el-button
            link
            type="primary"
            @click="dialogRef.open('edit', scope.row)"
            v-if="props.operate.includes('edit')"
          >
            编辑
          </el-button>
          <el-button
            link
            type="primary"
            @click="dialogRef.open('show', scope.row)"
            v-if="props.operate.includes('show')"
          >
            查看
          </el-button>
          <el-button
            link
            type="primary"
            @click="onRemoveRow(scope.row)"
            v-if="props.operate.includes('remove')"
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
  import _ from 'lodash';
  import { isArray } from 'lodash';
  import { ref } from 'vue';
  import { DataTableFieldConfig, DataTableRemoteConfig, FormDialogInstance, OperateType } from '..';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { http } from '/@/plugins/axios';
  import { TABLE_DEFAULT_PAGE_SIZE } from '/@/settings/constant';
  import FormDialog from './FormDialog.vue';
  import Toolbar from './Toolbar.vue';
  import { log } from '/@/utils/log';

  const { message, confirm } = useMessage();

  interface Props {
    title?: string;
    rowKey: string; // 数据主键
    serialNumber?: boolean; //是否显示序号
    fields: DataTableFieldConfig[]; // 字段
    multiple?: boolean; // 是否多选
    data?: Array<Recordable<any>>;
    pagination?: boolean | PaginationProps;
    toolbar?: OperateType[]; // 工具栏选项
    operate?: OperateType[];
    remote?: DataTableRemoteConfig;
    save?: DataTableRemoteConfig;
    remove?: DataTableRemoteConfig;
    props?: Recordable<any>;
  }

  const props = defineProps<Props>();
  const _data = ref<Recordable<any>[] | undefined>(props.data);
  const data = computed({
    get() {
      return _data.value ?? props.data ?? [];
    },
    set(value) {
      _data.value = value;
    }
  });

  const dialogRef = ref<FormDialogInstance | undefined>();

  const selectRow = ref(null);
  const selectRows = ref([]);
  const loading = ref(false);
  const total = ref(props.data ? props.data.length : 0);
  const showFields = ref(props.fields.filter((t) => !t.hide).map((t) => t.label));

  const fields = computed(() => {
    let temp = props.fields.filter((t) => showFields.value.includes(t.label));
    if (temp.length > 0) {
      temp = temp.sort((a, b) => a.order - b.order);
    }
    return temp;
  });

  const state = computed(() => {
    return {
      showOperate: props.operate?.length > 0,
      showPage: (_.isBoolean(props.pagination) && props.pagination) || _.isObject(props.pagination),
      isRemote: !_.isEmpty(props.remote?.url),
      showToolbar: props.title || props.toolbar,
      operate: {
        edit: props.operate?.includes('edit'),
        remove: props.operate?.includes('remove'),
        show: props.operate?.includes('show')
      },
      toolbar: {
        refresh: props.toolbar?.includes('refresh'),
        add: props.toolbar?.includes('edit'),
        edit: props.toolbar?.includes('edit'),
        remove: props.toolbar?.includes('remove'),
        search: props.toolbar?.includes('search'),
        column: props.toolbar?.includes('column')
      }
    };
  });

  const requestConfig = reactive({
    page: 1,
    pageSize: state.value.showPage
      ? (props.pagination as PaginationProps).pageSize ?? TABLE_DEFAULT_PAGE_SIZE
      : TABLE_DEFAULT_PAGE_SIZE,
    order: undefined,
    sort: undefined,
    keywords: undefined
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

  const indexMethod = (index: number) => {
    return index + 1;
  };

  const loadData = (params: Record<string, any>) => {
    loading.value = true;
    http
      .get({
        url: props.remote?.url,
        params
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
    log('request config watch', requestConfig);
    if (state.value.isRemote) {
      loadData(requestConfig);
    } else {
      if (state.value.showPage && !state.value.isRemote) {
        loading.value = true;
        setTimeout(() => {
          let filterSize =
            requestConfig.page <= 0 ? 0 : requestConfig.pageSize * (requestConfig.page - 1);
          data.value = props.data.slice(filterSize, filterSize + requestConfig.pageSize);
          loading.value = false;
        }, 500);
      }
    }
  });

  onMounted(() => {
    log('watch mounted', state.value);
    if (state.value.isRemote) {
      loadData(requestConfig);
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
  const onRemoveRow = (row) => {
    confirm('确定是否删除?', 'warning').then(() => {
      log('remove row', row);
    });
  };

  const onSortChange = ({ column, prop, order }) => {
    if (column && state.value.isRemote) {
      requestConfig.order = prop;
      requestConfig.sort = order === 'ascending' ? 'asc' : 'desc';
    }
  };

  defineExpose({ selectRows });
</script>

<style lang="scss" scoped>
  .container {
    .table-container {
      height: auto;
    }

    .page-container {
      margin-top: 10px;
    }
  }
</style>
