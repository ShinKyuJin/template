// i18n.ts 파일

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en.json";
import translationKO from "./locales/ko.json";

// i18n 초기화
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    ko: {
      translation: translationKO,
    },
    // 추가적인 언어 설정...
  },
  lng: "ko",
  fallbackLng: "ko",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
