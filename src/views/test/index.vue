<template>
  <page-view class="container">
    <el-row>
      <el-divider content-position="left">Response</el-divider>
      <codemirror
        v-model="code"
        placeholder="Code goes here..."
        :style="{ height: 'auto', width: '100%' }"
        :extensions="extensions"
        :options="options"
        ref="view"
        @ready="log('ready', $event)"
        @change="log('change', $event)"
        @focus="log('focus', $event)"
        @blur="log('blur', $event)"
      />
    </el-row>
  </page-view>
</template>

<script setup lang="ts">
  import { json, jsonParseLinter } from '@codemirror/lang-json';

  import { linter } from '@codemirror/lint';
  const options = {
    line: false,
  };
  const log = console.log;
  const code = ref('');
  const view = ref(null);
  const extensions = [json(), linter(jsonParseLinter())];

  console.log(view);
</script>

<style scoped lang="scss">
  .container {
    background-color: #fff;
  }
</style>
<style lang="scss">
  .cm-scroller {
    @include scrollBar;
  }
</style>
