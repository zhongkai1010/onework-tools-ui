export enum Locale {
  ZH_CN = 'zh-CN',
  EN_US = 'en'
}

export const AVAILABLE_LOCALES = [Locale.ZH_CN, Locale.EN_US];

export const LOCALE_OPERATE = [
  {
    text: '简体中文',
    event: Locale.ZH_CN
  },
  {
    text: 'English',
    event: Locale.EN_US
  }
];
