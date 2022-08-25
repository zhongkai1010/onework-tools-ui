<template>
  <div class="rule-container">
    <div class="item" v-for="(rule, index) in props.modelValue" :key="index">
      <el-form-item label="验证表达式" :prop="`${props.prop}.index.pattern`">
        <el-input v-model="rule.pattern" :required="true" />
      </el-form-item>
      <el-form-item label="错误消息" :prop="`${props.prop}.index.message`">
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
  const props = defineProps<{
    prop: string;
    modelValue: { pattern: string; message: string }[] | undefined;
  }>();

  const list = ref(props.modelValue ?? []);

  const emits = defineEmits<{
    (e: 'update:modelValue', value: { pattern: string; message: string }[]): void;
  }>();

  const onAddRule = () => {
    list.value.push({
      pattern: '',
      message: '',
    });
    emits('update:modelValue', list.value);
  };

  const onCloseRule = (index) => {
    list.value.splice(index, 1);
    emits('update:modelValue', list.value);
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
      margin: 20px;
    }
  }
</style>
