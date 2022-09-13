<template>
  <el-form :inline="true" :model="data" ref="formRef" :label-width="`120px`" label-position="right">
    <el-row :justify="'start'">
      <template v-for="(field, index) in props.fields" :key="index">
        <el-col :span="8">
          <el-form-item :label="field.label" :prop="field.name">
            <template v-if="field.component === 'select'">
              <el-select v-model="data[field.name]">
                <el-option
                  v-for="option in field.options"
                  :key="option.value"
                  :label="option.label"
                  :value="option.value"
                />
              </el-select>
            </template>
            <template v-else-if="field.component === 'radio'">
              <el-radio-group v-model="data[field.name]">
                <el-radio
                  v-for="option in field.options"
                  :label="option.value"
                  :key="option.value"
                  >{{ option.label }}</el-radio
                >
              </el-radio-group>
            </template>
            <template v-else-if="field.component === 'switch'">
              <el-switch v-model="data[field.name]" />
            </template>
            <template v-else-if="field.component === 'cascader'">
              <el-cascader v-model="data[field.name]" :options="field.options" />
            </template>
            <template v-else-if="field.component === 'checkbox'">
              <el-checkbox-group v-model="data[field.name]">
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
                v-model="data[field.name]"
                type="datetimerange"
                :format="field.props?.format ?? 'YYYY-MM-DD HH:mm:ss'"
              />
            </template>
            <template v-else-if="field.component === 'datepicker'">
              <el-date-picker
                v-model="data[field.name]"
                type="date"
                :format="field.props?.format ?? 'YYYY-MM-DD HH:mm:ss'"
              />
            </template>
            <template v-else-if="field.component === 'timepicker'">
              <el-time-picker
                v-model="data[field.name]"
                :format="field.props?.format ?? 'HH:mm:ss'"
              />
            </template>
            <template v-else>
              <el-input v-model="data[field.name]" />
            </template>
          </el-form-item>
        </el-col>
      </template>
      <el-col :span="6">
        <el-button @click="onReset(formRef)">重置</el-button>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-col>
    </el-row>
  </el-form>
</template>

<script setup lang="ts">
  import { FormInstance } from 'element-plus';
  import { reactive, ref } from 'vue';
  import { TablePageField } from '/@/api/system/page';

  import { initFieldsValue } from '/@/components/utils';

  const formRef = ref<FormInstance>();

  const props = defineProps<{
    fields: TablePageField[];
  }>();
  const emit = defineEmits<{
    (e: 'reset', values: Recordable<any>): void;
    (e: 'submit', values: Recordable<any>): void;
  }>();

  const data = reactive(initFieldsValue(props.fields));

  const onReset = (formEl: FormInstance | undefined) => {
    formEl.resetFields();
    emit('reset', data);
  };
  const onSubmit = () => emit('submit', data);
</script>

<style scoped></style>
