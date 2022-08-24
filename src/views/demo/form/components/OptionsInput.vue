<template>
  <div class="options-container">
    <draggable
      group="options"
      :list="list"
      item-key="id"
      @start="dragging = true"
      @end="dragging = false"
      @change="onChange"
    >
      <template #item="{ element, index }">
        <div class="option">
          <iconify-icon icon="mi:drag" :size="32" class="drag" />
          <el-form-item class="first">
            <el-input
              :model-value="list[index].label"
              @update:model-value="(value) => (list[index].label = value)"
            />
          </el-form-item>
          <el-form-item>
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
  import { buildUUID } from '/@/utils/uuid';
  const props = defineProps<{
    modelValue: { label: string; value: string; id?: string }[] | undefined;
  }>();
  const emits = defineEmits<{
    (e: 'update:modelValue', value: { label: string; value: string; id?: string }[]);
  }>();
  const list = ref(props.modelValue ?? []);
  const dragging = ref(false);
  const onCloseOption = (option) => {
    const index = list.value.findIndex((t) => t.value == option.value);
    list.value.splice(index, 1);
  };
  const onChange = (value) => {
    emits('update:modelValue', value);
  };
  const onAddOption = () => {
    list.value.push({
      id: buildUUID(),
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
      margin: 20px;
    }
  }
</style>
