import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Skrin Topik (Nota, Diagnostik, Pad, Latihan Sendiri, Mastery Test) ialah
// "ruang belajar" — tema cerah supaya selesa untuk sesi belajar panjang.
// Skrin luar (Pilih Form, Dashboard, Peta Bab, senarai topik, Profil) kekal gelap.
// Laporan Progress (untuk ibu bapa) turut tema cerah — kad-kad warna (domain
// Lemah/Sederhana/Kuat) lebih senang dibaca atas latar putih macam laporan biasa.
const LIGHT_THEME_PATTERN = /^\/f\/[^/]+\/bab\/[^/]+\/topik\/[^/]+|^\/profil\/laporan/;

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
