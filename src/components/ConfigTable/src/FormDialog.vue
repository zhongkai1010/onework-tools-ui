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
            <form-item
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
        <el-button @click="onClickClose">{{ editabled != 'show' ? '取消' : '关闭' }}</el-button>
        <el-button type="primary" @click="onSubmit(formRef)" v-if="editabled != 'show'"
          >提交</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
  import _ from 'lodash';
  import { FormInstance } from 'element-plus';
  import { reactive, ref } from 'vue';
  import { DataTableFieldProps, FormDialogInstance } from '..';
  import { getDefauleVlues } from '/@/components/ConfigForm/helps';
  import { CREATE_ITEM_TITLE_TEXT, EDITABLE_ITEM_TITLE_TEXT } from '/@/settings/constant';
  import { ConfigFormItemProps } from '/@/components/ConfigForm';

  const props = defineProps<{
    modelValue?: boolean;
    title?: string;
    fields: DataTableFieldProps[];
    rules?: any;
    editabled?: 'add' | 'edit' | 'show';
  }>();

  const editabled = ref<'add' | 'edit' | 'show'>(props.editabled ?? 'add');
  const formFields = computed<ConfigFormItemProps[]>(() => {
    const tempFields = props.fields.filter((t) => !t.editable?.hide);
    const newFields: ConfigFormItemProps[] = [];
    for (let index = 0; index < tempFields.length; index++) {
      const tableField = tempFields[index];
      const formField: ConfigFormItemProps = {
        label: tableField.label,
        name: tableField.name,
        span: tableField.editable?.span ?? 24,
        component: tableField.editable?.component ?? 'input',
        defaultValue: tableField.editable?.defaultValue,
        required: tableField.editable?.required ?? false,
        rules: tableField.editable?.rules,
        props: tableField.editable?.props || {},
      };
      if (editabled.value == 'show') {
        formField.props.disabled = true;
      }
      newFields.push(formField);
    }
    return newFields;
  });
  const dialogShow = ref(props.modelValue ?? false);
  const dialogTitle = ref(props.title);
  const formValue = reactive(getDefauleVlues(formFields.value));
  const formRef = ref(null);

  const onClickOpen = (
    editable?: 'add' | 'edit' | 'show',
    defaultValue?: Recordable<any>,
    title?: string,
  ) => {
    console.log('-------------defaultValue-------------', defaultValue);
    dialogShow.value = true;
    editabled.value = editable ?? 'add';
    dialogTitle.value = title;

    if (editable != 'add' && defaultValue) {
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
