<template>
  <page-view class="page_wrapper">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card">
          <el-form>
            <el-row :gutter="20">
              <el-col :span="item.span ?? 6" v-for="item in config.fields" :key="item.name">
                <el-form-item :label="item.lable">
                  <el-input />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <el-row :gutter="20">
            <el-col :span="24" style="margin-bottom: 20px">
              <el-button type="primary" @click="onClickGenerate">生成表单</el-button>
              <el-button @click="onClickReset">重置</el-button>
            </el-col>
            <el-col :span="24">
              <codemirror
                v-model="code"
                placeholder="Code goes here..."
                :extensions="[json(), linter(jsonParseLinter())]"
              />
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </page-view>
</template>

<script setup lang="ts">
  import { json, jsonParseLinter } from '@codemirror/lang-json';
  import { linter } from '@codemirror/lint';
  import { MessageType, useMessage } from '/@/hooks/web/useMessage';
  const { message } = useMessage();
  const defaultConfig = {
    name: '',
    column: 20,
    fields: [
      {
        lable: '表单1',
        name: 'name1',
        span: 6,
      },
    ],
  };
  const code = ref(JSON.stringify(defaultConfig, null, '\t'));
  const config = ref(defaultConfig);

  const onClickGenerate = () => {
    try {
      config.value = JSON.parse(code.value);
      console.log(config.value);
    } catch (error) {
      message({ message: error, type: MessageType.Error });
    }
  };

  const onClickReset = () => {
    config.value = defaultConfig;
    code.value = JSON.stringify(defaultConfig, null, '\t');
  };
</script>

<style lang="scss" scoped>
  .page_wrapper {
    background-color: transparent !important;
    padding: 0px !important;
    .box-card {
      min-height: $main-no-margin-height;
    }
  }
</style>
