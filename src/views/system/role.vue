<template>
  <PageView>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>Card name</span>
              <el-button class="button" text>Operation button</el-button>
            </div>
          </template>
          <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card class="box-card">
          <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="菜单" name="first">User</el-tab-pane>
            <el-tab-pane label="数据" name="second">Config</el-tab-pane>
            <el-tab-pane label="按钮" name="third">Role</el-tab-pane>
            <el-tab-pane label="其他" name="fourth">Task</el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </PageView>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import type { TabsPaneContext } from 'element-plus';

  interface Tree {
    label: string;
    children?: Tree[];
  }

  const activeName = ref('first');

  const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event);
  };
  const handleNodeClick = (data: Tree) => {
    console.log(data);
  };

  const data: Tree[] = [
    {
      label: 'Level one 1',
      children: [
        {
          label: 'Level two 1-1',
          children: [
            {
              label: 'Level three 1-1-1'
            }
          ]
        }
      ]
    },
    {
      label: 'Level one 2',
      children: [
        {
          label: 'Level two 2-1',
          children: [
            {
              label: 'Level three 2-1-1'
            }
          ]
        },
        {
          label: 'Level two 2-2',
          children: [
            {
              label: 'Level three 2-2-1'
            }
          ]
        }
      ]
    },
    {
      label: 'Level one 3',
      children: [
        {
          label: 'Level two 3-1',
          children: [
            {
              label: 'Level three 3-1-1'
            }
          ]
        },
        {
          label: 'Level two 3-2',
          children: [
            {
              label: 'Level three 3-2-1'
            }
          ]
        }
      ]
    }
  ];

  const defaultProps = {
    children: 'children',
    label: 'label'
  };
</script>
<style>
  .demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }
</style>
