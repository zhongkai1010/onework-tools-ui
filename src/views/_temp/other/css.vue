<template>
  <div class="container">
    <el-button type="primary" class="button" @click="show = !show">primary</el-button>
    <Transition name="fade">
      <el-card class="card" v-if="show">
        <template #header>
          <div class="card-header">
            <span>Card name</span>
            <el-button class="button" text>Operation button</el-button>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
      </el-card>
    </Transition>
    <el-button class="button">Default</el-button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const show = ref(true);
</script>

<style lang="scss" scoped>
  .container {
    .button,
    .card {
      margin: 20px;
    }
  }
</style>
