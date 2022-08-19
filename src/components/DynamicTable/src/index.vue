<!-- <template>
  <div class="container" v-loading="loading">
    <template #top v-if="showSearch">
      <el-col class="search-container" :span="24">
        <TableSearchPanel
          :fields="searchFields"
          @reset="(values) => (searchValue = { ...values })"
          @submit="(values) => (searchValue = { ...values })"
        />
      </el-col>
    </template>

    <el-col class="main-container">
      <TablePageToolbar
        :title="`${result.data.title}列表`"
        :fields="fields"
        :toolbar="toolbar"
        :multiple="result.data.multiple"
        :selected-state="false"
        @show="showSearch = !showSearch"
        @change-field="onChangeField"
        @search="onKeywordsInput"
        @add="onClickAdd"
      />
      <TablePageTable
        :span="24"
        :row-key="result.data.primary"
        :fields="tableFields"
        :loading="apiResult.loading.value"
        :total="tableConfig.total"
        :data="tableConfig.data"
        :page-size="pageSize"
        :multiple="result.data.multiple"
        @select-row="onSelectRow"
        @page-change="(val) => (page = val)"
        @size-change="(val) => (pageSize = val)"
      />
    </el-col>

    <TableFormDialog
      :title="result.data.title"
      :show="showDialog"
      :editable="false"
      :fields="fields"
      :rules="result.data.formRules"
      :form-value="slectedRow"
      @submit="showDialog = false"
      @cancel="showDialog = false"
    />
  </div>
</template>

<script setup lang="ts">
  import _ from 'lodash';
  import { useRoute } from 'vue-router';
  import { computed, ref, watch } from 'vue';

  import TablePageToolbar from './TablePageToolbar.vue';
  import TablePageTable from './TablePageTable.vue';
  import TableFormDialog from './TableFormDialog.vue';

  import PageApi from '/@/api/system/page';

  import { initFieldsValue } from '/@/components/utils';
  import { TABLE_PAGE_SIZE } from '/@/settings/constant';
  import { useHttpFetch } from '/@/hooks/fetch';
  import { PageResult, PaginatedRequest } from '/@/api/model/baseModel';
  /**
   *  页面初始化
   */
  const route = useRoute();
  const url = ref('');
  const pageSize = ref(TABLE_PAGE_SIZE);
  const page = ref(1);
  const keywords = ref('');
  const searchValue = ref({});
  const showSearch = ref(true);
  const slectedRow = ref([]);
  const showDialog = ref(false);
  const tableFields = ref([]);

  /**
   *  页面加载
   */
  const { loading, result } = useHttpFetch(PageApi.getConfig, { name: route.name as string });
  /**
   * 表格
   */
  const fields = computed(() => {
    if (!result) {
      return [];
    }
    return result.value.fields;
  });
  /**
   * 搜索面板
   */
  const searchFields = computed(() => {
    if (!result) {
      return [];
    }
    return result.value.fields.filter((t) => t.search);
  });
  /**
   *  工具栏
   */
  const toolbar = computed(() => {
    if (!result) {
      return [];
    }
    return result.value.toolbar || [];
  });
  /**
   * 列表请求参数
   */
  const listParams = computed(() => {
    let params: PaginatedRequest = {
      page: page.value,
      limit: pageSize.value,
    };
    if (keywords.value.length > 0) {
      params.keywords = keywords.value;
    }
    if (showSearch.value) {
      params = { ...params, ...searchValue.value };
    }
    return params;
  });
  const apiResult = useGetFetch<ResponseResult<PageResult<any>>>(url, listParams);
  /**
   * 表格数据
   */
  const tableConfig = computed(() => {
    if (!apiResult.result.value) {
      return {
        total: 0,
        data: [],
      };
    }
    return { total: apiResult.result.value.data.total, data: apiResult.result.value.data.data };
  });
  /**
   * 页面配置变化
   */
  watch(result, () => {
    url.value = result.value.data.url;
    tableFields.value = result.value.data.fields.filter((t) => !(t.hide ?? false));
    searchValue.value = initFieldsValue(searchFields.value);
  });
  /**
   * 请求参数变化
   */
  watch([pageSize, page, keywords, searchValue], () => {
    apiResult.execute();
  });
  /**
   *  事件与辅助函数
   */
  const onSelectRow = (rows) => {
    slectedRow.value = rows;
  };
  /**
   *  表格字段变化
   */
  const onChangeField = (values: string[]) => {
    const fields = result.value.data.fields;
    tableFields.value = fields.filter((t) => values.includes(t.label));
  };
  /**
   *  搜索文本框变化
   */
  const onKeywordsInput = _.debounce((value) => {
    keywords.value = value;
  }, 500);
  /**
   * 点击新增
   */
  const onClickAdd = () => {
    showDialog.value = true;
  };
</script>

<style lang="scss" scoped>
  .container {
    margin: 20px;

    .search-container {
      padding: 20px;
      background-color: var(--el-color-white);
      margin-bottom: 20px;
    }

    .main-container {
      padding: 20px;
      background-color: var(--el-color-white);
    }
  }
</style> -->
