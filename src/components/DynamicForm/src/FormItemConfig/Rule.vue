<template>
  <div class="rule-container">
    <el-divider content-position="left">验证规则</el-divider>
    <div class="item" v-for="(rule, index) in modelValue" :key="index">
      <el-col :span="11">
        <el-input v-model="rule.pattern" :required="true" />
      </el-col>
      <el-col :span="11" style="margin-left: 10px">
        <el-input v-model="rule.message" :required="true" />
      </el-col>
      <el-col :span="2">
        <div class="close" @click="onRemoveRule(index)">
          <iconify-icon icon="ant-design:close-circle-outlined" :size="32" />
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
  import _ from 'lodash';
  import { FormItemRule } from '/@/components/DynamicForm';

  interface Props {
    modelValue: FormItemRule[];
  }

  const props = defineProps<Props>();
  const emit = defineEmits(['update:modelValue']);
  const modelValue = computed({
    get: () => {
      return props.modelValue;
    },
    set: (value) => {
      emit(
        'update:modelValue',
        value.filter((t) => _.has(t, 'pattern')),
      );
    },
  });

  const onAddRule = () => {
    modelValue.value.push({
      pattern: '',
      message: '',
    });
  };

  const onRemoveRule = (index) => {
    modelValue.value.splice(index, 1);
  };
</script>

<style scoped lang="scss">
  .rule-container {
    .item {
      display: flex;
      position: relative;
      .close {
        cursor: pointer;
        color: var(--el-color-error);
        text-align: center;
      }
    }

    .button {
      margin-top: 10px;
    }
  }
</style>
