<!--
 * @Author: zhongkai1010 zhongkai1010@163.com
 * @Date: 2022-09-13 17:43:27
 * @LastEditors: zhongkai1010 zhongkai1010@163.com
 * @LastEditTime: 2022-09-19 18:03:34
 * @FilePath: \onework-tools-ui\src\views\tools\model\components\ModelTree.vue
 * @Description:
-->
<template>
  <el-tree
    v-loading="modelFetch.isFetching.value"
    :data="models"
    highlight-current
    @node-click="onSelect"
    :default-expanded-keys="expandedKeys"
    node-key="id"
    :props="{ label: 'displayName' }"
  >
    <template #default="{ node }">
      <div class="tree-node" :class="{ 'is-select': node.data.id == selectNodeKey }">
        <span :title="`${node.data.label}(${node.data.name})`">{{ node.label }}</span>
        <div class="button" v-if="node.isLeaf">
          <iconify-icon
            icon="ant-design:edit-outlined"
            class="edit"
            @click.stop="onClickEdit(node.data)"
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
  import modelApi, { Model } from '/@/api/tools/model';
  import { useHttpFetch } from '/@/hooks/fetch';

  import { useMessage } from '/@/hooks/web/useMessage';

  interface TreeNode extends Model {
    isLeaf?: boolean;
    children?: TreeNode[];
  }

  const modelFetch = useHttpFetch<any, Model[]>(modelApi.getAllModels, null, { immediate: true });
  const models = computed<TreeNode[]>({
    get: () => {
      const root: TreeNode = {
        id: 'root',
        name: 'root',
        displayName: '所有模型',
        isLeaf: false,
        children: []
      };
      if (modelFetch.data.value) {
        const data = _.groupBy(modelFetch.data.value, (t) => t.group ?? '其它');
        Object.keys(data).forEach((t) => {
          const group: TreeNode = {
            id: `root_${t}`,
            name: `root_${t}`,
            isLeaf: false,
            displayName: t,
            children: data[t].map((t) => {
              return { ...t, isLeaf: true };
            }) as TreeNode[]
          };
          root.children.push(group);
        });
      }
      return [root];
    },
    set: (value) => {
      modelFetch.data.value = value as Model[];
    }
  });
  const expandedKeys = ref<string[]>(['root']);
  const selectId = ref<string>('root');

  const emit = defineEmits<{
    (e: 'select', value: Model): void;
    (e: 'edit', value: Model): void;
    (e: 'remove', value: Model): string;
  }>();

  const selectNodeKey = ref('');

  const { confirm } = useMessage();

  const onSelect = (model: TreeNode) => {
    console.log('onSelect');
    if (model.isLeaf && model.id !== selectId.value) {
      selectNodeKey.value = model.id;
      emit('select', model);
    }
    selectId.value = model.id;
    expandedKeys.value = [model.id];
  };
  const onClickEdit = (value) => {
    console.log('onClickEdit', event);
    emit('edit', value);
  };
  const onClickRemove = (value: Model) => {
    console.log(value);
    confirm(`确认是否删除,"${value.displayName}"！`).then(() => {
      const index = modelFetch.data.value.findIndex((t) => t.id == value.id);
      modelFetch.data.value.splice(index, 1);
      emit('remove', value);
      expandedKeys.value = [`root_${value.group}`];
    });
  };
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
