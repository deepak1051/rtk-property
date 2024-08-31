import i18next from 'i18next';

import { initReactI18next } from 'react-i18next';
import { Translations } from './constant/translation';

const resources = {
  en: {
    translation: {
      [Translations.ADD_PROPERTY]: 'Add Property',
      [Translations.DELETE_PROPERTY]: 'Delete Property',
    },
  },
  fr: {
    translation: {
      [Translations.ADD_PROPERTY]: 'Ajouter une propriété',
      [Translations.DELETE_PROPERTY]: 'Supprimer la propriété',
    },
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: 'fr',
});

export default i18next;
