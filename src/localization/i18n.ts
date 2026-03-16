import i18n, { init } from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./en.json";
import arTranslation from "./ar.json";
import AsyncStorage from "@react-native-async-storage/async-storage";

const resources = {
  en: {
    translation: enTranslation,
  },
  ar: {
    translation: arTranslation,
  },
};

const LANGUAGE_DETECTOR = {
  type: "languageDetector" as const,
  async: true,

  init: () => {},
  detect: async (callback: (lang: string) => void) => {
    try {
      const savedLanguage = await AsyncStorage.getItem("LANGUAGE");
      if (savedLanguage) {
        callback(savedLanguage);
        return;
      }
    } catch (error) {
      console.log("Can't read the language");
    }
    callback("en");
  },

  cacheUserLanguage: async (lang: string) => {
    try {
      await AsyncStorage.setItem("LANGUAGE", lang);
    } catch (error) {
      console.log("Can;t add the language");
    }
  },
};

i18n
  .use(LANGUAGE_DETECTOR)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "ar"],
    defaultNS: "translation",
    ns: ["translation"],
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
