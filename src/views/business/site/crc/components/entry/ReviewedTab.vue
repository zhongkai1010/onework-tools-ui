<template>
  <div class="page-container">
    <el-form :inline="true" :model="searchParams" class="search">
      <el-form-item label="姓名">
        <el-input v-model="searchParams.userName" placeholder="请输入姓名" />
      </el-form-item>
      <el-form-item label="SMO">
        <el-select v-model="searchParams.smoName" placeholder="请输入SMO">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="角色类型">
        <el-select v-model="searchParams.roleType" placeholder="请选择角色类型">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSearch">查询</el-button>
        <el-button @click="handleReset">重置</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="state.items"
      :border="true"
      :stripe="true"
      height="500"
      class="table"
      align="center"
      v-loading="isLoading"
    >
      <el-table-column prop="no" type="index" label="序号" header-align="center" width="80" />
      <el-table-column prop="userName" label="姓名" header-align="center" width="180" sortable />
      <el-table-column
        prop="roleTypeValue"
        label="角色类型"
        header-align="center"
        width="180"
        sortable
      />
      <el-table-column prop="smoName" label="SMO" header-align="left" />

      <el-table-column
        prop="applyTime"
        label="申请时间"
        header-align="center"
        width="120"
        align="right"
        sortable
      />
      <el-table-column
        fixed="right"
        label="操作"
        width="120"
        header-align="center"
        style="min-height: 400px"
        v-loading="isLoading"
      >
        <template #default>
          <el-button link type="primary" size="small">审核</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="page"
      background
      v-model:current-page="searchParams.page"
      v-model:page-size="searchParams.pageSize"
      :page-sizes="[10, 20, 50, 100]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="state.total"
      @size-change="handleSearch"
      @current-change="handleSearch"
    />
  </div>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';
  import Api, { SearchCRCParams } from '/@/api/business/site/crc/entry';
  import { useAsyncState } from '@vueuse/core';

  const searchParams = reactive<SearchCRCParams>({
    page: 1,
    pageSize: 10
  });
  const { state, isLoading, execute } = useAsyncState(
    () => {
      return Api.getList({ ...searchParams });
    },
    {
      total: 0,
      items: []
    }
  );

  const handleSearch = async () => {
    await execute();
  };

  const handleReset = async () => {
    Object.keys(searchParams).forEach((t) => {
      if (t === 'page' || t == 'pageSize') return;
      searchParams[t] = undefined;
    });
    await execute();
  };
</script>

<style scoped lang="scss">
  .page-container {
    .search {
      border-bottom: 10px;
    }

    .table {
      &:deep(.el-table__header) {
        &:deep(th) {
          background-color: #ccc;
        }
      }
    }
    .page {
      margin-top: 10px;
      justify-content: flex-end;
    }
  }
</style>
