// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


import translationEN from './translations/en.json';
import translationFR from './translations/fr.json';
import translationDE from './translations/de.json';
import translationES from './translations/es.json';


i18n.use(initReactI18next).init({
  resources: {
    fr: {
      translation: translationFR,
    },
    en: {
      translation: translationEN,
    },
    de: {
      translation: translationDE,
    },
    es: {
      translation: translationES,
    }
    // Ajoutez d'autres langues au besoin
  },
  lng: 'fr', // Langue par défaut
  fallbackLng: 'fr', // Langue de secours si la traduction n'est pas trouvée
  interpolation: {
    escapeValue: false, // Ne pas échapper les variables dans la traduction
  },
});


export default i18n;
