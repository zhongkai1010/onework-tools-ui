<template>
  <el-card class="component-container">
    <template #header>
      <div class="header">
        <iconify-icon icon="gg:components" :size="25" />
        <span>组件库</span>
      </div>
    </template>
    <el-collapse v-model="active" accordion>
      <el-collapse-item
        :title="group.title"
        :name="group.name"
        :key="group.name"
        v-for="group in list"
      >
        <ul class="form-list">
          <draggable
            v-model="group.components"
            item-key="name"
            :clone="cloneDog"
            @change="log"
            :group="{ name: 'component', pull: 'clone', put: false }"
          >
            <template #item="{ element }">
              <li>
                <iconify-icon icon="ant-design:form-outlined" :size="16" />
                <span>{{ element.displayName }}</span>
              </li>
            </template>
          </draggable>
        </ul>
      </el-collapse-item>
    </el-collapse>
  </el-card>
</template>

<script setup lang="ts">
  import draggable from 'vuedraggable';
  import { ComponentListType, DEFAULT_DRAGGABLE_ITEM_CONFIG, DraggableItemConfig } from '../types';
  import { buildUUID } from '/@/utils/uuid';
  import { log } from '/@/utils/log';
  import IconifyIcon from '/@/components/IconifyIcon/src/iconifyIcon.vue';
  import { getGroupComponent } from '../helps';
  import { FormComponentConfig } from '/@/components/DynamicForm';
  import _ from 'lodash';

  const list: ComponentListType[] = [
    {
      name: 'base',
      title: '基础组件',
      components: getGroupComponent('el-'),
    },
    {
      name: 'business',
      title: '业务组件',
      components: getGroupComponent('bl-'),
    },
  ];

  const active = ref(list[0].name);

  const cloneDog = (item: FormComponentConfig) => {
    const newItem: DraggableItemConfig = _.cloneDeep(DEFAULT_DRAGGABLE_ITEM_CONFIG);
    newItem.id = buildUUID();
    newItem.name = buildUUID();
    newItem.props.label = item.displayName;
    newItem.component.component = item.name;
    log('draggable', newItem);
    return newItem;
  };
</script>

<style lang="scss" scoped>
  .component-container {
    width: 280px;
    height: $main-no-margin-height;
    position: fixed;

    .header {
      font-size: 16px;
      vertical-align: middle;
      i {
        margin-right: 5px;
        vertical-align: bottom;
      }
    }

    :deep(.el-collapse-item__header:last-of-type) {
      border-bottom: 0px;
      font-size: 16px;
      margin-left: 10px;
    }

    &:deep(.el-card__body) {
      padding: 10px;
      height: calc($main-no-margin-height - 65px);
      overflow: auto;
      @include scrollBar;
    }

    .form-list {
      li {
        display: flex;
        justify-content: left;
        align-items: center;
        i {
          margin-right: 5px;
        }
      }
    }

    .el-collapse {
      border-top: 0px;
    }

    .el-collapse-item__content {
      li {
        padding: 10px;
        border: 1px dashed var(--header-font-color);
        margin-bottom: 10px;
        cursor: pointer;
        user-select: none;
      }
    }
  }
</style>
