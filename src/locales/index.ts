import type { App } from 'vue';
import { createI18n, I18n, I18nOptions } from 'vue-i18n';
import { AVAILABLE_LOCALES, Locale } from '/@/settings/locale';
import { setHtmlPageLang, setLoadLocalePool } from './helper';
import { localeStateStoreHook } from '../store/modules/localeState';

export let i18n: ReturnType<typeof createI18n>;

async function createI18nOptions(): Promise<I18nOptions> {
  const { locale } = localeStateStoreHook();
  const defaultLocal = await import(`./lang/${locale}.ts`);
  const message = defaultLocal.default?.message ?? {};

  setHtmlPageLang(locale);
  setLoadLocalePool((loadLocalePool) => {
    loadLocalePool.push(locale);
  });

  return {
    legacy: false,
    locale,
    fallbackLocale: Locale.EN_US,
    globalInjection: true,
    messages: {
      [locale]: message
    },
    availableLocales: AVAILABLE_LOCALES,
    sync: true, //If you don’t want to inherit locale from global scope, you need to set sync of i18n component option to false.
    silentTranslationWarn: true, // true - warning off
    missingWarn: false,
    silentFallbackWarn: true
  };
}

// setup i18n instance with glob
export async function setupI18n(app: App) {
  const options = await createI18nOptions();
  i18n = createI18n(options) as I18n;
  app.use(i18n);
}
