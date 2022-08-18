<template>
  <el-form
    :model="formValues"
    :label-position="props.labelPosition"
    :label-width="props.labelWidth"
    :hide-required-asterisk="false"
    ref="formRef"
  >
    <el-row :gutter="props.gutter">
      <el-col :span="item.span ?? 6" v-for="item in props.fields" :key="item.name">
        <el-form-item
          :label="item.label"
          :required="item.required ?? false"
          :prop="item.name"
          :rules="item.rules"
        >
          <!-- 自动补全输入框 -->
          <el-autocomplete
            v-model="formValues[item.name]"
            v-if="item.component == FormComponent.AUTODCOMPLETE"
          />
          <!-- Cascader 级联选择器 -->
          <el-cascader
            v-model="formValues[item.name]"
            v-else-if="item.component == FormComponent.CASCADER"
            :options="item.props?.options || []"
          />
          <!-- Checkbox 多选框 -->
          <el-checkbox-group
            v-model="formValues[item.name]"
            v-else-if="item.component == FormComponent.CHECKBOX"
          >
            <el-checkbox
              v-for="option in item.props?.options"
              :key="option.value"
              :label="option.label"
            />
          </el-checkbox-group>
          <!-- ColorPicker 颜色选择器 -->
          <el-color-picker
            v-model="formValues[item.name]"
            v-else-if="item.component == FormComponent.COLOR_RPICKER"
          />
          <!-- DatePicker 日期选择器 -->
          <el-date-picker
            v-model="formValues[item.name]"
            type="date"
            v-else-if="item.component == FormComponent.DATE_PICKER"
          />
          <!-- DateTimePicker 日期时间选择器 -->
          <el-date-picker
            v-model="formValues[item.name]"
            type="datetime"
            v-else-if="item.component == FormComponent.DATE_TIME_PICKER"
          />
          <!-- Input Number 数字输入框 -->
          <el-input-number v-else-if="item.component == FormComponent.INPUT_NUMBER" />
          <!-- Radio 单选框 -->
          <el-radio-group
            v-model="formValues[item.name]"
            v-else-if="item.component == FormComponent.RADIO"
          >
            <el-radio
              v-for="option in item.props?.options"
              :label="option.label"
              :key="option.value"
            >
              {{ option.label }}
            </el-radio>
          </el-radio-group>
          <!-- Rate 评分 -->
          <el-rate
            v-model="formValues[item.name]"
            v-else-if="item.component == FormComponent.RATE"
          />
          <!-- Select 选择器 -->
          <el-select
            v-model="formValues[item.name]"
            v-else-if="item.component == FormComponent.SELECT"
          >
            <el-option
              v-for="option in item.props?.options"
              :key="option.value"
              :label="option.label"
              :value="option.value"
            />
          </el-select>

          <!-- Slider 滑块 -->
          <el-slider
            v-model="formValues[item.name]"
            v-else-if="item.component == FormComponent.SLIDER"
            style="width: 90%"
          />
          <!-- Switch 开关 -->
          <el-switch
            v-model="formValues[item.name]"
            v-else-if="item.component == FormComponent.SWITCH"
          />
          <!--  TimePicker 时间选择器 -->
          <el-time-picker
            v-model="formValues[item.name]"
            v-else-if="item.component == FormComponent.TIME_PICKER"
          />
          <!--  TimeSelect 时间选择 -->
          <el-time-select
            v-model="formValues[item.name]"
            v-else-if="item.component == FormComponent.TIME_SELECT"
          />
          <!--  Transfer 穿梭框 -->
          <el-transfer
            v-model="formValues[item.name]"
            :data="[]"
            v-else-if="item.component == FormComponent.TRANSFER"
          />
          <!--  Upload 上传 -->
          <el-upload
            v-model:file-list="formValues[item.name]"
            v-else-if="item.component == FormComponent.UPLOAD"
            class="upload-demo"
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            multiple
          >
            <el-button type="primary">Click to upload</el-button>
            <template #tip>
              <div class="el-upload__tip"> jpg/png files with a size less than 500KB. </div>
            </template>
          </el-upload>
          <!--  Input 输入框 -->
          <el-input v-model="formValues[item.name]" v-else />
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script setup lang="ts">
  import { FormInstance } from 'element-plus';
  import { FormComponent, FormItem } from '..';
  import { getDefauleVlues } from './helps';

  const formRef = ref<FormInstance>();
  const props = defineProps<{
    name: string;
    gutter: number;
    labelPosition: 'top' | 'left' | 'right';
    labelWidth: string | number;
    fields: FormItem[];
  }>();

  const formValues = ref(getDefauleVlues(props.fields));

  defineExpose({ formRef, formValues });
</script>

<style scoped></style>
