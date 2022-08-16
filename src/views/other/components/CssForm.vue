<template>
  <el-form :inline="true">
    <el-row>
      <el-col :span="24">
        <template v-for="input in Object.keys(inputs)" :key="input">
          <el-form-item :label="input">
            <ElSelect v-model="formValue[input]" @change="() => emit('onChange', formValue)">
              <el-option v-for="item in inputs[input]" :key="item" :label="item" :value="item" />
            </ElSelect>
          </el-form-item>
        </template>
      </el-col>
    </el-row>
    <el-row>
      <ElCol :span="4">
        <el-form-item label="numBox">
          <ElInputNumber v-model="formValue.numBox" @change="() => emit('onChange', formValue)" />
        </el-form-item>
      </ElCol>
      <ElCol :span="10">
        <el-form-item label="width">
          <el-slider
            v-model="formValue.width"
            style="width: 400px"
            @input="() => emit('onChange', formValue)"
          />
        </el-form-item>
      </ElCol>
      <el-col :span="10">
        <ElFormItem label="height">
          <el-slider
            v-model="formValue.height"
            style="width: 400px"
            @input="() => emit('onChange', formValue)"
          />
        </ElFormItem>
      </el-col>
    </el-row>
  </el-form>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';

  const inputs = {
    flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
    flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
    justifyContent: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
    alignItems: ['flex-start ', 'flex-end', 'center', 'baseline', 'stretch'],
    alignContent: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'],
  };

  const formValue = reactive({
    width: 40,
    height: 40,
    flexDirection: 'row',
    flexWrap: '',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    alignContent: 'stretch',
    numBox: 10,
  });

  const emit = defineEmits(['onChange']);
</script>

<style></style>
