<template>
  <div class="rule-container">
    <el-divider content-position="left">验证规则</el-divider>
    <div class="item" v-for="(rule, index) in rules" :key="index">
      <el-col :span="11">
        <el-form-item label="验证表达式">
          <el-input v-model="rule.pattern" :required="true" />
        </el-form-item>
      </el-col>
      <el-col :span="11" style="margin-left: 10px">
        <el-form-item label="错误消息">
          <el-input v-model="rule.message" :required="true" />
        </el-form-item>
      </el-col>
      <el-col :span="2">
        <div class="close" @click="onRemoveRule(index)">
          <iconify-icon icon="ant-design:close-circle-outlined" :size="16" />
        </div>
      </el-col>
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
  import { FormItemRule } from '/@/components/DynamicForm';

  const props = defineProps<{
    modelValue: FormItemRule[];
  }>();
  const emits = defineEmits<{ (e: 'update:modelValue', value: FormItemRule[]) }>();

  const rules = ref<FormItemRule[]>([]);

  const onAddRule = () => {
    rules.value.push({
      pattern: '',
      message: '',
    });
  };

  const onRemoveRule = (index) => {
    rules.value.splice(index, 1);
  };

  watchEffect(() => {
    rules.value = props.modelValue;
  });
  watch([rules], () => {
    emits('update:modelValue', rules.value);
  });
</script>

<style scoped lang="scss">
  .rule-container {
    .item {
      display: flex;
      padding: 10px;
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
