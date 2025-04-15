import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: "Welcome to Breast Cancer Predictor"
    }
  },
  hi: {
    translation: {
      welcome: "ब्रेस्ट कैंसर भविष्यवक्ता में आपका स्वागत है"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;
