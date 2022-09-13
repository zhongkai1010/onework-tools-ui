<template>
  <page-view class="container" :gutter="0" :bgColor="false">
    <el-row :gutter="20">
      <el-col :span="4">
        <el-card>
          <template #header>
            <div class="header">
              <iconify-icon icon="carbon:model-alt" />
              <span>数据模型</span>
              <div class="button">
                <el-button type="primary">创建</el-button>
              </div>
            </div>
          </template>
          <ModelView @select="onSelectModel" />
        </el-card>
      </el-col>
      <el-col :span="20">
        <el-card>
          <template #header>
            <div class="header">
              <iconify-icon icon="ant-design:unordered-list-outlined" />
              <span>模型属性</span>
              <div class="button">
                <el-button type="primary">表单配置</el-button>
                <el-button>表格配置</el-button>
              </div>
            </div>
          </template>
          <PropertyView :data="properties" />
        </el-card>
      </el-col>
    </el-row>
  </page-view>
</template>

<script setup lang="ts">
  import { Model, ModelProperty } from '/@/api/tool/model';
  import ModelView from './components/Model.vue';
  import PropertyView from './components/Property.vue';

  const properties = ref<ModelProperty[]>([]);

  const onSelectModel = (model: Model) => {
    properties.value = model.properties;
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
          margin-left: auto;
        }
      }
    }
    :deep(.el-card__body) {
      min-height: calc($main-no-margin-height - 70px);
    }
  }
</style>
