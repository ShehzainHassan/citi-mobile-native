import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enAuth from "./en/auth.json";
import frAuth from "./fr/auth.json";

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: { auth: enAuth },
    fr: { auth: frAuth },
  },
  ns: ["auth"],
  defaultNS: "auth",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
