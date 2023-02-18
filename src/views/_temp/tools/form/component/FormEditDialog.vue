<!--
 * @Author: zhongkai1010 zhongkai1010@163.com
 * @Date: 2022-09-22 09:09:06
 * @LastEditors: zhongkai1010 zhongkai1010@163.com
 * @LastEditTime: 2022-09-23 17:24:09
 * @FilePath: \onework-tools-ui\src\views\tools\form\component\FormEditDialog.vue
 * @Description:
-->
<template>
  <el-dialog v-model="show">
    <template #header>
      <div class="header">
        <iconify-icon icon="akar-icons:edit" :size="32" />
        <span>{{ form.id ? '修改表单' : '创建表单' }}</span>
      </div>
    </template>
    <el-form ref="formRef" :model="form" label-position="top">
      <el-collapse v-model="collapse">
        <el-collapse-item title="基本信息" name="1">
          <el-row :gutter="20">
            <el-col :span="24">
              <el-form-item label="绑定模型" prop="modelId">
                <FormSelectAsync
                  v-model="form.modelId"
                  url="/api/tools/model/getAllModels"
                  label-key="displayName"
                  value-key="id"
                  style="width: 100%"
                />
              </el-form-item>
            </el-col>
            <el-col :span="24" :offset="0">
              <el-form-item
                label="表单名称"
                prop="name"
                :required="true"
                :rules="{ required: false, message: '模型名称是必填项！' }"
              >
                <el-input v-model="form.name" />
              </el-form-item>
            </el-col>
            <el-col :span="24" :offset="0">
              <el-form-item
                label="中文名"
                prop="displayName"
                :required="true"
                :rules="{ required: false, message: '中文名是必填项！' }"
              >
                <el-input v-model="form.displayName" />
              </el-form-item>
            </el-col>
            <el-col :span="24" :offset="0">
              <el-form-item label="分组" prop="group">
                <el-input v-model="form.group" />
              </el-form-item>
            </el-col>
            <el-col :span="24" :offset="0">
              <el-form-item label="提交URL" prop="url">
                <el-input v-model="form.url" />
              </el-form-item>
            </el-col>
            <el-col :span="24" :offset="0">
              <el-form-item label="是否分步" prop="isSetp">
                <el-switch v-model="form.isSetp" />
              </el-form-item>
            </el-col>
            <el-col :span="24" :offset="0">
              <el-form-item label="是否分组" prop="group">
                <el-switch v-model="form.group" />
              </el-form-item>
            </el-col>
            <el-col :span="24" :offset="0">
              <el-form-item label="是否操作按钮" prop="isOperate">
                <el-switch v-model="form.isOperate" />
              </el-form-item>
            </el-col>
            <el-col :span="24" :offset="0">
              <el-form-item label="描述" prop="remark">
                <el-input v-model="form.remark" type="textarea" :rows="5" />
              </el-form-item>
            </el-col>
          </el-row>
        </el-collapse-item>
        <el-collapse-item title="表单配置" name="2">
          <el-row :gutter="20">
            <el-col :span="24">
              <el-form-item label="标签位置" prop="props.labelPosition">
                <el-radio-group v-model="form.props.labelPosition">
                  <el-radio label="left">left</el-radio>
                  <el-radio label="right">right</el-radio>
                  <el-radio label="top">top</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="标签长度">
                <el-slider
                  v-model="form.props.labelWidth"
                  :min="1"
                  :max="100"
                  style="width: 90%; margin-left: 4%"
                />
              </el-form-item>
            </el-col>

            <el-col :span="24">
              <el-form-item label="标签的后缀" prop="props.labelSuffix">
                <el-input v-model="form.props.labelSuffix" clearable />
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="红色星号" prop="props.hideRequiredAsterisk">
                <el-switch v-model="form.props.hideRequiredAsterisk" />
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="星号位置" prop="props.requireAsteriskPosition">
                <el-radio-group v-model="form.props.requireAsteriskPosition">
                  <el-radio label="left">left</el-radio>
                  <el-radio label="right">right</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="是否显示校验错误信息" prop="props.showMessage">
                <el-switch v-model="form.props.showMessage" />
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="是否以行内形式展示校验信息" prop="props.inlineMessage">
                <el-switch v-model="form.props.inlineMessage" />
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="是否在输入框中显示校验结果反馈图标" prop="props.statusIcon">
                <el-switch v-model="form.props.statusIcon" />
              </el-form-item>
            </el-col>

            <el-col :span="24">
              <el-form-item
                label="是否在 rules 属性改变后立即触发一次验证"
                prop="props.validateOnRuleChange"
              >
                <el-switch v-model="form.props.validateOnRuleChange" />
              </el-form-item>
            </el-col>

            <el-col :span="24">
              <el-form-item label="组件尺寸" prop="props.size">
                <el-radio-group v-model="form.props.size">
                  <el-radio label="large">large</el-radio>
                  <el-radio label="default">default</el-radio>
                  <el-radio label="small">small</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item
                label="是否禁用该表单内的所有组件。 如果设置为 true, 它将覆盖内部组件的 disabled 属性"
                prop="props.disabled"
              >
                <el-switch v-model="form.props.disabled" />
              </el-form-item>
            </el-col>

            <el-col :span="24">
              <el-form-item label="当校验失败时，滚动到第一个错误表单项" prop="props.scrollToError">
                <el-switch v-model="form.props.scrollToError" />
              </el-form-item>
            </el-col>

            <el-col :span="24">
              <el-form-item label="栅格间隔" prop="layout.gutter">
                <el-slider
                  v-model="form.props.gutter"
                  :min="0"
                  :max="24"
                  style="width: 90%; margin-left: 4%"
                />
              </el-form-item>
            </el-col>

            <el-col :span="24">
              <el-form-item label="水平排列方式" prop="layout.justify">
                <el-radio-group v-model="form.props.justify">
                  <el-radio label="start">start</el-radio>
                  <el-radio label="end">end</el-radio>
                  <el-radio label="center">center</el-radio>
                  <el-radio label="space-around">space-around</el-radio>
                  <el-radio label="space-between">space-between</el-radio>
                  <el-radio label="space-evenly">space-evenly</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>

            <el-col :span="24">
              <el-form-item label="垂直排列方式" prop="layout.align">
                <el-radio-group v-model="form.props.align">
                  <el-radio label="top">top</el-radio>
                  <el-radio label="middle">middle</el-radio>
                  <el-radio label="bottom">bottom</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
        </el-collapse-item>
      </el-collapse>
    </el-form>
    <template #footer>
      <span>
        <el-button
          type="primary"
          :loading="saveFormFetch.isFetching.value"
          @click="onClickSubmit(formRef)"
          >提交</el-button
        >
        <el-button @click="show = false" :disabled="saveFormFetch.isFetching.value">关闭</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
  import { FormInstance } from 'element-plus';
  import { DEFULT_FORM } from '../../helps';

  import { FormEditInstance } from '../types';

  import formApi, { EditForm, Form } from '/@/api/tools/form';
  import { useHttpFetch } from '/@/hooks/fetch';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { log } from '/@/utils/log';

  const { message } = useMessage();
  const saveFormFetch = useHttpFetch(formApi.saveForm);
  const form = ref<EditForm>();
  const show = ref(false);
  const collapse = ref<string[]>(['1', '2']);
  const formRef = ref<FormInstance>();
  const emit = defineEmits<{ (e: 'save', value: Form) }>();

  const onClickSubmit = async (formEl: FormInstance | undefined) => {
    await formEl.validate(async (valid, fields) => {
      if (!valid) {
        log('submit form verification failed', fields);
        message('表单验证失败！', 'error');
        return;
      }
      const data = {
        ...form.value
      } as EditForm;
      const result = await saveFormFetch.execute(data);
      show.value = false;
      message('提交成功！', 'success');
      emit('save', result);
    });
  };
  const onOpen = async (value?: EditForm) => {
    show.value = true;
    if (value) {
      form.value = { ...value, props: value.props ?? {} };
    } else {
      form.value = { ...DEFULT_FORM };
    }
  };
  defineExpose<FormEditInstance>({
    open: onOpen
  });
</script>

<style lang="scss" scoped>
  .header {
    i {
      margin-right: 5px;
    }
    display: flex;
    align-items: center;
  }
  :deep(.el-form-item__label) {
    font-weight: 600;
  }
</style>
