<template>
  <ul class="container">
    <div class="form-container">
      <iconify-icon
        :icon="unfold ? 'ic:baseline-expand-more' : 'ic:baseline-expand-less'"
        v-if="state.fold"
        @click="unfold = !unfold"
      />
      <el-checkbox
        v-model="property.required"
        :disabled="property.disabled"
        style="margin-right: 5px"
      />
      <el-col :span="4">
        <el-input v-model="property.name" placeholder="API名称" :disabled="property.disabled" />
      </el-col>
      <el-col :span="4">
        <el-input
          v-model="property.displayName"
          placeholder="字段名称"
          :disabled="property.disabled"
        />
      </el-col>
      <el-col :span="4">
        <el-select
          v-model="property.type"
          placeholder="字段类型"
          style="width: 100%"
          :disabled="property.root"
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
        <el-input v-model="property.remark" placeholder="remark" :disabled="property.disabled" />
      </el-col>
      <div class="operate">
        <iconify-icon
          icon="ant-design:close-outlined"
          style="color: var(--el-color-danger)"
          @click="emit('remove', property)"
          class="icon"
        />
        <iconify-icon
          v-if="state.add"
          icon="ant-design:plus-outlined"
          style="color: var(--el-color-primary)"
          class="icon"
          @click="emit('add', property)"
        />
        <el-dropdown @command="onAdd" v-if="state.dropdown">
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
        v-for="(child, index) in property.children"
        :model-value="child"
        :key="index"
        @update-model="(val) => (property.children[index] = val)"
      />
    </div>
    <div v-if="property.type === 'array'">
      <PropertyView
        v-for="(child, index) in children"
        :model-value="child"
        :key="index"
        @update-model="(val) => (property.children[index] = val)"
      />
    </div>
  </ul>
</template>

<script setup lang="ts">
  import { Property, PropertyTypeOptions } from '../types';

  import PropertyView from './Property.vue';
  import _ from 'lodash';
  // import { log } from '/@/utils/log';

  interface Props {
    modelValue: Property;
  }
  const props = defineProps<Props>();

  const emit = defineEmits<{
    (e: 'update:modelValue', value: Property);
    (e: 'remove', value: Property);
    (e: 'add', value: Property);
    (e: 'addChild', value: Property);
  }>();

  const unfold = ref(true);
  const children = ref<Property[]>([
    {
      uid: props.modelValue.uid,
      name: '',
      displayName: '',
      type: 'string',
      required: false,
      children: props.modelValue.children,
      disabled: true
    }
  ]);
  watch(children.value, () => {
    property.value.array = children.value[0].type;
    property.value.children = children.value[0].children;
  });
  // const children = computed({
  //   get() {
  //     if (props.modelValue.type != 'array') return props.modelValue.children;
  //     const temp: Property = toRef();

  //     return [toRefs(temp)];
  //   },
  //   set(value) {
  //     log('children', value);
  //   }
  // });
  const property = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      emit('update:modelValue', value);
    }
  });
  const state = computed(() => {
    return {
      add: props.modelValue.type == 'object',
      dropdown: props.modelValue.array == 'object',
      fold: props.modelValue.type === 'array' || props.modelValue.type === 'object'
    };
  });
  const onAdd = (command) => {
    if (command === 'same') {
      emit('add', property.value);
    } else {
      emit('addChild', property.value);
    }
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
