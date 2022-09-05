<template>
  <ul>
    <div class="config">
      <iconify-icon
        :icon="expand ? 'ic:baseline-expand-more' : 'ic:baseline-expand-less'"
        v-if="field.fields"
        @click="expand = !expand"
      />
      <el-col :span="4" :offset="0">
        <el-input v-model="field.name" placeholder="name" />
      </el-col>
      <el-col :span="4" :offset="0">
        <el-input v-model="field.title" placeholder="title" />
      </el-col>
      <el-col :span="4" :offset="0">
        <el-input v-model="field.type" placeholder="type" />
      </el-col>
      <el-col :span="4" :offset="0">
        <el-input v-model="field.remark" placeholder="remark" />
      </el-col>
      <div class="operate">
        <iconify-icon icon="icon-park-outline:expand-right" />
        <iconify-icon icon="icon-park-outline:expand-right" />
        <iconify-icon icon="icon-park-outline:expand-right" />
        <iconify-icon icon="icon-park-outline:expand-right" />
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

  const expand = ref(true);

  const field = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      console.log(value);
    },
  });
</script>

<style scoped lang="scss">
  ul {
    margin-left: 20px;
  }
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
      i {
        margin-left: 5px;
      }
    }
  }
</style>
