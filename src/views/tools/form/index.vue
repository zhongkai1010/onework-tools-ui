<template>
  <page-view class="container" :gutter="0" :bgColor="false">
    <el-row :gutter="20">
      <el-col :span="4">
        <el-card>
          <template #header>
            <div class="header">
              <iconify-icon icon="carbon:model-alt" />
              <span>表单</span>
              <div class="button">
                <iconify-icon icon="ant-design:appstore-add-outlined" :size="18" />
              </div>
            </div>
          </template>
          <FormTree :data="[]" />
        </el-card>
      </el-col>
      <el-col :span="20">
        <el-card>
          <template #header>
            <div class="header">
              <iconify-icon icon="carbon:model-alt" />
              <span>表单项</span>
              <div class="button">
                <iconify-icon icon="ant-design:appstore-add-outlined" :size="18" />
              </div>
            </div>
          </template>
          <FormGrid :data="[]" />
        </el-card>
      </el-col>
    </el-row>
  </page-view>
</template>

<script setup lang="ts">
  import FormTree from './component/FormTree.vue';
  import FormGrid from './component/FormGrid.vue';
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
