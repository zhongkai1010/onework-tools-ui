<template>
  <el-row class="page-container">
    <el-col :span="24" class="search">
      <el-form :inline="true" :model="formInline">
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
    </el-col>
    <el-col :span="24" class="table">
      <el-table :data="tableData" table-layout="auto" border>
        <el-table-column prop="column1" label="序号" width="120" />
        <el-table-column prop="column2" label="名称" width="220" />
        <el-table-column prop="column3" label="角色类型" width="120" />
        <el-table-column prop="column4" label="SMO" />
        <el-table-column prop="column5" label="申请事件" width="120" />
        <el-table-column prop="column6" label="操作" fixed="right" />
      </el-table>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';

  const formInline = reactive({
    user: '',
    region: ''
  });
  const tableData = [];
  const onSubmit = () => {
    console.log('submit!');
  };
</script>

<style scoped lang="scss">
  .page-container {
    padding: 10px;

    .search {
      border-bottom: 10px;
    }

    .table {
    }
  }
</style>
