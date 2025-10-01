import i18n from "./i18n";

export const languages = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
];

export const changeLanguage = async (code: string) => {
  await i18n.changeLanguage(code);
};
