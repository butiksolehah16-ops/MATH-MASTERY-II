import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "mm_lang_v1";

// Bahasa kandungan pembelajaran (nota/diagnostik/pad/latihan/mastery) — PILOT
// dwibahasa, skop kepada satu topik dulu (Form 2, Bab 5, Topik 5.1) sementara
// terjemahan topik lain belum siap. UI chrome (menu, butang navigasi) KEKAL
// Bahasa Malaysia buat masa ini — cuma kandungan topik yang bertukar ikut
// tetapan ini. Fail kandungan tanpa versi "en" akan fallback ke BM secara
// automatik (lihat src/content/index.js).
function loadInitialLanguage() {
  if (typeof window === "undefined") return "ms";
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw === "en" ? "en" : "ms";
  } catch {
    return "ms";
  }
}

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(loadInitialLanguage);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // storan tak tersedia — tetapan cuma tak persist
    }
  }, [language]);

  const setLanguage = useCallback((lang) => {
    setLanguageState(lang === "en" ? "en" : "ms");
  }, []);

  const value = useMemo(() => ({ language, setLanguage }), [language, setLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
