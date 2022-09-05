<template>
  <page-view>
    <el-form>
      <Field v-for="(field, index) in config" :key="index" :model-value="field" />
    </el-form>
  </page-view>
</template>

<script setup lang="ts">
  import data from './data';
  import Field from './components/Field.vue';

  const config = reactive(data);
</script>

<style scoped></style>
