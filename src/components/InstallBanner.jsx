import { useInstallPrompt } from "../hooks/useInstallPrompt.js";
import "./InstallBanner.css";

export default function InstallBanner() {
  const { available, promptInstall, dismiss } = useInstallPrompt();

  if (!available) return null;

  return (
    <div className="install-banner">
      <img src="/icon-192.png" alt="" className="install-banner__icon" />
      <div className="install-banner__text">
        <span className="install-banner__title">Pasang Math Mastery</span>
        <span className="install-banner__sub">Akses terus dari skrin utama, tanpa buka browser.</span>
      </div>
      <button type="button" className="install-banner__cta" onClick={promptInstall}>
        Pasang
      </button>
      <button type="button" className="install-banner__close" onClick={dismiss} aria-label="Tutup">
        ×
      </button>
    </div>
  );
}
