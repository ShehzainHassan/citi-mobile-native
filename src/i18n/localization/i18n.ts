import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enAccountScreen from './en/accounts.json';
import enAuth from './en/auth.json';
import enHomeScreen from './en/homeScreen.json';
import enTabs from './en/tabs.json';
import frAccountScreen from './fr/accounts.json';
import frAuth from './fr/auth.json';
import frHomeScreen from './fr/homeScreen.json';
import frTabs from './fr/tabs.json';
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      auth: enAuth,
      homeScreen: enHomeScreen,
      accounts: enAccountScreen,
      tabs: enTabs,
    },
    fr: {
      auth: frAuth,
      homeScreen: frHomeScreen,
      accounts: frAccountScreen,
      tabs: frTabs,
    },
  },
  ns: ['auth', 'homeScreen', 'accounts', 'tabs'],
  defaultNS: 'auth',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
