import { i18n } from '/@/locales';
import { localeStateStoreHook } from '../store/modules/localeState';
import { unref, computed } from 'vue';
import { loadLocalePool, setHtmlPageLang } from './helper';
import { Locale } from '/@/settings/locale';

interface LangModule {
  message: Recordable;
  dateLocale: Recordable;
  dateLocaleName: string;
}

function setI18nLanguage(locale: Locale) {
  const localeStore = localeStateStoreHook();

  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale;
  } else {
    (i18n.global.locale as any).value = locale;
  }
  localeStore.setLocaleInfo(locale);
  setHtmlPageLang(locale);
}

export function useLocale() {
  const localeStore = localeStateStoreHook();
  const getLocale = computed(() => localeStore.locale);

  const elementPlusLocale = computed((): any => {
    return i18n.global.getLocaleMessage(unref(getLocale))?.elementPlusLocale ?? {};
  });

  async function changeLocale(locale: Locale) {
    const globalI18n = i18n.global;
    const currentLocale = unref(globalI18n.locale);
    if (currentLocale === locale) {
      return locale;
    }

    if (loadLocalePool.includes(locale)) {
      setI18nLanguage(locale);
      return locale;
    }
    const langModule = ((await import(`./lang/${locale}.ts`)) as any).default as LangModule;
    if (!langModule) return;

    const { message } = langModule;

    globalI18n.setLocaleMessage(locale, message);
    loadLocalePool.push(locale);

    setI18nLanguage(locale);
    return locale;
  }

  return {
    getLocale,
    changeLocale,
    elementPlusLocale,
  };
}
