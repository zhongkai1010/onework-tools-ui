<template>
  <div class="toolbar-container">
    <div class="title" v-if="props.title">{{ props.title }}</div>
    <div class="button">
      <el-space wrap>
        <el-button type="primary" @click="emit('refresh')" v-if="show.isRefresh">
          <iconify-icon icon="ci:refresh" />
        </el-button>
        <el-button type="primary" v-if="show.isAdd" @click="emit('add')">新增</el-button>
        <el-button v-if="show.isEdit" :disabled="!props.selectedState" @click="emit('edit')"
          >编辑</el-button
        >
        <el-button
          type="danger"
          v-if="show.isDelete"
          :disabled="!props.selectedState"
          @click="emit('delete')"
          >删除</el-button
        >
      </el-space>
    </div>
    <div class="search">
      <el-input
        placeholder="请输入搜索关键字"
        v-if="show.iskeywords"
        @input="onSearchInput"
        :model-value="keywords"
        clearable
        @clear="onClearSearchInput"
        @keyup.enter="emit('search', keywords.value)"
      />
      <el-button-group>
        <el-button @click="emit('show')">
          <iconify-icon icon="ant-design:search-outlined" />
        </el-button>
        <el-popover placement="bottom" trigger="click" popper-class="field_panel">
          <template #reference>
            <el-button>
              <iconify-icon icon="ci:table" />
            </el-button>
          </template>
          <el-checkbox-group @change="onFieldCheck" :model-value="selectFields">
            <el-checkbox v-for="(field, index) in props.fields" :key="index" :label="field.label" />
          </el-checkbox-group>
        </el-popover>
      </el-button-group>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { TablePageField } from '/@/api/model/page';
  import { Toolbar } from '../../../enums/toolbarEenum';

  const keywords = ref(null);

  const props = defineProps<{
    title: string;
    fields: TablePageField[];
    toolbar: Toolbar[];
    selectedState?: boolean;
  }>();
  const showLabels = props.fields.filter((t) => !(t.hide ?? false)).map((t) => t.label);
  const selectFields = ref(showLabels);

  const show = computed(() => {
    if (props.toolbar.includes(Toolbar.All)) {
      return {
        isRefresh: true,
        isAdd: true,
        isEdit: true,
        iskeywords: true,
        isDelete: true,
      };
    } else {
      const toolbar = (props.toolbar || []) as Toolbar[];
      return {
        isRefresh: toolbar.includes(Toolbar.Refresh),
        isAdd: toolbar.includes(Toolbar.Add),
        isEdit: toolbar.includes(Toolbar.Edit),
        iskeywords: toolbar.includes(Toolbar.keywords),
        isDelete: toolbar.includes(Toolbar.Delete),
      };
    }
  });

  const onSearchInput = (value) => {
    keywords.value = value;
    emit('search', value);
  };
  const onFieldCheck = (val) => {
    selectFields.value = val;
    emit('changeField', val as string[]);
  };
  const onClearSearchInput = () => {
    keywords.value = '';
    emit('search', '');
  };

  const emit = defineEmits<{
    (e: 'show'): void;
    (e: 'refresh'): void;
    (e: 'add'): void;
    (e: 'edit'): void;
    (e: 'delete'): void;
    (e: 'search', value: string): void;
    (e: 'changeField', value: string[]): void;
  }>();
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

  .field_panel {
    .el-checkbox-group {
      display: flex;
      flex-direction: column;
    }
  }
</style>
