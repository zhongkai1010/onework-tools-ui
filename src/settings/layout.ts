import { TabOperateItem } from '/@/layouts/types';
import { t } from '/@/hooks/web/useI18n';

export const TAB_OPERATE_ITEM: TabOperateItem[] = [
  {
    text: t('comp.layout.menu.refresh'),
    icon: 'ant-design:sync-outlined',
    command: 'refresh'
  },
  {
    text: t('comp.layout.menu.other'),
    icon: 'ant-design:close-outlined',
    command: 'other'
  },
  {
    text: t('comp.layout.menu.right'),
    icon: 'ant-design:arrow-right-outlined',
    command: 'right'
  },
  {
    text: t('comp.layout.menu.left'),
    icon: 'ant-design:arrow-left-outlined',
    command: 'left'
  },
  {
    text: t('comp.layout.menu.all'),
    icon: 'ant-design:close-outlined',
    command: 'all'
  }
];
export const LAYOUT_TYPE = [
  {
    value: 'column',
    label: t('comp.layout.type.column')
  },
  {
    value: 'complex',
    label: t('comp.layout.type.complex')
  },
  {
    value: 'portrait',
    label: t('comp.layout.type.portrait')
  },
  {
    value: 'horizontal',
    label: t('comp.layout.type.horizontal')
  },
  {
    value: 'standard',
    label: t('comp.layout.type.standard')
  },
  {
    value: 'float',
    label: t('comp.layout.type.float')
  }
];
export const MENU_WIDTH_TYPE = [
  {
    value: '200px',
    label: '200px'
  },
  {
    value: '266px',
    label: '266px'
  },
  {
    value: '277px',
    label: '277px'
  },
  {
    value: '288px',
    label: '288px'
  }
];
export const AVATAR_OPERATE = [
  { text: t('comp.layout.header.info'), command: 'info' },
  { text: t('comp.layout.header.quit'), command: 'quit' }
];
