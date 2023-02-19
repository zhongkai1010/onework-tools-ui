<template>
  <div class="body_wrapper">
    <div class="body_container">
      <el-row>
        <el-col :span="24" class="column_wrapper">
          <el-input placeholder="Please input" style="width: 200px" />
          <el-button type="primary" @click="onLoadTableData">搜索</el-button>
          <el-button :link="true" @click="onShow">
            <span>展开收缩条件</span>
            <IconifyIcon icon="mdi:arrow-down-thin" />
          </el-button>
        </el-col>
        <el-col :span="24" class="column_wrapper search" v-show="show">
          <el-form :inline="true" class="demo-form-inline" label-suffix="：">
            <el-form-item label="姓名">
              <el-input placeholder="Approved by" />
            </el-form-item>
            <el-form-item label="手机号">
              <el-input placeholder="Approved by" />
            </el-form-item>
            <el-form-item label="角色类型">
              <el-input placeholder="Approved by" />
            </el-form-item>
            <el-form-item label="审核状态">
              <el-input placeholder="Approved by" />
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="onLoadTableData">查询</el-button>
              <el-button>重置</el-button>
            </el-form-item>
          </el-form>
        </el-col>

        <el-col :span="24" class="column_wrapper">
          <el-button type="primary">创建项目</el-button>
          <el-button type="primary">发送通知</el-button>
          <el-button>导出</el-button>
        </el-col>
        <el-col :span="24" class="table column_wrapper">
          <el-table :data="tableData" :border="true" v-loading="table_loading">
            <el-table-column prop="date" label="序号" width="60" />
            <el-table-column prop="name" label="姓名" width="200" />
            <el-table-column prop="address" label="角色类型" width="200" />
            <el-table-column prop="address" label="SMO" />
            <el-table-column prop="address" label="申请时间" />
            <el-table-column prop="address" label="审核状态" />
            <el-table-column prop="address" label="审核时间" />
            <el-table-column prop="address" label="驳回理由/备注" />
            <el-table-column prop="address" label="操作">
              <template #default="scope">
                <el-button size="small">${{ scope.row.name }}</el-button>
                <el-button size="small" type="danger">Delete</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000"
            @current-change="onLoadTableData"
          />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
  const show = ref(false);
  const table_loading = ref(false);
  const onShow = () => {
    show.value = !show.value;
  };
  const onLoadTableData = () => {
    table_loading.value = true;
    setTimeout(() => {
      table_loading.value = false;
    }, 1000);
  };
  const tableData = [
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    }
  ];
</script>

<style scoped lang="scss">
  .body_wrapper {
    margin: $layout-body-margin;
    min-height: $main-no-margin-height;
    .body_container {
      padding: 20px;
      background-color: #fff;
      border-radius: 5px;
      min-height: $main-no-margin-height;

      .column_wrapper {
        margin-bottom: 10px;
        &.search {
          &:deep(.el-form-item) {
            margin-bottom: 10px;
          }
        }

        &.table {
          &:deep(.el-pagination) {
            margin: 10px 0px;
            display: flex;
            justify-content: flex-end;
          }
        }
      }
    }
  }
</style>
