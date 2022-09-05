<template>
  <ul class="container">
    <div class="config">
      <iconify-icon
        :icon="expand ? 'ic:baseline-expand-more' : 'ic:baseline-expand-less'"
        v-if="field.fields"
        @click="expand = !expand"
      />
      <el-col :span="4">
        <el-input v-model="field.name" placeholder="name" />
      </el-col>
      <el-col :span="4">
        <el-input v-model="field.title" placeholder="title" />
      </el-col>
      <el-col :span="4">
        <el-input v-model="field.type" placeholder="type" />
      </el-col>
      <el-col :span="4">
        <el-input v-model="field.remark" placeholder="remark" />
      </el-col>
      <div class="operate">
        <iconify-icon icon="ant-design:setting-outlined" class="icon" />
        <iconify-icon
          icon="ant-design:close-outlined"
          style="color: var(--el-color-danger)"
          @click="emit('remove', field.name)"
          class="icon"
        />
        <el-dropdown @command="onAddProperty">
          <iconify-icon
            icon="ant-design:plus-outlined"
            style="color: var(--el-color-primary)"
            class="icon"
          />
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="same">添加兄弟节点</el-dropdown-item>
              <el-dropdown-item command="child">添加子节点</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <div v-if="expand">
      <field-item v-for="(item, index) in field.fields" :model-value="item" :key="index" />
    </div>
  </ul>
</template>

<script setup lang="ts">
  import { Property, PropertyType } from '../types';
  import FieldItem from './Field.vue';

  const props = defineProps<{
    modelValue: {
      name: string;
      title: string;
      type: PropertyType;
      arrayType?: PropertyType;
      required: boolean;
      remark?: string;
      fields?: Property[];
      enum?: string[];
      defalutValue?: any;
      mock?: string;
    };
  }>();
  const emit = defineEmits<{
    (e: 'update:modelValue', value: Property);
    (e: 'remove', value);
    (e: 'add', parent: string, type: 'same' | 'child');
  }>();

  const expand = ref(true);

  const field = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      emit('update:modelValue', value);
    },
  });

  const onAddProperty = (name: string, command: 'same' | 'child') => emit('add', name, command);
</script>

<style scoped lang="scss">
  .container {
    margin-left: 20px;
    .config {
      display: flex;
      margin-bottom: 10px;
      align-items: center;
      i {
        margin-right: 5px;
        margin-left: -20px;
        cursor: pointer;
      }
      .el-col {
        margin-right: 10px;
      }
      .operate {
        display: flex;
        align-items: center;
        .icon {
          margin-left: 5px;
        }
      }
    }
  }
</style>
