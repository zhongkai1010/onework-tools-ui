<template>
  <div class="container">
    <el-divider content-position="left">数据配置</el-divider>
    <el-button-group>
      <el-button
        :type="modelValue.dataMode == 'static' ? 'primary' : 'default'"
        @click="onChangeDataMode('static')"
        >静态数据</el-button
      >
      <el-button
        :type="modelValue.dataMode == 'dynamic' ? 'primary' : 'default'"
        @click="onChangeDataMode('dynamic')"
        >动态数据</el-button
      >
    </el-button-group>

    <div class="options-container" v-if="modelValue.dataMode === 'static'">
      <draggable group="options" :list="modelValue.options" item-key="id">
        <template #item="{ element, index }">
          <div class="option">
            <iconify-icon icon="mi:drag" :size="32" class="drag" />
            <el-input
              placeholder="显示文本"
              :model-value="modelValue.options[index].label"
              @update:model-value="(value) => (modelValue.options[index].label = value)"
            />
            <el-input
              placeholder="选项值"
              :model-value="modelValue.options[index].value"
              @update:model-value="(value) => (modelValue.options[index].value = value)"
            />
            <iconify-icon
              icon="ant-design:close-circle-outlined"
              :size="32"
              @click="onCloseOption(element)"
            />
          </div>
        </template>
      </draggable>

      <div class="button">
        <el-button @click="onAddOption">
          <iconify-icon icon="carbon:add-alt" />
          <span>添加选项</span>
        </el-button>
      </div>
    </div>
    <div class="remote-container" v-if="modelValue.dataMode === 'dynamic'">
      <el-form-item label="接口地址">
        <el-input v-model="modelValue.remote.url">
          <template #prepend>
            <el-select v-model="modelValue.remote.method" style="width: 90px">
              <el-option label="POST" value="post" />
              <el-option label="GET" value="get" />
            </el-select>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="标签键名">
        <el-input v-model="modelValue.remote.labelKey" />
      </el-form-item>
      <el-form-item label="值键名">
        <el-input v-model="modelValue.remote.valueKey" />
      </el-form-item>
      <el-form-item label="子级键名">
        <el-input v-model="modelValue.remote.childerKey" />
      </el-form-item>
      <el-form-item label="搜索键名">
        <el-input v-model="modelValue.remote.searchKey" />
      </el-form-item>
    </div>
  </div>
</template>

<script setup lang="ts">
  import _ from 'lodash';
  import draggable from 'vuedraggable';
  import { FormComponentDataConfig, FormComponentDataMode } from '../..';

  interface Props {
    modelValue: FormComponentDataConfig;
  }

  const props = defineProps<Props>();

  const emit = defineEmits(['update:modelValue']);

  const modelValue = computed({
    get: () => {
      return props.modelValue;
    },
    set: (value) => {
      emit('update:modelValue', value);
    },
  });

  const onChangeDataMode = (mode: FormComponentDataMode) => {
    modelValue.value.dataMode = mode;
    console.log(modelValue.value);
  };

  const onCloseOption = (option) => {
    const index = modelValue.value.options.findIndex((t) => t.value == option.value);
    modelValue.value.options.splice(index, 1);
  };

  const onAddOption = () => {
    modelValue.value.options.push({
      label: '',
      value: '',
    });
  };
</script>

<style scoped lang="scss">
  .container {
    .remote-container {
      margin-top: 10px;
      .el-form-item {
        margin-bottom: 10px;
        :deep(.el-form-item__label) {
          font-weight: 700;
        }
      }
    }
    .options-container {
      margin-top: 10px;
      .option {
        margin-bottom: 10px;
        display: flex;
        i {
          margin: 0 5px;
        }
        .drag {
          cursor: pointer;
        }
        .el-input {
          margin-right: 10px;
        }
        .first {
          margin-right: 20px;
        }
        :deep(.el-form-item__content) {
          margin-left: 0px !important;
        }
      }
      .button {
        margin-top: 10px;
      }
    }
  }
</style>
