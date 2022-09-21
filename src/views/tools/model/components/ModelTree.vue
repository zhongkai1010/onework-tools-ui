<!--
 * @Author: zhongkai1010 zhongkai1010@163.com
 * @Date: 2022-09-13 17:43:27
 * @LastEditors: zhongkai1010 zhongkai1010@163.com
 * @LastEditTime: 2022-09-21 11:09:32
 * @FilePath: \onework-tools-ui\src\views\tools\model\components\ModelTree.vue
 * @Description:
-->
<template>
  <el-tree
    :data="models"
    highlight-current
    @node-click="onSelect"
    :default-expanded-keys="expandedKeys"
    node-key="id"
    :props="{ label: 'displayName' }"
    v-loading="deleteModelFetch.isFetching.value"
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
</template>

<script setup lang="ts">
  import _ from 'lodash';
  import { useMessage } from '/@/hooks/web/useMessage';
  import modelApi, { Model } from '/@/api/tools/model';
  import { useHttpFetch } from '/@/hooks/fetch';
  import { ModelTreeInstance, ModelTreeNode } from '../types';
  import { getModelTreeData, ROOT_NODE_KEY } from '../helps';

  interface Props {
    data: Model[];
  }

  const { confirm } = useMessage();
  const deleteModelFetch = useHttpFetch(modelApi.deleteModel);

  const props = defineProps<Props>();
  const emit = defineEmits<{
    (e: 'select', value: Model): void;
    (e: 'edit', value: Model): void;
    (e: 'remove', value: Model): void;
  }>();

  const models = computed<ModelTreeNode[]>(() => [getModelTreeData(props.data)]);
  const expandedKeys = ref<string[]>([ROOT_NODE_KEY]);
  const selectId = ref<string>(ROOT_NODE_KEY);

  const onSelect = (model: ModelTreeNode) => {
    emit('select', model);
    selectId.value = model.id;
    setExpandedKeys(model);
  };

  const onClickRemove = (model: Model) => {
    confirm(`确认是否删除,"${model.displayName}"!`).then(async () => {
      await deleteModelFetch.execute(model.id);
      emit('remove', model);
      setExpandedKeys(model);
    });
  };

  const setExpandedKeys = (model: Model) => {
    if (model.group) {
      expandedKeys.value = [`${ROOT_NODE_KEY}_${model.group}`];
    } else {
      expandedKeys.value = [ROOT_NODE_KEY];
    }
  };

  defineExpose<ModelTreeInstance>({ selectNode: onSelect });
</script>

<style lang="scss" scoped>
  .tree-node {
    display: flex;
    font-size: 14px;
    width: 100%;
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
</style>
