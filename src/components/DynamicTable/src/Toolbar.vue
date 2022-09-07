<template>
  <div class="toolbar-container">
    <div class="title" v-if="props.title">{{ props.title }}</div>
    <div class="button">
      <el-space wrap>
        <el-button type="primary" v-if="state.refresh" @click="emits('refresh')">
          <iconify-icon icon="ci:refresh" />
        </el-button>
        <el-button type="primary" v-if="state.add" @click="emits('add')">新增</el-button>
        <el-button
          v-if="state.edit"
          @click="emits('edit', props.selectRow)"
          :disabled="isEmpty(props.selectRow)"
        >
          编辑
        </el-button>
        <el-button
          type="danger"
          v-if="state.remove"
          @click="emits('remove', props.selectRow)"
          :disabled="isEmpty(props.selectRow)"
        >
          删除</el-button
        >
      </el-space>
    </div>
    <div class="search">
      <el-input
        placeholder="请输入搜索关键字"
        @input="(val) => (keywords = val)"
        :model-value="keywords"
        clearable
        @clear="onClickClear"
        @keyup.enter="onChangKeywords"
        v-if="state.search"
      />
      <el-button-group v-if="state.search || state.column">
        <el-button @click="onChangKeywords" type="primary" :disabled="isEmpty(keywords)">
          <iconify-icon icon="ant-design:search-outlined" v-if="state.search" />
        </el-button>
        <el-popover placement="bottom" v-if="state.column">
          <template #reference>
            <el-button>
              <iconify-icon icon="ci:table" />
            </el-button>
          </template>
          <el-checkbox-group :model-value="showFields" @change="onChangField">
            <el-checkbox v-for="(field, index) in props.fields" :key="index" :label="field.label" />
          </el-checkbox-group>
        </el-popover>
      </el-button-group>
    </div>
  </div>
</template>

<script setup lang="ts">
  import _, { isEmpty } from 'lodash';
  import { DataTableFieldConfig, OperateType } from '..';

  const props = defineProps<{
    selectRow?: Recordable<any> | undefined;
    title?: string;
    fields: DataTableFieldConfig[]; // 字段
    toolbar?: OperateType[]; // 工具栏选项
  }>();

  const keywords = ref('');
  const showFields = ref(props.fields.filter((t) => !t.hide).map((t) => t.label));

  const emits = defineEmits<{
    (event: 'refresh'): void;
    (event: 'add'): void;
    (event: 'edit', value: Recordable<any>): void;
    (event: 'remove', value: Recordable<any>): void;
    (event: 'changKeywords', value: string): void;
    (event: 'clearKeywords'): void;
    (event: 'changField', value: any): void;
  }>();

  const state = computed(() => {
    return {
      refresh: props.toolbar?.includes('refresh'),
      add: props.toolbar?.includes('edit'),
      edit: props.toolbar?.includes('edit'),
      remove: props.toolbar?.includes('remove'),
      search: props.toolbar?.includes('search'),
      column: props.toolbar?.includes('column')
    };
  });

  const onClickClear = () => {
    keywords.value = '';
    emits('clearKeywords');
  };

  const onChangKeywords = () => {
    if (!isEmpty(keywords.value)) {
      emits('changKeywords', keywords.value);
    }
  };

  const onChangField = (value) => {
    showFields.value = value;
    emits('changField', value);
  };
</script>

<style lang="scss" scoped>
  .toolbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;

    .title {
      margin: 0px 20px;
      font-size: large;
      font-weight: 500;
    }

    .button {
      margin-right: auto;
    }

    .search {
      display: flex;

      .el-input {
        margin-right: 20px;
      }

      .el-button-group {
        display: flex;
      }
    }
  }
</style>
