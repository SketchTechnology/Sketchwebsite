import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from './en/en.json'
import translationAr from './ar/ar.json'
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

// the translations
const resources = {
  en: {
    translation: translationEn
  },
  ar: {
    translation: translationAr
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(I18nextBrowserLanguageDetector)
  .init({
    resources,
    fallbackLng: 'en', // default language
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;