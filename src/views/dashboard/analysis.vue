<template>
  <page-view class="container" :gutter="0">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card class="mini-card">
          <resize-chart :option="data.data1" />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="mini-card">
          <resize-chart :option="data.data2" />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="mini-card">
          <resize-chart :option="data.data3" />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="mini-card">
          <resize-chart :option="option" />
        </el-card>
      </el-col>
      <el-col :span="24">
        <el-card class="small-card">
          <resize-chart :option="data.data4" />
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="medium-card">
          <resize-chart :option="option" />
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="medium-card">
          <resize-chart :option="data.data6" />
        </el-card>
      </el-col>
      <el-col :span="24">
        <el-card class="small-card">
          <resize-chart :option="data.data5" />
        </el-card>
      </el-col>
    </el-row>
  </page-view>
</template>

<script setup lang="ts">
  import data from './data';
  const option = ref({
    autoresize: true,
    title: {
      text: 'Traffic Sources',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines']
    },
    series: [
      {
        name: 'Traffic Sources',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
          { value: 335, name: 'Direct' },
          { value: 310, name: 'Email' },
          { value: 234, name: 'Ad Networks' },
          { value: 135, name: 'Video Ads' },
          { value: 1548, name: 'Search Engines' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  });
</script>

<style lang="scss" scoped>
  .container {
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
      height: 400px;
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
