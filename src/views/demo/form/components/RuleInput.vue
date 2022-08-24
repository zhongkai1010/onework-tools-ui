<template>
  <div class="rule-container">
    <div class="item" v-for="(rule, index) in list" :key="index">
      <el-form-item label="验证表达式">
        <el-input
          :model-value="list[index].pattern"
          @update:model-value="(value) => (list[index].pattern = value)"
        />
      </el-form-item>
      <el-form-item label="错误消息">
        <el-input
          :model-value="list[index].message"
          @update:model-value="(value) => (list[index].message = value)"
        />
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
    modelValue: { pattern: string; message: string; id?: string }[] | undefined;
  }>();
  const list = ref(props.modelValue ?? []);
  const onAddRule = () => {
    list.value.push({
      pattern: '',
      message: '',
    });
  };
  const onCloseRule = (index) => {
    list.value.splice(index, 1);
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
