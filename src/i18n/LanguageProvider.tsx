import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { Language, translations } from "./translations";

type I18nContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "inprime.language";

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "uk" || stored === "en") return stored;
  return "en";
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, lang);
    }
  };

  const value = useMemo<I18nContextValue>(() => {
    return {
      language,
      setLanguage,
      t: translations[language],
    };
  }, [language]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within LanguageProvider");
  }
  return ctx;
}

