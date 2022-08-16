<template>
  <card-view :left="true">
    <template #left>
      <el-tree :data="[]" :props="defaultProps" accordion>
        <template #default="{ data }">
          <div class="tree-node">
            <iconify-icon :icon="data.icon" :size="14" />
            <span>{{ data.title }} </span>
          </div>
        </template>
      </el-tree>
    </template>
    <el-form :model="form" label-width="120px">
      <el-form-item label="标题">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="路径">
        <el-input v-model="form.path" />
      </el-form-item>
      <el-form-item label="主键">
        <el-select v-model="form.primary" />
      </el-form-item>
      <el-form-item label="数据请求地址">
        <el-input v-model="form.url" />
      </el-form-item>
      <el-form-item label="数据保存地址">
        <el-input v-model="form.saveUrl" />
      </el-form-item>
      <el-form-item label="字段">
        <el-col :span="20">
          <el-input v-model="form.saveUrl" :width="100" />
        </el-col>
        <el-col :span="4">
          <el-button type="primary">Submit</el-button>
          <el-button type="primary">Submit</el-button>
        </el-col>
      </el-form-item>
      <el-form-item label="工具栏">
        <el-checkbox-group v-model="form.toolbar">
          <el-checkbox label="all" />
          <el-checkbox label="refresh" />
          <el-checkbox label="add" />
          <el-checkbox label="edit" />
          <el-checkbox label="delete" />
          <el-checkbox label="keywords" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="多选">
        <el-switch v-model="form.multiple" />
      </el-form-item>
      <el-form-item label="验证规则">
        <el-input v-model="form.formRules" type="textarea" />
      </el-form-item>
    </el-form>
  </card-view>
</template>

<script setup lang="ts">
  const defaultProps = {
    children: 'children',
    label: 'title',
  };
  const form = reactive({
    title: '',
    path: '', //页面地址
    primary: '', // 数据主键
    url: '', // 请求数据url
    saveUrl: '', // 保存数据url
    fields: [],
    toolbar: [], // 工具栏选项
    multiple: false, // 是否多选
    formRules: '',
  });
</script>

<style lang="scss" scoped>
  .tree-node {
    vertical-align: middle;
    font-size: var(--el-font-size-base);
    display: flex;
    align-items: center;

    i {
      margin-right: 5px;
    }
  }
</style>
<style lang="scss">
  .el-tree-node {
    padding: 5px;
  }
</style>
