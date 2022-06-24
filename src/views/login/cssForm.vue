<template>
  <el-form :inline="true">
    <el-row>
      <el-col :span="24">
        <template v-for="input in Object.keys(inputs)" :key="input">
          <el-form-item :label="input">
            <el-select
              @change="() => emit('onChange', formValue)"
              v-model="formValue[input]"
            >
              <el-option
                v-for="item in inputs[input]"
                :key="item"
                :label="item"
                :value="item"
              />
            </el-select>
          </el-form-item>
        </template>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <el-form-item label="numBox">
          <el-input-number
            v-model="formValue.numBox"
            @change="() => emit('onChange', formValue)"
          />
        </el-form-item>
      </el-col>
      <el-col :span="10">
        <el-form-item label="width">
          <el-slider
            :min="1"
            :max="100"
            v-model="formValue.width"
            @change="() => emit('onChange', formValue)"
          />
        </el-form-item>
      </el-col>
      <el-col :span="10">
        <el-form-item label="height">
          <el-input-number
            :step="50"
            v-model="formValue.height"
            @change="() => emit('onChange', formValue)"
          />
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const inputs = {
  flexDirection: ["row", "row-reverse", "column", "column-reverse"],
  flexWrap: ["nowrap", "wrap", "wrap-reverse"],
  justifyContent: [
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around"
  ],
  alignItems: ["flex-start ", "flex-end", "center", "baseline", "stretch"],
  alignContent: [
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-around",
    "stretch"
  ]
};

const formValue = reactive({
  width: 1,
  height: 400,
  flexDirection: "row",
  flexWrap: "",
  justifyContent: "flex-start",
  alignItems: "stretch",
  alignContent: "stretch",
  numBox: 10
});

const emit = defineEmits(["onChange"]);
</script>

<style></style>
