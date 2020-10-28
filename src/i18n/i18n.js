import { I18nManager } from 'react-native';
import i18n from 'i18n-js';
import { memoize } from 'lodash';
import * as RNLocalize from 'react-native-localize';

const translationGetters = {
  en: () => require('~/resources/locale/en.json'),
};

export const translate = memoize(
  (key, config) => `${i18n.t(key, config)}`,
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

export const getLanguage = () => {
  const fallback = { languageTag: 'en', isRTL: false };
  return RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) || fallback;
};

export const setI18nConfig = () => {
  const { languageTag, isRTL } = getLanguage();
  translate.cache.clear();
  I18nManager.forceRTL(isRTL);
  i18n.translations = { [languageTag]: translationGetters[languageTag]() };
  i18n.locale = languageTag;
};
