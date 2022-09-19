import { colorGradient } from '/@/utils';

import { t } from '/@/hooks/web/useI18n';

export enum ColorThemeEnum {
  BLUE_BLACK = 'blueBlack', // 蓝黑
  BLUE_WHITE = 'blueWhite', // 蓝白
  GREEN_BLACK = 'greenBlack', // 绿黑
  GREEN_WHITE = 'greenWhite', // 绿白
  PURPLE_BLACK = 'purpleBlack', // 紫黑
  PURPLE_WHITE = 'purpleWhite', //紫白
  RED_BLACK = 'redBlack', // 红黑
  RED_WHITE = 'redWhite' //红白
}

export const THEME_OPERATE = [
  {
    value: 'blueBlack',
    label: t('comp.layout.theme.blueBlack')
  },
  {
    value: 'blueWhite',
    label: t('comp.layout.theme.blueWhite')
  },
  {
    value: 'greenBlack',
    label: t('comp.layout.theme.greenBlack')
  },
  {
    value: 'greenWhite',
    label: t('comp.layout.theme.greenWhite')
  },
  {
    value: 'purpleBlack',
    label: t('comp.layout.theme.purpleBlack')
  },
  {
    value: 'purpleWhite',
    label: t('comp.layout.theme.purpleWhite')
  },
  {
    value: 'redBlack',
    label: t('comp.layout.theme.redBlack')
  },
  {
    value: 'redWhite',
    label: t('comp.layout.theme.redWhite')
  }
];

export const THEME_COLOR = {
  blueBlack: {
    // 蓝黑
    '--el-color-primary': '#1890ff',
    '--sidebar-bg-color': '#282c34',
    '--sidebar-font-color': '#fff',
    '--header-bg-color': '#fff',
    '--header-font-color': '#515a6e',
    ...colorGradient('#1890ff', '--el-color-primary')
  },
  blueWhite: {
    // 蓝白
    '--el-color-primary': '#1890ff',
    '--sidebar-bg-color': '#fff',
    '--sidebar-font-color': '#515a6e',
    '--header-bg-color': '#fff',
    '--header-font-color': '#515a6e',
    ...colorGradient('#1890ff', '--el-color-primary')
  },
  greenBlack: {
    // 绿黑
    '--el-color-primary': '#41b584',
    '--sidebar-bg-color': '#282c34',
    '--sidebar-font-color': '#fff',
    '--header-bg-color': '#fff',
    '--header-font-color': '#515a6e',
    ...colorGradient('#41b584', '--el-color-primary')
  },
  greenWhite: {
    // 绿白
    '--el-color-primary': '#41b584',
    '--sidebar-bg-color': '#fff',
    '--sidebar-font-color': '#515a6e',
    '--header-bg-color': '#fff',
    '--header-font-color': '#515a6e',
    ...colorGradient('#41b584', '--el-color-primary')
  },
  purpleBlack: {
    // 紫黑
    '--el-color-primary': '#6954f0',
    '--sidebar-bg-color': '#282c34',
    '--sidebar-font-color': '#fff',
    '--header-bg-color': '#fff',
    '--header-font-color': '#515a6e',
    ...colorGradient('#6954f0', '--el-color-primary')
  },
  purpleWhite: {
    //紫白
    '--el-color-primary': '#6954f0',
    '--sidebar-bg-color': '#fff',
    '--sidebar-font-color': '#515a6e',
    '--header-bg-color': '#fff',
    '--header-font-color': '#515a6e',
    ...colorGradient('#6954f0', '--el-color-primary')
  },
  redBlack: {
    // 红黑
    '--el-color-primary': '#f34d37',
    '--sidebar-bg-color': '#282c34',
    '--sidebar-font-color': '#fff',
    '--header-bg-color': '#fff',
    '--header-font-color': '#515a6e',
    ...colorGradient('#f34d37', '--el-color-primary')
  },
  redWhite: {
    //红白
    '--el-color-primary': '#f34d37',
    '--sidebar-bg-color': '#fff',
    '--sidebar-font-color': '#515a6e',
    '--header-bg-color': '#fff',
    '--header-font-color': '#515a6e',
    ...colorGradient('#f34d37', '--el-color-primary')
  }
} as Record<ColorThemeEnum, Recordable<string>>;
