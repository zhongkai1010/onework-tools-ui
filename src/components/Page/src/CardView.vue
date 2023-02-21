<template>
  <page-view
    class="container"
    :class="{
      'is-fixed': props.fixed,
      'is-card': !props.left && !props.top,
      'is-left': props.left,
      'is-top': props.top
    }"
  >
    <el-card class="top" v-if="props.top" v-bind="props.topProps">
      <slot name="top"></slot>
    </el-card>
    <el-card class="left" v-if="props.left" v-bind="props.leftProps">
      <slot name="left"></slot>
    </el-card>
    <el-card class="main" :body-style="props.bodyStyle" v-bind="props.mainProps">
      <slot></slot>
    </el-card>
  </page-view>
</template>

<script setup lang="ts">
  import { computed } from 'vue';

  const props = defineProps<{
    left?: boolean;
    top?: boolean;
    leftWidth?: number | string;
    fixed?: boolean;
    bodyStyle?: Recordable<any>;
    mainProps?: Recordable<any>;
    topProps?: Recordable<any>;
    leftProps?: Recordable<any>;
  }>();
  const width = computed(() => {
    if (typeof props.leftWidth === 'string') {
      return props.leftWidth;
    } else if (typeof props.leftWidth === 'number') {
      return `${props.leftWidth}px`;
    } else {
      return '250px';
    }
  });
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    background-color: transparent;

    &.is-card {
      .main {
        min-height: $main-no-margin-height;
        min-width: 100%;
      }
    }

    &.is-left {
      .left {
        min-height: $main-no-margin-height;
        width: v-bind(width);
      }

      .main {
        min-width: calc(100% - v-bind(width));
        margin-left: 20px;
        min-height: $main-no-margin-height;
      }
    }

    &.is-top {
      flex-direction: column;

      .top {
        margin-bottom: 20px;
      }
    }

    &.is-fixed {
      .left {
        min-height: $main-no-margin-height;
        position: fixed;
      }

      .main {
        margin-left: calc(v-bind(width) + $layout-body-margin);
      }
    }
  }
</style>
