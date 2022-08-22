<template>
  <page-view class="container">
    <el-row :gutter="20">
      <el-col :span="4">
        <el-card>
          <template #header> 组件 </template>
          <el-collapse>
            <el-collapse-item title="常规组件" name="1">
              <ul>
                <draggable
                  v-model="myArray"
                  :group="{ name: 'people', pull: 'clone', put: false }"
                  @start="drag = true"
                  @end="drag = false"
                  item-key="id"
                >
                  <template #item="{ element }">
                    <li>{{ element.name }}</li>
                  </template>
                </draggable>
              </ul>
            </el-collapse-item>
            <el-collapse-item title="异步组件" name="2">
              <ul>
                <li>asyn_autodcomplete</li>
                <li>asyn_cascader</li>
                <li>checkbox</li>
                <li>asyn_checkbox</li>
                <li>asyn_radio</li>
                <li>asyn_select</li>
                <li>asyn_table</li>
                <li>asyn_treeSelect</li>
              </ul>
            </el-collapse-item>
            <el-collapse-item title="其它组件" name="3">
              <ul>
                <li>object_item</li>
              </ul>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </el-col>
      <el-col :span="20" :offset="0">
        <el-card shadow="always" :body-style="{ padding: '20px' }">
          <template #header> 组件 </template>
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
  const drag = ref(false);
  const myArray = ref([
    {
      id: 1,
      name: 'asyn_autodcomplete',
    },
    {
      id: 2,
      name: 'asyn_cascader',
    },
    {
      id: 3,
      name: 'checkbox',
    },
  ]);
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
    .el-collapse-item__content {
      li {
        padding: 10px;
        border: 1px solid #ccc;
        margin-bottom: 10px;
        cursor: pointer;
        user-select: none;
      }
    }
  }
</style>
