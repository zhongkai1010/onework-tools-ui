<template>
  <page-view :bgColor="true" class="container">
    <el-steps :active="active" finish-status="success">
      <el-step title="基本信息" />
      <el-step title="方案摘要" />
      <el-step title="参与单位" />
    </el-steps>
    <el-form
      :model="formValue"
      ref="formRef"
      :rules="rules"
      label-width="160px"
      label-position="right"
      label-suffix=":"
    >
      <fieldset v-if="active == 0">
        <legend>
          <iconify-icon icon="akar-icons:two-line-vertical" :size="18" />
          <span>项目基本信息</span>
        </legend>
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item label="临床试验项目名" prop="name">
              <el-input v-model="formValue.name" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="临床试验名简称" prop="name">
              <el-input v-model="formValue.name2" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="登记号" prop="name">
              <el-input v-model="formValue.name3" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="登记时间" prop="name">
              <el-date-picker v-model="formValue.name4" type="date" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="项目编号" prop="name">
              <el-input v-model="formValue.name5" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="临床试验方案号" prop="name">
              <el-input v-model="formValue.name6" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="盲法类型" prop="name">
              <el-radio-group v-model="formValue.name7">
                <el-radio :label="3">Option A</el-radio>
                <el-radio :label="6">Option B</el-radio>
                <el-radio :label="9">Option C</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="适应症" prop="name">
              <el-input v-model="formValue.name8" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="NMPA批件/通知书日期" prop="name">
              <el-date-picker v-model="formValue.name9" type="date" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="中心类别" prop="name">
              <el-radio-group v-model="formValue.name10">
                <el-radio :label="3">Option A</el-radio>
                <el-radio :label="6">Option B</el-radio>
                <el-radio :label="9">Option C</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="是否国际项目" prop="name">
              <el-radio-group v-model="formValue.name11">
                <el-radio :label="3">Option A</el-radio>
                <el-radio :label="6">Option B</el-radio>
                <el-radio :label="9">Option C</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="研究中心数量" prop="name">
              <el-input v-model="formValue.name12" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="是否竞争入组" prop="name">
              <el-radio-group v-model="formValue.name13">
                <el-radio :label="3">Option A</el-radio>
                <el-radio :label="6">Option B</el-radio>
                <el-radio :label="9">Option C</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="试验计划起止时间" prop="name">
              <el-date-picker v-model="formValue.name14" type="datetimerange" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="备注" prop="name">
              <el-input v-model="formValue.name15" type="textarea" :rows="5" />
            </el-form-item>
          </el-col>
        </el-row>
      </fieldset>
      <fieldset v-if="active == 1">
        <legend>
          <iconify-icon icon="akar-icons:two-line-vertical" :size="18" />
          <span>研究药物信息</span>
        </legend>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="研究药物中文名称" prop="name">
              <el-input v-model="formValue.name16" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="研究药物英文名称" prop="name">
              <el-input v-model="formValue.name17" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="研究药物注册分类" prop="name">
              <el-cascader v-model="formValue.name18" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="剂型" prop="name">
              <el-select v-model="formValue.name19" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="规格" prop="name">
              <el-input v-model="formValue.name20" />
            </el-form-item>
          </el-col>
        </el-row>
      </fieldset>
      <div class="button">
        <el-button type="primary" @click="onSubmit(formRef)">保存</el-button>
        <el-button>重置</el-button>
        <el-button @click="next">Next step</el-button>
      </div>
    </el-form>
  </page-view>
</template>

<script setup lang="ts">
  import { FormInstance, FormRules } from 'element-plus';

  import { log } from '/@/utils/log';
  import IconifyIcon from '/@/components/IconifyIcon/src/iconifyIcon.vue';
  //  import { useMessage } from '/@/hooks/web/useMessage';
  // const { message } = useMessage();
  const formValue = reactive<Recordable<any>>({});
  const formRef = ref<FormInstance>();
  const rules = reactive<FormRules>({
    name: [
      {
        pattern: '^[A-Za-z0-9]{4,40}$',
        message: '请输入正确用户名！',
        trigger: 'blur',
      },
    ],
  });
  const onSubmit = (form: FormInstance | undefined) => {
    if (!form) return;
    form.validate((valid, error) => {
      if (valid) {
        log('submit', formValue);
      } else {
        log('error', error);
        return false;
      }
    });
  };

  const active = ref(0);

  const next = () => {
    if (active.value++ > 2) active.value = 0;
  };
</script>

<style lang="scss" scoped>
  .container {
    fieldset {
      legend {
        padding: 10px;
        display: flex;
        align-items: center;
        font-size: 18px;
        cursor: pointer;
        i {
          color: var(--el-color-primary);
        }
      }
      border-top: 1px solid var(--el-border-color);
      padding: 10px;
    }
    .button {
      margin-top: 10px;
      text-align: right;
    }
    :deep(.el-form-item__label) {
      font-weight: 700;
    }
  }
</style>
