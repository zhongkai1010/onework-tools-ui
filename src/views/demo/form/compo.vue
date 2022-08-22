<template>
  <page-view class="container">
    <el-row :gutter="20">
      <el-col :span="4">
        <el-card>
          <template #header> 组件 </template>
          <el-collapse v-model="activeNames" accordion>
            <el-collapse-item
              :title="group.groupName"
              :name="group.groupKey"
              :key="group.groupKey"
              v-for="group in formConfig"
            >
              <ul class="form-container">
                <draggable v-model="group.components" :item-key="group.groupKey">
                  <template #item="{ element }">
                    <li>
                      <iconify-icon icon="ant-design:form-outlined" :size="16" />
                      <span>{{ element.name }}</span>
                    </li>
                  </template>
                </draggable>
              </ul>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </el-col>
      <el-col :span="20" :offset="0">
        <el-card shadow="always" class="card-container">
          <template #header> 表单 </template>
          <config-form
            :name="`test`"
            :gutter="20"
            :labelPosition="`top`"
            :labelWidth="80"
            :fields="fields"
            ref="dynamicFormRef"
          />
        </el-card>
      </el-col>
    </el-row>
  </page-view>
</template>

<script setup lang="ts">
  import draggable from 'vuedraggable';
  import { FormItemProps } from '/@/components/FormItem';
  import formConfig from './data/formConfig';

  const activeNames = ref(formConfig[0].groupKey);
  const fields = ref<FormItemProps[]>([
    {
      label: '表单',
      name: 'item01',
      component: 'input',
    },
  ]);
</script>

<style lang="scss" scoped>
  .container {
    background-color: transparent !important;

    .form-container {
      li {
        display: flex;
        justify-content: left;
        align-items: center;
        i {
          margin-right: 5px;
        }
      }
    }
    .el-collapse {
      border-top: 0px;
    }

    :deep(.el-collapse-item__header:last-of-type) {
      border-bottom: 0px;
    }

    .el-collapse-item__content {
      li {
        padding: 10px;
        border: 1px dashed var(--header-font-color);
        margin-bottom: 10px;
        cursor: pointer;
        user-select: none;
      }
    }
    .card-container {
      min-height: $main-no-margin-height;

      &:deep(.el-col:hover) {
        border: 1px dashed var(--header-font-color);
      }
    }
  }
</style>
