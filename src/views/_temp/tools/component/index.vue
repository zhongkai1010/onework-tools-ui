<template>
  <page-view class="container" :gutter="0" :bgColor="false">
    <el-row :gutter="20">
      <el-col :span="4">
        <el-card>
          <template #header>
            <div class="header">
              <iconify-icon icon="carbon:model-alt" />
              <span>组件库</span>
              <div class="button">
                <iconify-icon icon="ant-design:appstore-add-outlined" :size="18" />
              </div>
            </div>
          </template>
          <el-tree :data="ComponentData" :props="treeProps" @node-click="onClickNode" />
        </el-card>
      </el-col>
      <el-col :span="20">
        <el-card>
          <template #header>
            <div class="header">
              <iconify-icon icon="carbon:model-alt" />
              <span>组件配置</span>
              <div class="button">
                <iconify-icon icon="ant-design:appstore-add-outlined" :size="18" />
              </div>
            </div>
          </template>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="propertyName" label="属性" width="180" />
            <el-table-column prop="description" label="说明" width="180" />
            <el-table-column prop="dataType" label="类型" />
            <el-table-column prop="dataType" label="可选值" />
            <el-table-column prop="defaultValue" label="默认值" />
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </page-view>
</template>

<script setup lang="ts">
  import ComponentData from './data';
  import { Component, ComponentProp } from './types';
  const treeProps = {
    label: 'displayName'
  };
  const tableData = ref<ComponentProp[]>([]);

  const onClickNode = (node: Component) => {
    tableData.value = node.props;
  };
</script>

<style lang="scss" scoped>
  .container {
    .el-card__header {
      .header {
        display: flex;
        align-items: center;
        height: 25px;
        i {
          font-size: 14px;
          margin-right: 5px;
        }
        .button {
          display: flex;
          cursor: pointer;
          margin-left: auto;
        }
      }
    }
    :deep(.el-card__body) {
      min-height: calc($main-no-margin-height - 70px);
    }
  }
</style>
