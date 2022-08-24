<template>
  <el-drawer :model-value="true" @closed="onClose" title="表单项配置">
    <div class="config-container">
      <el-form :model="formValue" label-width="120px" label-position="left">
        <el-divider content-position="left">基本配置</el-divider>
        <el-form-item label="字段名">
          <el-input v-model="formValue.name" />
        </el-form-item>
        <el-form-item label="标题">
          <el-input v-model="formValue.label" />
        </el-form-item>
        <el-form-item label="提示文字">
          <el-input v-model="formValue.placeholder" />
        </el-form-item>
        <el-form-item label="表单栅格">
          <el-slider v-model="formValue.span" :min="0" :max="24" style="width: 95%" />
        </el-form-item>
        <el-form-item label="标签宽度">
          <el-input v-model="formValue.labelWidth">
            <template #append>px</template>
          </el-input>
        </el-form-item>
        <el-form-item label="组件宽度">
          <el-input v-model="formValue.width">
            <template #append>px</template>
          </el-input>
        </el-form-item>
        <el-form-item label="默认值">
          <el-input v-model="formValue.defaultValue" />
        </el-form-item>
        <!-- <el-divider content-position="left">组件配置</el-divider> -->
        <el-button-group>
          <el-button :type="remote ? 'default' : 'primary'" @click="remote = false"
            >静态数据</el-button
          >

          <el-button :type="remote ? 'primary' : 'default'" @click="remote = true"
            >动态数据</el-button
          >
        </el-button-group>
        <el-divider content-position="left" v-if="!remote">静态数据</el-divider>
        <OptionsInput :model-value="formValue.props?.options" v-if="!remote" />

        <el-divider content-position="left" v-if="remote">动态数据</el-divider>
        <RemoteInput :model-value="formValue.props?.remote" v-if="remote" />

        <el-divider content-position="left">状态设置</el-divider>
        <el-form-item label="是否显示标签">
          <el-switch v-model="formValue.showLabel" />
        </el-form-item>
        <el-form-item label="是否只读">
          <el-switch :model-value="formValue.props?.readonly" />
        </el-form-item>
        <el-form-item label="是否禁用">
          <el-switch :model-value="formValue.props?.disabled" />
        </el-form-item>
        <el-form-item label="是否必填">
          <el-switch v-model="formValue.required" />
        </el-form-item>
        <el-divider content-position="left">验证规则</el-divider>
        <RuleInput :model-value="formValue.rules" />
      </el-form>
    </div>
    <template #footer>
      <div style="flex: auto">
        <el-button @click="onClose">取消</el-button>
        <el-button type="primary" @click="onSave">保存</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<script setup lang="ts">
  import { DraggableItemProps, FormItemDrawerInstance } from '../types';

  import OptionsInput from './OptionsInput.vue';
  import RemoteInput from './RemoteInput.vue';
  import RuleInput from './RuleInput.vue';
  import { FormItemOption } from '/@/components/FormItem';

  const formValue = reactive<DraggableItemProps>({
    component: 'input',
    name: '',
    label: '',
    props: {
      options: [] as FormItemOption[],
      remote: {
        method: 'get',
        url: '',
        labelKey: 'label',
        valueKey: 'value',
        childerKey: 'children',
      },
    },
    rules: [],
  });

  const remote = ref(false); // true：动态数据 false ：静态数据

  const dialogShow = ref(false);

  const onOpen = (config: DraggableItemProps) => {
    Object.keys(config).forEach((t) => {
      formValue[t] = config[t];
    });
    dialogShow.value = true;
  };
  const onSave = () => {
    emits('save', unref(formValue));
    dialogShow.value = false;
  };
  const onClose = () => {
    dialogShow.value = false;
  };

  const emits = defineEmits<{ (e: 'save', value: DraggableItemProps) }>();

  defineExpose<FormItemDrawerInstance>({ open: onOpen });
</script>
<style scoped lang="scss">
  .config-container {
    margin: 20px;
    background-color: #fff;

    .footer {
      text-align: center;
    }
  }
</style>
