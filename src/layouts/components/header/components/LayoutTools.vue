<template>
  <div class="container">
    <i
      class="ri-lock-line button"
      :title="$t('comp.layout.toolbar.lock')"
      v-if="show.showLock"
      @click="onClickLock"
    ></i>
    <i
      class="ri-search-line button"
      :title="$t('comp.layout.toolbar.search')"
      v-if="show.showSearch"
    ></i>
    <el-popover v-if="show.showNotice">
      <template #reference>
        <ElBadge :value="12" class="button">
          <i class="ri-notification-line" :title="$t('comp.layout.toolbar.notice')"></i>
        </ElBadge>
      </template>
      <template #default>
        <div class="demo-rich-conent" style="display: flex; gap: 16px; flex-direction: column">
          <el-avatar
            :size="60"
            src="https://avatars.githubusercontent.com/u/72015883?v=4"
            style="margin-bottom: 8px"
          />
          <div>
            <p class="demo-rich-content__name" style="margin: 0; font-weight: 500">Element Plus</p>
            <p
              class="demo-rich-content__mention"
              style="margin: 0; font-size: 14px; color: var(--el-color-info)"
            >
              @element-plus
            </p>
          </div>

          <p class="demo-rich-content__desc" style="margin: 0">
            Element Plus, a Vue 3 based component library for developers, designers and product
            managers
          </p>
        </div>
      </template>
    </el-popover>
    <i
      class="ri-fullscreen-line button"
      :title="$t('comp.layout.toolbar.full')"
      v-if="show.showFull"
      @click="screenfull.toggle()"
    ></i>
    <el-dropdown class="button" v-if="show.showLang" @command="onSelectLocale">
      <i class="ri-translate" :title="$t('comp.layout.toolbar.lang')"></i>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="operate in LOCALE_OPERATE"
            :key="operate.event"
            :command="operate.event"
          >
            {{ operate.text }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <i
      class="ri-settings-line button"
      :title="$t('comp.layout.toolbar.setting')"
      @click="onClickSetting"
    ></i>
  </div>
</template>

<script lang="ts" setup>
  import { siteConfigStoreHook } from '/@/store/modules/globalConfig';
  import { pageStateStoreHook } from '/@/store/modules/pageState';
  import { LOCALE_OPERATE } from '/@/settings/locale';
  import { useLocale } from '/@/locales/useLocale';
  import screenfull from 'screenfull';
  import { permissionStateStoreHook } from '/@/store/modules/permissionState';
  import { tabStateStoreHook } from '/@/store/modules/tabState';
  import { getNavRecordRaw, getNavRecordRawMap } from '/@/layouts/utils';

  const siteConfig = siteConfigStoreHook();
  const pageState = pageStateStoreHook();

  const tabState = tabStateStoreHook();
  const show = computed(() => {
    return {
      showLock: siteConfig.showLock,
      showSearch: siteConfig.showSearch,
      showNotice: siteConfig.showNotice,
      showFull: siteConfig.showFull,
      showLang: siteConfig.showLang,
    };
  });
  const onClickSetting = () => {
    pageState.$patch({ showDrawer: !pageState.showDrawer });
  };
  const onClickLock = () => {
    siteConfig.$patch({ lock: true });
  };
  const onSelectLocale = async (command) => {
    const { changeLocale } = useLocale();
    await changeLocale(command);
    const data = getNavRecordRaw();
    const map = getNavRecordRawMap(data);
    const permissionState = permissionStateStoreHook();
    permissionState.$patch({ menus: data, menuMap: map });
    tabState.reloadAll();
  };
</script>

<style lang="scss" scoped>
  @mixin text-center {
    text-align: center;
    cursor: pointer;
    width: 40px;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;

    .button {
      @include text-center();
    }

    .el-dropdown {
      padding-left: 14px;
    }

    &:deep(.el-badge__content) {
      right: 20px;
    }
  }
</style>
