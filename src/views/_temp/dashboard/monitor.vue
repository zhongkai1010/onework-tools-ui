<template>
  <page-view class="container">
    <el-row :gutter="20">
      <el-col :span="18">
        <el-card class="medium-card">
          <resize-chart :option="data.data1" />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="small-card" style="margin-bottom: 20px">
          <resize-chart :option="data.data1" />
        </el-card>
        <el-card class="small-card">
          <resize-chart :option="data.data2" />
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="small-card">
          <resize-chart :option="data.data3" />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="small-card" style="margin-bottom: 20px">
          <resize-chart :option="data.data4" />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="small-card" style="margin-bottom: 20px">
          <resize-chart :option="data.data5" />
        </el-card>
      </el-col>
    </el-row>
  </page-view>
</template>

<script setup lang="ts">
  import data from './data';
</script>

<style lang="scss" scoped>
  .container {
    background-color: transparent;

    .el-col {
      margin-bottom: 20px;
    }

    .mini-card {
      height: 200px;
      &:deep(.el-card__body) {
        height: 100%;
      }
    }
    .small-card {
      height: 240px;
      &:deep(.el-card__body) {
        height: 100%;
      }
    }
    .medium-card {
      height: 500px;
      &:deep(.el-card__body) {
        height: 100%;
      }
    }
  }
</style>
