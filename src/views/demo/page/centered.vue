<template>
  <card-view :body-style="{ padding: ' 20px' }">
    <ul v-infinite-scroll="load">
      <li v-for="i in count" :key="i" class="item">{{ i }}</li>
    </ul>
  </card-view>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  const count = ref(0);
  const load = () => {
    count.value += 2;
  };
</script>
<style lang="scss" scoped>
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: var(--el-color-primary-light-9);
    margin: 10px;
    color: var(--el-color-primary);
  }
</style>
