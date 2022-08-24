<template>
  <div class="drawer-wrapper">
    <el-drawer
      :model-value="show"
      @closed="onClosed"
      :title="$t('comp.layout.drawer.title')"
      :size="285"
    >
      <el-form :label-width="`90px`" :label-position="`left`" :model="fromValue">
        <el-form-item :label="$t('comp.layout.drawer.layout')">
          <el-select v-model="fromValue.layout" @change="(value) => onChange('layout', value)">
            <el-option
              v-for="item in LAYOUT_TYPE"
              :key="item.value"
              :label="$t(item.label)"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('comp.layout.drawer.width')">
          <el-select
            v-model="fromValue.menuWidth"
            @change="(value) => onChange('menuWidth', value)"
          >
            <el-option
              v-for="item in MENU_WIDTH_TYPE"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('comp.layout.drawer.lable')">
          <el-switch
            v-model="fromValue.showTabs"
            @change="(value) => onChange('showTabs', value)"
          />
        </el-form-item>
        <el-form-item :label="$t('comp.layout.drawer.theme')">
          <el-select v-model="fromValue.theme" @change="(value) => onChange('theme', value)">
            <el-option
              v-for="item in THEME_OPERATE"
              :key="item.value"
              :label="$t(item.label)"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('comp.layout.drawer.lock')">
          <el-switch
            v-model="fromValue.showLock"
            @change="(value) => onChange('showLock', value)"
          />
        </el-form-item>
        <el-form-item :label="$t('comp.layout.drawer.search')">
          <el-switch
            v-model="fromValue.showSearch"
            @change="(value) => onChange('showSearch', value)"
          />
        </el-form-item>
        <el-form-item :label="$t('comp.layout.drawer.notice')">
          <el-switch
            v-model="fromValue.showNotice"
            @change="(value) => onChange('showNotice', value)"
          />
        </el-form-item>
        <el-form-item :label="$t('comp.layout.drawer.full')">
          <el-switch
            v-model="fromValue.showFull"
            @change="(value) => onChange('showFull', value)"
          />
        </el-form-item>
        <el-form-item :label="$t('comp.layout.drawer.lang')">
          <el-switch
            v-model="fromValue.showLang"
            @change="(value) => onChange('showLang', value)"
          />
        </el-form-item>
        <el-form-item :label="$t('comp.layout.drawer.progress')">
          <el-switch
            v-model="fromValue.showProgress"
            @change="(value) => onChange('showProgress', value)"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="siteConfigStoreHook().$reset()">{{
          $t('comp.layout.drawer.reset')
        }}</el-button>
      </template>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { siteConfigStoreHook } from '/@/store/modules/globalConfig';
  import { pageStateStoreHook } from '/@/store/modules/pageState';
  import { themeStateStoreHook } from '/@/store/modules/themeState';
  import { LAYOUT_TYPE, MENU_WIDTH_TYPE } from '/@/settings/layout';
  import { THEME_OPERATE } from '/@/settings/theme';

  const pageState = pageStateStoreHook();
  const siteConfig = siteConfigStoreHook();
  const themeState = themeStateStoreHook();

  const show = computed(() => {
    return pageState.showDrawer;
  });

  const onClosed = () => {
    pageState.$patch({ showDrawer: false });
  };

  const fromValue = computed(() => {
    return {
      layout: siteConfig.layout,
      showTabs: siteConfig.showTabs,
      menuWidth: `${siteConfig.menuWidth}px`,
      theme: themeState.theme,
      showLock: siteConfig.showLock,
      showSearch: siteConfig.showSearch,
      showNotice: siteConfig.showNotice,
      showFull: siteConfig.showFull,
      showLang: siteConfig.showLang,
      showProgress: siteConfig.showProgress,
    };
  });

  const onChange = (type: string, value: any) => {
    let val: any;
    if (type === 'menuWidth') {
      val = parseInt((value as string).replace('px', ''));
    } else if (type === 'theme') {
      const elems = window.document.documentElement.getElementsByClassName('wrapper');
      elems[0].setAttribute('data-theme', value);
      themeState.$patch({ theme: value });
      // 设置html :root css3 变量
      const style = window.document.documentElement.style;
      const values = themeState.themeVariables;
      Object.keys(values).forEach((t) => {
        style.setProperty(t, values[t]);
      });

      return;
    } else {
      val = value;
    }
    const object = {};
    object[type] = val;
    siteConfig.$patch(object);
  };
</script>

<style lang="scss" scoped>
  .drawer-wrapper {
    &:deep(.el-drawer__header) {
      padding: 20px 20px 0 20px;
      margin-bottom: 0;
    }

    &:deep(.el-drawer__title) {
      font-size: 18px;
    }

    &:deep(.el-form-item__label) {
      display: inline-flex;
      align-items: flex-start;
      font-size: 14px;
      color: #606266;
      height: 32px;
      line-height: 32px;
      font-weight: 100;
    }
  }
</style>
