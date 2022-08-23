<template>
  <el-form
    :model="formValues"
    :label-position="props.labelPosition"
    :label-width="props.labelWidth"
    :hide-required-asterisk="false"
    ref="formRef"
  >
    <el-row :gutter="props.gutter">
      <el-col :span="item.span ?? 6" v-for="item in props.fields" :key="item.name">
        <el-form-item
          :label="item.label"
          :required="item.required ?? false"
          :prop="item.name"
          :rules="item.rules"
        >
          <form-item
            v-model="formValues[item.name]"
            :component="item.component"
            :props="item.props"
          />
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script setup lang="ts">
  import { FormInstance } from 'element-plus';
  import { ConfigFormItemProps } from '..';

  import { getDefauleVlues } from '../helps';

  const formRef = ref<FormInstance>();
  const props = defineProps<{
    gutter: number;
    labelPosition: 'top' | 'left' | 'right';
    labelWidth: string | number;
    fields: ConfigFormItemProps[];
  }>();

  const formValues = ref(getDefauleVlues(props.fields));

  defineExpose({ formRef, formValues });
</script>

<style scoped></style> -->
