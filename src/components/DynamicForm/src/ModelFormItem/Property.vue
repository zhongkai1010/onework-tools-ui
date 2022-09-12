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
          v-if="props.add"
          @click="emit('add', property)"
          icon="ant-design:plus-outlined"
          style="color: var(--el-color-primary)"
          class="icon"
        />
        <el-dropdown @command="onClickCommand" v-if="props.dropdown">
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
        <iconify-icon
          v-if="props.close"
          class="icon"
          icon="ant-design:close-outlined"
          style="color: var(--el-color-danger)"
          @click="emit('remove', property)"
        />
        <iconify-icon
          class="icon"
          icon="ant-design:setting-outlined"
          style="color: var(--el-color-success)"
          @click="onShow"
        />
      </div>
    </div>
    <div v-if="property.type === 'object' && unfold">
      <PropertyView
        v-for="(child, index) in props.modelValue.children"
        :key="index"
        :model-value="child"
        :array="false"
        :add="child.type !== 'object'"
        :dropdown="child.type === 'object'"
        :disabled="false"
        :property="child"
        :root="false"
        :unfold="child.type == 'object'"
        :close="true"
        @add="onAdd"
        @remove="onRemove"
        @add-child="onAddChild"
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
        :unfold="props.property.array === 'object'"
        :close="false"
        @add="onAdd"
        @change-type="onChangeArrayType"
        @remove="onRemove"
        @add-child="onAddChild"
      />
    </div>
  </ul>
</template>

<script setup lang="ts">
  import { Property, PropertyType, PropertyTypeOptions } from './types';

  import PropertyView from './Property.vue';
  import _ from 'lodash';
  import { log } from '/@/utils/log';
  import { useMessage } from '/@/hooks/web/useMessage';

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
  const { message } = useMessage();
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
  const arrayProperty = computed<Property>({
    get() {
      return {
        type: props.property?.array ?? 'string',
        children: props.property?.children ?? [],
        order: 1
      };
    },
    set(value) {
      emit('update:modelValue', value);
    }
  });
  const onClickCommand = (command) => {
    if (command === 'same') {
      emit('add', property.value);
    } else {
      emit('addChild', property.value);
    }
  };
  const onChangeType = (value: PropertyType) => {
    if (props.array && value === 'array') {
      message('暂不支持二维数组！', 'warning');
    } else {
      if (props.array) {
        emit('changeType', value);
      }
      property.value.type = value;
      // 移除多余字段信息
      if (value !== 'object') {
        property.value.children?.forEach((t) => {
          emit('remove', t);
        });
      }
      emit('update:modelValue', property.value);
    }
  };
  const onChangeArrayType = (value) => {
    if (!props.array) {
      property.value.array = value;
    } else {
      property.value.type = value;
    }
    emit('update:modelValue', property.value);
  };
  const onAdd = (value: Property) => {
    if (props.property?.array == 'object' && props.property?.type == 'array') {
      emit('addChild', props.property);
    } else {
      emit('add', value);
    }
  };
  const onRemove = (value) => emit('remove', value);
  const onAddChild = (value) => emit('addChild', value);
  const onShow = () => {
    log('show property', property.value);
    log('show prorps', props);
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
