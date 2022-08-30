<template>
  <div class="options-container">
    <el-divider content-position="left">静态数据</el-divider>
    <draggable
      group="options"
      :list="list"
      item-key="id"
      @start="dragging = true"
      @end="dragging = false"
    >
      <template #item="{ element, index }">
        <div class="option">
          <iconify-icon icon="mi:drag" :size="32" class="drag" />
          <el-form-item class="first" prop="props.options.index.label">
            <el-input
              :model-value="list[index].label"
              @update:model-value="(value) => (list[index].label = value)"
            />
          </el-form-item>
          <el-form-item prop="props.options.index.value">
            <el-input
              :model-value="list[index].value"
              @update:model-value="(value) => (list[index].value = value)"
            />
          </el-form-item>
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
</template>

<script setup lang="ts">
  import draggable from 'vuedraggable';
  import { FormItemOption } from '/@/components/FormItem';

  const props = defineProps<{
    modelValue: FormItemOption[];
  }>();

  const list = ref(props.modelValue ?? []);
  const dragging = ref(false);
  const onCloseOption = (option) => {
    const index = list.value.findIndex((t) => t.value == option.value);
    list.value.splice(index, 1);
  };

  const onAddOption = () => {
    list.value.push({
      label: '',
      value: '',
    });
  };
</script>

<style scoped lang="scss">
  .options-container {
    .option {
      display: flex;
      i {
        margin: 0 5px;
      }
      .drag {
        cursor: pointer;
      }
      .first {
        margin-right: 20px;
      }
      :deep(.el-form-item__content) {
        margin-left: 0px !important;
      }
    }
    .button {
      margin: 10px;
    }
  }
</style>
