<!--
 * @Author: zhongkai1010 zhongkai1010@163.com
 * @Date: 2022-09-13 17:43:27
 * @LastEditors: zhongkai1010 zhongkai1010@163.com
 * @LastEditTime: 2022-09-21 17:12:30
 * @FilePath: \onework-tools-ui\src\views\tools\form\component\FormTree.vue
 * @Description:
-->
<template>
  <div class="container">
    <el-tree
      :data="models"
      highlight-current
      @node-click="onSelect"
      :default-expanded-keys="expandedKeys"
      node-key="id"
      :props="{ label: 'displayName' }"
      v-loading="deleteFormFetch.isFetching.value"
    >
      <template #default="{ node }">
        <div class="tree-node" :class="{ 'is-select': node.data.id == selectId }">
          <span :title="`${node.data.label}(${node.data.name})`">{{ node.label }}</span>
          <div class="button" v-if="node.isLeaf">
            <iconify-icon
              icon="ant-design:edit-outlined"
              class="edit"
              @click.stop="emit('edit', node.data)"
            />
            <iconify-icon
              icon="ant-design:delete-outlined"
              class="del"
              @click.stop="onClickRemove(node.data)"
            />
          </div>
        </div>
      </template>
    </el-tree>
  </div>
</template>

<script setup lang="ts">
  import _ from 'lodash';
  import { useMessage } from '/@/hooks/web/useMessage';
  import formApi, { Form } from '/@/api/tools/form';
  import { useHttpFetch } from '/@/hooks/fetch';
  import { FormTreeInstance, FormTreeNode } from '../types';
  import { getFormTreeData, ROOT_NODE_KEY } from '../../helps';

  interface Props {
    data: Form[];
  }

  const { confirm } = useMessage();
  const deleteFormFetch = useHttpFetch(formApi.deleteForm);

  const props = defineProps<Props>();
  const emit = defineEmits<{
    (e: 'select', value: Form): void;
    (e: 'edit', value: Form): void;
    (e: 'remove', value: Form): void;
  }>();

  const models = computed<FormTreeNode[]>(() => [getFormTreeData(props.data)]);
  const expandedKeys = ref<string[]>([ROOT_NODE_KEY]);
  const selectId = ref<string>(ROOT_NODE_KEY);

  const onSelect = (form: FormTreeNode) => {
    if (!form.isLeaf) return;
    emit('select', form);
    selectId.value = form.id;
    setExpandedKeys(form);
  };

  const onClickRemove = (form: Form) => {
    confirm(`确认是否删除,"${form.displayName}"!`).then(async () => {
      await deleteFormFetch.execute(form.id);
      emit('remove', form);
      setExpandedKeys(form);
    });
  };

  const setExpandedKeys = (form: Form) => {
    if (form.group) {
      expandedKeys.value = [`${ROOT_NODE_KEY}_${form.group}`];
    } else {
      expandedKeys.value = [ROOT_NODE_KEY];
    }
  };

  defineExpose<FormTreeInstance>({ selectNode: onSelect });
</script>

<style lang="scss" scoped>
  .container {
    .tree-node {
      display: flex;
      font-size: 14px;
      width: 100%;
      height: 30px;
      align-items: center;
      .button {
        margin-left: auto;
        margin-right: 10px;
        .edit {
          color: var(--el-color-primary);
        }
        .del {
          color: var(--el-color-danger);
        }
        .el-icon {
          cursor: pointer;
          margin-right: 5px;
        }
      }
    }
    .is-select {
      color: var(--el-color-primary);
    }
    :deep(.el-tree-node__label) {
      width: 100%;
    }
    :deep(.el-tree-node__content) {
      height: 30px;
    }
  }
</style>
