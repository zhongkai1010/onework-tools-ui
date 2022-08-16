<template>
  <page-view class="container">
    <el-row :gutter="20">
      <el-col :span="18"> <el-card>1</el-card> </el-col>
      <el-col :span="6">
        <el-card>1</el-card>
        <el-card>1</el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card>1</el-card>
      </el-col>
      <el-col :span="6">
        <el-card>1</el-card>
      </el-col>
      <el-col :span="6">
        <el-card>1</el-card>
      </el-col>
    </el-row>
  </page-view>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .container {
    background-color: transparent;
  }
</style>
