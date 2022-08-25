<template>
  <div class="config-container">
    <el-drawer :model-value="dialogShow" @closed="onClose" title="表单项配置">
      <el-form :model="formValue" label-width="120px" label-position="left" ref="formRef">
        <el-divider content-position="left">基本配置</el-divider>
        <el-form-item label="字段名" :required="true" prop="name">
          <el-input v-model="formValue.name" />
        </el-form-item>
        <el-form-item label="标题" :required="true" prop="label">
          <el-input v-model="formValue.label" />
        </el-form-item>
        <el-form-item label="表单栅格">
          <el-slider
            v-model.number="formValue.span"
            :min="0"
            :max="24"
            style="width: 95%"
            prop="span"
          />
        </el-form-item>
        <el-form-item label="标签宽度">
          <el-input v-model="formValue.labelWidth" prop="labelWidth" />
        </el-form-item>
        <el-form-item label="组件宽度">
          <el-input v-model="formValue.width" prop="width" />
        </el-form-item>
        <el-form-item label="默认值">
          <el-input v-model="formValue.defaultValue" prop="defaultValue" />
        </el-form-item>
        <el-form-item label="提示文字">
          <el-input v-model="formValue.placeholder" prop="placeholder" />
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
        <OptionsInput v-model="formValue.props.options" v-if="!remote" />

        <el-divider content-position="left" v-if="remote">动态数据</el-divider>
        <RemoteInput v-model="formValue.props.remote" prop="props.remote" v-if="remote" />

        <el-divider content-position="left">验证规则</el-divider>
        <RuleInput v-model="formValue.formRules" prop="formRules" />

        <el-divider content-position="left">状态设置</el-divider>
        <el-form-item label="是否显示标签" :required="true" prop="showLabel">
          <el-switch v-model="formValue.showLabel" />
        </el-form-item>
        <el-form-item label="是否只读" :required="true">
          <el-switch v-model="formValue.props.readonly" prop="props.readonly" />
        </el-form-item>
        <el-form-item label="是否禁用" :required="true" prop="props.disabled">
          <el-switch v-model="formValue.props.disabled" />
        </el-form-item>
        <el-form-item label="是否必填">
          <el-switch v-model="formValue.required" prop="required" />
        </el-form-item>
      </el-form>

      <template #footer>
        <div style="flex: auto">
          <el-button @click="onClose">取消</el-button>
          <el-button type="primary" @click="onSave(formRef)">保存</el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
  import { FormInstance } from 'element-plus';
  import _ from 'lodash';
  import { Ref } from 'vue';
  import {
    DraggableItemProps,
    FormItemDrawerInstance,
    DEFAULT_DRAGGABLE_ITEM_CONFIG,
    FORM_LIST_PROVIDE_KEY,
    DraggableItemConfig,
  } from '../types';
  import OptionsInput from './OptionsInput.vue';
  import RemoteInput from './RemoteInput.vue';
  import RuleInput from './RuleInput.vue';
  import { useMessage } from '/@/hooks/web/useMessage';
  const { message } = useMessage();
  const formRef = ref<FormInstance>();
  const formValue = reactive<DraggableItemConfig>(DEFAULT_DRAGGABLE_ITEM_CONFIG);
  const formItems = inject<Ref<DraggableItemProps[]>>(FORM_LIST_PROVIDE_KEY);
  const remote = ref(false); // true：动态数据 false ：静态数据
  const dialogShow = ref(false);

  const onOpen = (id: string) => {
    const item = formItems.value.find((t) => t.id == id);
    Object.keys(item).forEach((t) => {
      console.log('-----------t--------------', t);
      formValue[t] = item[t];
    });
    console.log('-----------onOpen------------', formValue);
    dialogShow.value = true;
  };

  const onSave = (form: FormInstance) => {
    form.validate((valid, fields) => {
      if (valid) {
        console.log('-----------onSave formValue------------', formValue);
        const index = formItems.value.findIndex((t) => t.id == formValue.id);
        formItems.value.splice(index, 1, { ...formValue });
        dialogShow.value = false;
        console.log('-----------onSave fields------------', fields);
        console.log('-----------onSave formItems------------', formItems);
      } else {
        message('。。。');
      }
    });
  };

  const onClose = () => {
    dialogShow.value = false;
  };

  defineExpose<FormItemDrawerInstance>({ open: onOpen });
</script>
<style scoped lang="scss">
  .config-container {
    :deep(.el-drawer__header) {
      margin-bottom: 0px;
    }
    .footer {
      text-align: center;
    }
  }
</style>
