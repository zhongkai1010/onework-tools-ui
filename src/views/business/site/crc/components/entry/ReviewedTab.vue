<template>
  <div class="page-container">
    <el-form :inline="true" :model="formInline" class="search">
      <el-form-item label="姓名">
        <el-input v-model="formInline.user" placeholder="请输入姓名" />
      </el-form-item>
      <el-form-item label="SMO">
        <el-select v-model="formInline.region" placeholder="请输入SMO">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="角色类型">
        <el-select v-model="formInline.region" placeholder="请选择角色类型">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button @click="onSubmit">重置</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="data" :border="true" :stripe="true" class="table">
      <el-table-column
        prop="no"
        type="index"
        label="序号"
        header-align="center"
        width="120"
        align="center"
      />
      <el-table-column prop="userName" label="姓名" header-align="center" />
      <el-table-column prop="roleTypeValue" label="角色类型" header-align="center" />
      <el-table-column prop="smoName" label="SMO" header-align="left" />

      <el-table-column
        prop="applyTime"
        label="申请时间"
        header-align="center"
        width="120"
        align="right"
      />
      <el-table-column
        fixed="right"
        label="操作"
        width="120"
        header-align="center"
        v-loading="loading"
      >
        <template #default>
          <el-button link type="primary" size="small">审核</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';
  import Api, { SiteApplyJoinCRCRecord } from '/@/api/business/site/crc/entry';
  const data = ref<SiteApplyJoinCRCRecord[]>();
  const loading = ref<boolean>(false);
  const formInline = reactive({
    user: '',
    region: ''
  });

  watchEffect(async () => {
    loading.value = true;
    const result = await Api.getList({ page: 1, pageSize: 10 });
    data.value = result.items;
    loading.value = false;
  });

  const onSubmit = () => {
    console.log('submit!');
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
  }
</style>
