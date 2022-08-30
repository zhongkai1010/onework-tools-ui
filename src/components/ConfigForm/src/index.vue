<template>
  <el-form v-bind="props" :model="formValue" ref="formRef">
    <el-row :gutter="props.config.gutter">
      <el-col :span="item.span ?? 6" v-for="item in props.config.fields" :key="item.name">
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
  import { ConfigFormItemProps } from '..';
  import { getDefauleVlues } from '../helps';
  import { log } from '/@/utils/log';

  const props = defineProps<{
    model?: Record<string, any>;
    config: {
      fields: ConfigFormItemProps[];
      gutter?: number;
      name: string;
    };
  }>();
  const formRef = ref<FormInstance>();

  const formValue = reactive(props.model ?? getDefauleVlues(props));

  watch(formValue, () => {
    log(`${props.config.name} config form value`, formValue);
  });

  defineExpose<{ formRef: Ref<FormInstance> }>({ formRef });

  const attrs = useAttrs();
  log('config-form props', attrs, props);
</script>

<style scoped></style> -->
