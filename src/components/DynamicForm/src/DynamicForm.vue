<template>
  <el-form v-bind="props.props" :model="formValue" ref="formRef">
    <el-row v-bind="props.layout">
      <el-col :span="item.span ?? 6" v-for="item in props.fields" :key="item.name">
        <el-form-item v-bind="handleFormItemProps(item.props)">
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
  import { DynamicFormField, DynamicFormFieldProps, DynamicFormLayout, DynamicFormProps } from '..';
  import { getFormDefauleVlue } from '../helps';
  import { log } from '/@/utils/log';

  const props = defineProps<{
    model?: Recordable<any>;
    name: string;
    url?: string;
    fields: DynamicFormField[];
    layout?: Partial<DynamicFormLayout>;
    props?: Partial<DynamicFormProps>;
  }>();
  const formRef = ref<FormInstance>();

  const formValue = reactive(props.model ?? getFormDefauleVlue(props.fields));

  const handleFormItemProps = (value: Partial<DynamicFormFieldProps>) => {
    const itemProps = { ...value };
    if (itemProps.verifies) {
      itemProps.rules = [];
      itemProps.verifies.forEach((t) => {
        itemProps.rules.push(t);
      });
    }
    return itemProps;
  };

  watch(formValue, () => {
    log(`${props.name} config form value`, formValue);
  });

  defineExpose<{ formRef: Ref<FormInstance> }>({ formRef });

  const attrs = useAttrs();
  log('config-form props', attrs, props);
</script>

<style scoped></style> -->
