import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Skrin Topik (Nota, Diagnostik, Pad, Latihan Sendiri, Mastery Test) ialah
// "ruang belajar" — tema cerah supaya selesa untuk sesi belajar panjang.
// Skrin luar (Pilih Form, Dashboard, Peta Bab, senarai topik, Profil) kekal gelap.
const LIGHT_THEME_PATTERN = /^\/f\/[^/]+\/bab\/[^/]+\/topik\/[^/]+/;

export function useThemeByRoute() {
  const { pathname } = useLocation();

  useEffect(() => {
    const theme = LIGHT_THEME_PATTERN.test(pathname) ? "light" : "dark";
    document.documentElement.dataset.theme = theme;

    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", theme === "light" ? "#f6f2e9" : "#0e1420");
    }
  }, [pathname]);
}
