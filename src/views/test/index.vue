<template>
  <page-view class="container">
    <el-row>
      <el-divider content-position="left">Axios</el-divider>
      <el-button type="success" @click="onAxiosClick('/api/mock/get/200')" :loading="loading">
        200
      </el-button>
      <el-button type="info" @click="onAxiosClick('/api/mock/get/400')" :loading="loading">
        400
      </el-button>
      <el-button type="danger" @click="onAxiosClick('/api/mock/get/500')" :loading="loading">
        500
      </el-button>
      <el-button type="warning" @click="onAxiosClick('/api/mock/get/timeout')" :loading="loading">
        Timeout
      </el-button>
    </el-row>
    <el-row>
      <el-divider content-position="left">Expand Axios</el-divider>
      <el-button type="success" @click="onExpandAxiosClick('/api/mock/get/200')" :loading="loading">
        200
      </el-button>
      <el-button type="info" @click="onExpandAxiosClick('/api/mock/get/400')" :loading="loading">
        400
      </el-button>
      <el-button type="danger" @click="onExpandAxiosClick('/api/mock/get/500')" :loading="loading">
        500
      </el-button>
      <el-button
        type="warning"
        @click="onExpandAxiosClick('/api/mock/get/timeout')"
        :loading="loading"
      >
        Timeout
      </el-button>
    </el-row>
    <el-row>
      <el-divider content-position="left">Response</el-divider>
      <codemirror
        v-loading="loading"
        v-model="code"
        placeholder="Code goes here..."
        :style="{ height: '500px', width: '100%' }"
        :autofocus="false"
        :indent-with-tab="true"
        :tab-size="2"
        :extensions="extensions"
        @ready="log('ready', $event)"
        @change="log('change', $event)"
        @focus="log('focus', $event)"
        @blur="log('blur', $event)"
      />
    </el-row>
  </page-view>
</template>

<script setup lang="ts">
  import { AxiosResponse } from 'axios';
  import { Axios } from '/@/plugins/axios/Axios';
  import { json } from '@codemirror/lang-json';
  import { http } from '/@/plugins/axios';

  const axios = new Axios({});
  const loading = ref(false);
  const log = console.log;
  const code = ref('');
  const extensions = [json()];

  const onAxiosClick = (url: string) => {
    loading.value = true;
    axios
      .get({ url, timeout: 5000 })
      .then((response: AxiosResponse) => {
        console.log(`----------${url}--response---------`);
        console.log(response);
        code.value = JSON.stringify(response, null, '\t');
      })
      .catch((error) => {
        console.log(`----------${url}--error---------`);
        console.log(error);
        code.value = JSON.stringify(error, null, '\t');
      })
      .finally(() => {
        loading.value = false;
      });
  };

  const onExpandAxiosClick = (url: string) => {
    loading.value = true;
    http
      .get({ url })
      .then((response: AxiosResponse) => {
        console.log(`----------${url}--response---------`);
        console.log(response);
        code.value = JSON.stringify(response, null, '\t');
      })
      .catch((error) => {
        console.log(`----------${url}--error---------`);
        console.log(error);
        code.value = JSON.stringify(error, null, '\t');
      })
      .finally(() => {
        loading.value = false;
      });
  };
</script>

<style scoped lang="scss">
  .container {
    padding: 20px;
    background-color: #fff;

    .el-row {
      margin-bottom: 20px;
    }
  }
</style>
<style lang="scss">
  .cm-scroller {
    @include scrollBar;
  }
</style>
