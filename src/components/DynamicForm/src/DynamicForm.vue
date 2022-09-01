<template>
  <el-form v-bind="props.props" :model="formValue" ref="formRef">
    <el-row v-bind="props.layout">
      <el-col :span="item.span ?? 6" v-for="item in props.fields" :key="item.name">
        <el-form-item v-bind="item.props">
          <form-item
            v-model="formValue[item.name]"
            :component="item.component.component"
            :props="item.component.props"
            :config="item.component.config"
          />
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script setup lang="ts">
  import { FormInstance } from 'element-plus';
  import { Ref } from 'vue';
  import { DynamicFormConfig, DynamicFormField } from '..';
  import { getFormDefauleVlue } from '../helps';
  import { log } from '/@/utils/log';

  interface DynamicFormConfigProp extends Partial<DynamicFormConfig> {
    fields: Required<DynamicFormField[]>;
  }

  const props = defineProps<DynamicFormConfigProp>();
  const formRef = ref<FormInstance>();

  const formValue = reactive(props.model ?? getFormDefauleVlue(props.fields));

  watch(formValue, () => {
    log(`${props.name} config form value`, formValue);
  });

  defineExpose<{ formRef: Ref<FormInstance> }>({ formRef });

  const attrs = useAttrs();
  log('config-form props', attrs, props);
</script>

<style scoped></style> -->
