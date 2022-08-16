<template>
  <el-dialog
    :model-value="props.show"
    :title="`${props.title}${props.editable ? EDITABLE_ITEM_TITLE_TEXT : CREATE_ITEM_TITLE_TEXT}`"
    @closed="emit('cancel')"
  >
    <el-form ref="formRef" :model="formValues">
      <el-row>
        <!-- <el-form-item
          v-for="(field, index) in fields"
          :label="field.label"
          :prop="field.name"
          :key="index"
        >
          <el-col :span="field.editableSpan">
            <template v-if="field.component === 'select'">
              <el-select v-model="formValues[field.name]">
                <el-option
                  v-for="option in field.options"
                  :key="option.value"
                  :label="option.label"
                  :value="option.value"
                />
              </el-select>
            </template>
            <template v-else-if="field.component === 'radio'">
              <el-radio-group v-model="formValues[field.name]">
                <el-radio
                  v-for="option in field.options"
                  :label="option.value"
                  :key="option.value"
                  >{{ option.label }}</el-radio
                >
              </el-radio-group>
            </template>
            <template v-else-if="field.component === 'switch'">
              <el-switch v-model="formValues[field.name]" />
            </template>
            <template v-else-if="field.component === 'cascader'">
              <el-cascader v-model="formValues[field.name]" :options="field.options" />
            </template>
            <template v-else-if="field.component === 'checkbox'">
              <el-checkbox-group v-model="formValues[field.name]">
                <el-checkbox
                  v-for="option in field.options"
                  :key="option.value"
                  :label="option.label"
                  :name="field.name"
                />
              </el-checkbox-group>
            </template>
            <template v-else-if="field.component === 'datetimerange'">
              <el-date-picker
                v-model="formValues[field.name]"
                type="datetimerange"
                :format="field.props?.format ?? 'YYYY-MM-DD HH:mm:ss'"
              />
            </template>
            <template v-else-if="field.component === 'datepicker'">
              <el-date-picker
                v-model="formValues[field.name]"
                type="date"
                :format="field.props?.format ?? 'YYYY-MM-DD HH:mm:ss'"
              />
            </template>
            <template v-else-if="field.component === 'timepicker'">
              <el-time-picker
                v-model="formValues[field.name]"
                :format="field.props?.format ?? 'HH:mm:ss'"
              />
            </template>
            <template v-else>
              <el-input v-model="formValues[field.name]" />
            </template>
          </el-col>
        </el-form-item> -->
      </el-row>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="onCancel">取消</el-button>
        <el-button type="primary" @click="onSubmit(formRef)">提交</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
  import { FormInstance } from 'element-plus';
  import { reactive, ref } from 'vue';
  import { TablePageField } from '/@/api/model/page';
  import { CREATE_ITEM_TITLE_TEXT, EDITABLE_ITEM_TITLE_TEXT } from '/@/settings/constant';

  const formRef = ref(null);

  const props = defineProps<{
    show: boolean;
    title: string;
    editable: boolean;
    fields: TablePageField[];
    rules?: any;
    formValue: Recordable<any>;
  }>();

  const emit = defineEmits<{
    (e: 'submit'): void;
    (e: 'cancel'): void;
  }>();

  const formValues = reactive(props.formValue);

  const onSubmit = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate((valid) => {
      if (valid) {
        formValues.emit('submit');
      }
    });
  };
  const onCancel = () => {
    emit('cancel');
  };
</script>

<style scoped></style>
