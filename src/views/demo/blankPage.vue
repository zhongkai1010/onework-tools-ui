<template>
  <page-view class="page_wrapper">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card">
          <el-form :model="form" label-width="120px">
            <el-form-item label="Activity name">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="Activity zone">
              <el-select v-model="form.region" placeholder="please select your zone">
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
              </el-select>
            </el-form-item>
            <el-form-item label="Activity time">
              <el-col :span="11">
                <el-date-picker
                  v-model="form.date1"
                  type="date"
                  placeholder="Pick a date"
                  style="width: 100%"
                />
              </el-col>
              <el-col :span="2" class="text-center">
                <span class="text-gray-500">-</span>
              </el-col>
              <el-col :span="11">
                <el-time-picker
                  v-model="form.date2"
                  placeholder="Pick a time"
                  style="width: 100%"
                />
              </el-col>
            </el-form-item>
            <el-form-item label="Instant delivery">
              <el-switch v-model="form.delivery" />
            </el-form-item>
            <el-form-item label="Activity type">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="Online activities" name="type" />
                <el-checkbox label="Promotion activities" name="type" />
                <el-checkbox label="Offline activities" name="type" />
                <el-checkbox label="Simple brand exposure" name="type" />
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="Resources">
              <el-radio-group v-model="form.resource">
                <el-radio label="Sponsor" />
                <el-radio label="Venue" />
              </el-radio-group>
            </el-form-item>
            <el-form-item label="Activity form">
              <el-input v-model="form.desc" type="textarea" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary">Create</el-button>
              <el-button>Cancel</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <el-row :gutter="20">
            <el-col :span="24" style="margin-bottom: 20px">
              <el-button type="primary">生成表单</el-button>
              <el-button>重置</el-button>
            </el-col>
            <el-col :span="24">
              <codemirror
                v-model="code"
                placeholder="Code goes here..."
                :extensions="[json(), linter(jsonParseLinter())]"
                ref="view"
                @ready="log('ready', $event)"
                @change="log('change', $event)"
                @focus="log('focus', $event)"
                @blur="log('blur', $event)"
              />
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </page-view>
</template>

<script setup lang="ts">
  import { json, jsonParseLinter } from '@codemirror/lang-json';
  import { linter } from '@codemirror/lint';

  const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
  });
  const code = ref(
    JSON.stringify(
      {
        name: '',
        column: 20,
        fields: [
          {
            lable: '',
            name: '',
          },
        ],
      },
      null,
      '\t',
    ),
  );
  const log = console.log;
</script>

<style lang="scss" scoped>
  .page_wrapper {
    background-color: transparent !important;
    padding: 0px !important;
    .box-card {
      min-height: $main-no-margin-height;
    }
  }
</style>
