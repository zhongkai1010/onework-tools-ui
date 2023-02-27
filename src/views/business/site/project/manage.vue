<template>
  <div class="body_wrapper">
    <div class="body_container">
      <el-row :gutter="20">
        <el-col :span="4">
          <el-card class="card_wrapper">
            <ul class="nav_wrapper">
              <li class="is-active">
                <span>项目信息</span>
                <IconifyIcon icon="ant-design:ant-design-outlined" />
              </li>
              <li>
                <span>审核CRC加入项目</span>
                <IconifyIcon icon="ant-design:ant-design-outlined" />
              </li>
              <li>
                <span>审核CRC创建项目</span>
                <IconifyIcon icon="ant-design:ant-design-outlined" />
              </li>
              <li>
                <span>项目结题审核</span>
                <IconifyIcon icon="ant-design:ant-design-outlined" />
              </li>
              <li>
                <span>项目信息修改审核</span>
                <IconifyIcon icon="ant-design:ant-design-outlined" />
              </li>
              <li>
                <span>CRC项目交换</span>
                <IconifyIcon icon="ant-design:ant-design-outlined" />
              </li>
            </ul>
          </el-card>
        </el-col>
        <el-col :span="20">
          <el-card class="card_wrapper">
            <el-tabs type="card" class="demo-tabs" model-value="first">
              <el-tab-pane label="项目总数：125" name="first">
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
                    <el-table key="name" :data="tableData" :border="true" v-loading="table_loading">
                      <el-table-column prop="date" label="序号" width="60" />
                      <el-table-column prop="name" label="姓名" width="200" />
                      <el-table-column prop="address" label="角色类型" width="200" />
                      <el-table-column prop="address" label="SMO" />
                      <el-table-column prop="address" label="申请时间" />
                      <el-table-column prop="address" label="审核状态" />
                      <el-table-column prop="address" label="审核时间" />
                      <el-table-column prop="address" label="驳回理由/备注" />
                      <el-table-column prop="address" label="操作">
                        <template #default>
                          <el-button link>详情</el-button>
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
              </el-tab-pane>
              <el-tab-pane label="项目总数：125" name="second">Config</el-tab-pane>
              <el-tab-pane label="项目总数：125" name="third">Role</el-tab-pane>
              <el-tab-pane label="项目总数：125" name="fourth">Task</el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { IconifyIcon } from '/@/components/Icon';
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
      address: '12312'
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: '12312'
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: '12312'
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: '12312'
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: '12312'
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: '12312'
    }
  ];
</script>

<style scoped lang="scss">
  .body_wrapper {
    margin: $layout-body-margin;
    min-height: $layout-body-min-height;

    .card_wrapper {
      min-height: calc($layout-body-min-height);

      .nav_wrapper {
        li {
          display: flex;
          padding: 10px;
          justify-content: space-between;
          cursor: pointer;

          &:hover {
            color: #59abff;
          }
        }
        .is-active {
          color: #59abff;
        }
      }
    }

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
        margin-bottom: 0px;
      }
    }
  }
</style>
