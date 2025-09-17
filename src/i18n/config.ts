import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import JSON translation files
import fr from './locales/fr.json';
import en from './locales/en.json';

// Resources object using imported JSON files
const resources = {
  fr: {
    translation: fr
  },
  en: {
    translation: en
  }
};

// Initialize i18n
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr', // Default language
    fallbackLng: 'fr',
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false
    },

    react: {
      useSuspense: false
    },

    debug: true // Remove this in production
  });

export default i18n;
