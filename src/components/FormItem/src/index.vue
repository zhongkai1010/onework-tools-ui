<template>
  <el-autocomplete
    :model-value="props.modelValue"
    v-bind="props.props"
    v-if="props.component == 'autodcomplete'"
  />
  <!-- Cascader 级联选择器 -->
  <el-cascader
    :model-value="props.modelValue"
    v-bind="(props.props as any)"
    v-if="props.component == 'cascader'"
    @update:model-value="(value) => $emit('update:modelValue', value)"
  />
  <!-- Checkbox 多选框 -->
  <el-checkbox-group
    :model-value="props.modelValue"
    v-bind="props.props"
    v-if="props.component == 'checkbox'"
    @update:model-value="(value) => $emit('update:modelValue', value)"
  >
    <el-checkbox v-for="option in props.props?.options" :key="option.value" :label="option.label" />
  </el-checkbox-group>
  <!-- ColorPicker 颜色选择器 -->
  <el-color-picker
    :model-value="props.modelValue"
    v-bind="props.props"
    v-if="props.component == 'color_picker'"
    @update:model-value="(value) => $emit('update:modelValue', value)"
  />
  <!-- DatePicker 日期选择器 -->
  <el-date-picker
    :model-value="props.modelValue"
    v-bind="{ ...props.props, type: 'date' }"
    v-if="props.component == 'date_picker'"
    @update:model-value="(value) => $emit('update:modelValue', value)"
  />
  <!-- DateTimePicker 日期时间选择器 -->
  <el-date-picker
    :model-value="props.modelValue"
    v-bind="{ ...props.props, type: 'datetime' }"
    v-if="props.component == 'date_time_picker'"
    @update:model-value="(value) => $emit('update:modelValue', value)"
  />
  <!-- Input Number 数字输入框 -->
  <el-input-number
    v-if="props.component == 'input_number'"
    v-bind="props.props"
    @update:model-value="(value) => $emit('update:modelValue', value)"
  />
  <!-- Radio 单选框 -->
  <el-radio-group
    :model-value="props.modelValue"
    v-bind="props.props"
    v-if="props.component == 'radio'"
    @update:model-value="(value) => $emit('update:modelValue', value)"
  >
    <el-radio v-for="option in props.props?.options" :label="option.label" :key="option.value">
      {{ option.label }}
    </el-radio>
  </el-radio-group>
  <!-- Rate 评分 -->
  <el-rate
    :model-value="props.modelValue"
    v-bind="props.props"
    v-if="props.component == 'rate'"
    @update:model-value="(value) => $emit('update:modelValue', value)"
  />
  <!-- Select 选择器 -->
  <el-select
    :model-value="props.modelValue"
    v-bind="props.props"
    v-if="props.component == 'select'"
    @update:model-value="(value) => $emit('update:modelValue', value)"
  >
    <el-option
      v-for="option in props.props?.options"
      :key="option.value"
      :label="option.label"
      :value="option.value"
    />
  </el-select>

  <!-- Slider 滑块 -->
  <el-slider
    v-bind="props.props"
    :model-value="props.modelValue"
    v-if="props.component == 'slider'"
    @update:model-value="(value) => $emit('update:modelValue', value)"
  />
  <!-- Switch 开关 -->
  <el-switch
    :model-value="props.modelValue"
    v-bind="props.props"
    v-if="props.component == 'switch'"
    @update:model-value="(value) => $emit('update:modelValue', value)"
  />
  <!--  TimePicker 时间选择器 -->
  <el-time-picker
    v-bind="props.props"
    :model-value="props.modelValue"
    v-if="props.component == 'time_picker'"
    @update:model-value="(value) => $emit('update:modelValue', value)"
  />
  <!--  TimeSelect 时间选择 -->
  <el-time-select
    :model-value="props.modelValue"
    v-bind="props.props"
    v-if="props.component == 'time_select'"
    @update:model-value="(value) => $emit('update:modelValue', value)"
  />
  <!--  Transfer 穿梭框 -->
  <el-transfer
    :model-value="props.modelValue"
    v-bind="props.props"
    v-if="props.component == 'transfer'"
    @update:model-value="(value) => $emit('update:modelValue', value)"
  />
  <!--  Upload 上传 -->
  <el-upload
    :model-value:file-list="props.modelValue"
    v-if="props.component == 'upload'"
    class="upload-demo"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    multiple
    @update:model-value="(value) => $emit('update:modelValue', value)"
  >
    <el-button type="primary">Click to upload</el-button>
    <template #tip>
      <div class="el-upload__tip"> jpg/png files with a size less than 500KB. </div>
    </template>
  </el-upload>
  <!--  Input 输入框 -->
  <el-input
    v-bind="props.props"
    :model-value="props.modelValue"
    v-if="props.component == 'input'"
    @update:model-value="(value) => $emit('update:modelValue', value)"
  />
</template>

<script setup lang="ts">
  import { FormComponent } from '..';

  const props = defineProps<{
    modelValue: any;
    component: FormComponent;
    props?: Recordable<any>;
  }>();
</script>

<style scoped></style>
