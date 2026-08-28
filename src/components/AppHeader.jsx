import { useNavigate } from "react-router-dom";
import XPStreakBadge from "./XPStreakBadge.jsx";
import "./AppHeader.css";

export default function AppHeader({
  title,
  subtitle,
  onBack,
  showXP = false,
  showProfile = false,
  profileHref,
  accent,
}) {
  const navigate = useNavigate();

  return (
    <header className="app-header" style={accent ? { "--header-accent": accent } : undefined}>
      <div className="app-header__side app-header__side--start">
        {onBack && (
          <button
            type="button"
            className="app-header__back"
            aria-label="Kembali"
            onClick={() => (onBack === true ? navigate(-1) : onBack())}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
      </div>

      <div className="app-header__titles">
        {title && <h1 className="app-header__title">{title}</h1>}
        {subtitle && <p className="app-header__subtitle">{subtitle}</p>}
      </div>

      <div className="app-header__side app-header__side--end">
        {showXP && <XPStreakBadge compact />}
        {showProfile && (
          <button
            type="button"
            className="app-header__profile"
            aria-label="Profil dan tetapan"
            onClick={() => navigate(profileHref ?? "/profil")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="8" r="3.4" stroke="currentColor" strokeWidth="2" />
              <path d="M4.5 19.5c1.6-3.4 4.6-5 7.5-5s5.9 1.6 7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        )}
      </div>
    </header>
  );
}
