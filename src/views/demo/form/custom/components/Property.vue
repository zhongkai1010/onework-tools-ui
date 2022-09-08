<template>
  <ul class="container">
    <div class="form-container">
      <iconify-icon
        :icon="unfold ? 'ic:baseline-expand-more' : 'ic:baseline-expand-less'"
        v-if="props.unfold"
        @click="unfold = !unfold"
      />
      <el-checkbox
        v-model="property.required"
        :disabled="props.disabled"
        style="margin-right: 5px"
      />
      <el-col :span="4">
        <el-input v-model="property.name" placeholder="API名称" :disabled="props.disabled" />
      </el-col>
      <el-col :span="4">
        <el-input
          v-model="property.displayName"
          placeholder="字段名称"
          :disabled="props.disabled"
        />
      </el-col>
      <el-col :span="4">
        <el-select
          :model-value="props.array ? props.property.array : property.type"
          placeholder="字段类型"
          style="width: 100%"
          :disabled="props.root"
          @change="onChangeType"
        >
          <el-option
            v-for="item in PropertyTypeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-input v-model="property.remark" placeholder="remark" :disabled="props.disabled" />
      </el-col>
      <div class="operate">
        <iconify-icon
          v-if="props.close"
          class="icon"
          icon="ant-design:close-outlined"
          style="color: var(--el-color-danger)"
          @click="emit('remove', property)"
        />
        <iconify-icon
          v-if="props.add"
          @click="emit('add', property)"
          icon="ant-design:plus-outlined"
          style="color: var(--el-color-primary)"
          class="icon"
        />
        <el-dropdown @command="onAdd" v-if="props.dropdown">
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
    <div v-if="property.type === 'object'">
      <PropertyView
        v-for="(child, index) in props.modelValue.children"
        :key="index"
        :model-value="child"
        :array="false"
        :add="child.type !== 'object'"
        :dropdown="child.type === 'object'"
        :disabled="props.array"
        :property="child"
        :root="false"
        :unfold="child.type == 'object'"
        :close="true"
        @add="(value) => emit('add', value)"
        @remove="(value) => emit('remove', value)"
        @add-child="(value) => emit('addChild', value)"
      />
    </div>
    <div v-if="property.type === 'array'">
      <PropertyView
        :model-value="arrayProperty"
        :array="true"
        :property="property"
        :root="false"
        :add="props.property.array === 'object'"
        :dropdown="false"
        :disabled="true"
        :unfold="false"
        :close="false"
        @change-type="onChangeArrayType"
      />
    </div>
  </ul>
</template>

<script setup lang="ts">
  import { Property, PropertyType, PropertyTypeOptions } from '../types';

  import PropertyView from './Property.vue';
  import _ from 'lodash';
  import { log } from '/@/utils/log';

  interface Props {
    modelValue: Property;
    array?: boolean;
    property?: Property;
    add?: boolean;
    dropdown?: boolean;
    disabled?: boolean;
    root?: boolean;
    unfold?: boolean;
    close?: boolean;
  }
  const props = defineProps<Props>();

  const emit = defineEmits<{
    (e: 'update:modelValue', value: Property);
    (e: 'changeType', type: PropertyType);
    (e: 'remove', value: Property);
    (e: 'add', value: Property);
    (e: 'addChild', value: Property);
  }>();

  const unfold = ref(true);

  const property = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      emit('update:modelValue', value);
    }
  });

  const arrayProperty = reactive<Property>({
    type: 'string',
    array: 'string'
  });

  watch([arrayProperty], () => {
    log('watch array property', arrayProperty);
    log('watch props property', props);
  });

  const onAdd = (command) => {
    if (command === 'same') {
      emit('add', property.value);
    } else {
      emit('addChild', property.value);
    }
  };
  const onChangeType = (value) => {
    if (props.array) {
      emit('changeType', value);
    }
    property.value.type = value;
    emit('update:modelValue', property.value);
  };
  const onChangeArrayType = (value) => {
    property.value.array = value;
    emit('update:modelValue', property.value);
  };
</script>

<style scoped lang="scss">
  .container {
    margin-left: 20px;
    .form-container {
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
