<template>
  <page-view>
    <div class="main">
      <div class="tools-container">
        <css-form @on-change="onFormChange" />
      </div>
      <div class="box-container" :style="state.boxStyle">
        <div v-for="(item, index) in state.boxNum" :key="index">
          {{ item }}
        </div>
      </div>
    </div>
  </page-view>
</template>

<script setup lang="ts" name="other_flex">
  import { CSSProperties, reactive } from 'vue';
  import CssForm from './components/CssForm.vue';

  const state = reactive<{
    boxStyle: CSSProperties;
    boxNum: number;
  }>({
    boxStyle: {
      width: '40%',
      height: '40vh',
    },
    boxNum: 10,
  });

  const onFormChange = (value) => {
    for (const key in value) {
      if (key == 'width') {
        state.boxStyle[key] = `${value[key]}%`;
      } else if (key == 'height') {
        state.boxStyle[key] = `${value[key]}vh`;
      } else if (key == 'numBox') {
        state.boxNum = value[key];
      } else {
        state.boxStyle[key] = value[key];
      }
    }
  };
</script>

<style lang="scss" scoped>
  .main {
    display: flex;
    flex-direction: column;
  }

  .tools-container {
    padding: 10px;
  }

  .box-container {
    display: flex;
    padding: 10px;
    margin: 10px;
    border: 1px solid rgb(192, 192, 192);

    div {
      width: 40px;
      height: 40px;
      border: 1px solid rgb(192, 192, 192);
      margin: 10px;
      text-align: center;
      line-height: 40px;
    }
  }
</style>
