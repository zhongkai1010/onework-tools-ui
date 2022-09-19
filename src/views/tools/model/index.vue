<!--
 * @Author: zhongkai1010 zhongkai1010@163.com
 * @Date: 2022-09-13 09:34:46
 * @LastEditors: zhongkai1010 zhongkai1010@163.com
 * @LastEditTime: 2022-09-19 17:36:23
 * @FilePath: \onework-tools-ui\src\views\tools\model\index.vue
 * @Description:
-->
<template>
  <page-view class="container" :gutter="0" :bgColor="false">
    <el-row :gutter="20">
      <el-col :span="4">
        <CardTitle title="数据模型" icon="carbon:model-alt">
          <template #button>
            <el-button type="primary">创建</el-button>
          </template>
          <ModelTree />
        </CardTitle>
      </el-col>
      <el-col :span="20">
        <CardTitle :title="title" icon="carbon:property-relationship">
          <template #button>
            <FormSelectDictionary
              :name="DictionarNameEnum.ORGANIZATION"
              v-model="selectOrg"
              style="margin-right: 5px"
              placeholder="请选择组织"
              clearable
            />
            <el-dropdown>
              <el-button type="primary"> 生成代码 </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>表单配置</el-dropdown-item>
                  <el-dropdown-item>表格配置</el-dropdown-item>
                  <el-dropdown-item>JSON</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </template>
        </CardTitle>
      </el-col>
    </el-row>
  </page-view>
</template>
<script setup lang="ts">
  import _ from 'lodash';
  import { Model } from '/@/api/tools/model';
  import { DictionarNameEnum } from '/@/enums/dictionarNameEnum';
  import { log } from '/@/utils/log';
  import ModelTree from './components/ModelTree.vue';

  const selectOrg = ref<string>();
  const currentModel = ref<Model>();
  const title = computed(() => {
    log('title', currentModel.value);
    if (currentModel.value) {
      return `${currentModel.value.displayName}(${currentModel.value.name}) - 模型属性`;
    }
    return '模型属性';
  });
</script>

<style lang="scss" scoped>
  .container {
  }
</style>
