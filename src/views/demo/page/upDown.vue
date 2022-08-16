<template>
  <card-view :top="true">
    <template #top> 我是头部面板 </template>
    <ul v-infinite-scroll="load">
      <li v-for="i in count" :key="i" class="item">{{ i }}</li>
    </ul>
  </card-view>
</template>

<script setup lang="ts">
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
