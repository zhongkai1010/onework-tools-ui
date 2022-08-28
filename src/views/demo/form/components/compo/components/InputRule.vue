<template>
  <div class="rule-container">
    <el-divider content-position="left">验证规则</el-divider>
    <div class="item" v-for="(rule, index) in formValue.formRules" :key="index">
      <el-form-item label="验证表达式" prop="props.formRules.index.pattern">
        <el-input v-model="rule.pattern" :required="true" />
      </el-form-item>
      <el-form-item label="错误消息" prop="props.formRules.index.message">
        <el-input v-model="rule.message" :required="true" />
      </el-form-item>
      <div class="close" @click="onCloseRule(index)">
        <iconify-icon icon="ant-design:close-circle-outlined" :size="16" />
      </div>
    </div>
    <div class="button">
      <el-button @click="onAddRule">
        <iconify-icon icon="carbon:add-alt" />
        <span>添加验证规则</span>
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { DraggableItemConfig } from '/@/views/demo/form/types';
  const props = defineProps<{
    modelValue: DraggableItemConfig;
  }>();
  const formValue = reactive(props.modelValue);
  // const initProps = () => {
  //   if (!formValue.formRules) {
  //     formValue.formRules = [];
  //   } else {
  //     console.log('object');
  //     const index = formValue.formRules.findIndex((t) => !t.message);
  //     formValue.formRules.splice(index, 1);
  //   }
  // };
  // initProps();
  const onAddRule = () => {
    formValue.formRules.push({
      pattern: '',
      message: '',
    });
  };

  const onCloseRule = (index) => {
    formValue.formRules.splice(index, 1);
  };
</script>

<style scoped lang="scss">
  .rule-container {
    .item {
      padding: 20px;
      background: #f8f8f8;
      position: relative;
      border-radius: 10px;
      background-color: #f8f8f8;
      margin-bottom: 10px;
    }
    .close {
      cursor: pointer;
      position: absolute;
      right: 5px;
      top: 5px;
      color: var(--el-color-error);
    }
    .button {
      margin: 10px;
    }
  }
</style>
