<template>
  <el-dialog
    :model-value="dialogShow"
    :title="`${dialogTitle ? dialogTitle + ' - ' : ''}${$t(
      editabled ? EDITABLE_ITEM_TITLE_TEXT : CREATE_ITEM_TITLE_TEXT,
    )}`"
    @closed="onClickClose"
  >
    <el-form
      :model="formValue"
      label-position="top"
      :label-width="120"
      :hide-required-asterisk="false"
      ref="formRef"
    >
      <el-row :gutter="20">
        <el-col :span="item.span ?? 6" v-for="item in formFields" :key="item.name">
          <el-form-item
            :label="item.label"
            :required="item?.required ?? false"
            :prop="item.name"
            :rules="item?.rules"
          >
            <DynamicFormItem
              v-model="formValue[item.name]"
              :component="item.component"
              :props="item.props"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="onClickClose">取消</el-button>
        <el-button type="primary" @click="onSubmit(formRef)">提交</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
  import { FormInstance } from 'element-plus';
  import _ from 'lodash';

  import { reactive, ref } from 'vue';
  import { DataTableFieldProps, FormDialogInstance } from '..';
  import { getDefauleVlues } from '/@/components/DynamicForm/src/helps';
  import { FormItem } from '/@/components/DynamicForm';
  import { CREATE_ITEM_TITLE_TEXT, EDITABLE_ITEM_TITLE_TEXT } from '/@/settings/constant';

  const props = defineProps<{
    modelValue?: boolean;
    title?: string;
    fields: DataTableFieldProps[];
    rules?: any;
    editabled?: boolean;
  }>();

  const formFields = computed<FormItem[]>(() => {
    const tempFields = props.fields.filter((t) => !t.editable?.hide);
    const newFields = [];
    for (let index = 0; index < tempFields.length; index++) {
      const field = tempFields[index];
      newFields.push({
        label: field.label,
        name: field.name,
        span: field.editable?.span ?? 24,
        component: field.editable?.component ?? 'input',
        defaultValue: field.editable?.defaultValue,
        required: field.editable?.required ?? false,
        rules: field.editable?.rules,
      });
    }
    return newFields;
  });

  const dialogShow = ref(props.modelValue ?? false);
  const dialogTitle = ref(props.title);
  const editabled = ref(props.editabled ?? false);
  const formValue = reactive(getDefauleVlues(formFields.value));
  const formRef = ref(null);

  const onClickOpen = (editable?: boolean, defaultValue?: Recordable<any>, title?: string) => {
    dialogShow.value = true;
    editabled.value = editable ?? false;
    dialogTitle.value = title;
    if (editable && defaultValue) {
      const keys = Object.keys(defaultValue);
      keys.forEach((t) => {
        formValue[t] = defaultValue[t];
      });
    } else {
      const keys = Object.keys(formValue);
      keys.forEach((t) => {
        formValue[t] = undefined;
      });
    }
  };
  const onClickClose = () => {
    dialogShow.value = false;
  };

  const onSubmit = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate((valid) => {
      console.log('------------valid-----------------', valid);
      console.log('------------onSubmit-----------------', formValue);
    });
  };

  defineExpose<FormDialogInstance>({ open: onClickOpen, close: onClickClose });
</script>

<style scoped></style>
