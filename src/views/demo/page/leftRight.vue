<template>
  <card-view :leftWidth="width" :fixed="fixed" :left="true">
    <template #left>
      <ul class="left-box">
        <li>
          <span>宽度: </span>
          <el-input-number :step="20" v-model="width" placeholder="请输入宽度" />
        </li>
        <li>
          <span>固定：</span>
          <el-switch v-model="fixed" />
        </li>
      </ul>
    </template>
    <ul v-infinite-scroll="load">
      <li v-for="i in count" :key="i" class="item">{{ i }}</li>
    </ul>
  </card-view>
</template>

<script lang="ts" setup>
  const count = ref(0);
  const width = ref(250);
  const fixed = ref(false);

  const load = () => {
    count.value += 2;
  };
</script>

<style lang="scss" scoped>
  .left-box {
    li {
      line-height: 40px;

      span {
        margin-right: 10px;
      }
    }
  }

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
