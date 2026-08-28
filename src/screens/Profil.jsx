import { useNavigate } from "react-router-dom";
import AppHeader from "../components/AppHeader.jsx";
import { useProgress } from "../state/ProgressContext.jsx";
import "./Profil.css";

export default function Profil() {
  const navigate = useNavigate();
  const { state } = useProgress();

  return (
    <div className="screen profil">
      <AppHeader title="Profil & Tetapan" onBack={true} />

      <section className="profil__summary">
        <div className="profil__avatar" aria-hidden="true">
          {state.profile.name.charAt(0)}
        </div>
        <div>
          <span className="profil__name">{state.profile.name}</span>
          <span className="profil__xp">{state.xp} XP · {state.streak} hari streak</span>
        </div>
      </section>

      <nav className="profil__menu">
        <button type="button" className="profil__menu-item" onClick={() => navigate("/profil/laporan")}>
          <span>Laporan Progress untuk Ibu Bapa</span>
        </button>
        <button type="button" className="profil__menu-item" onClick={() => navigate("/profil/tetapan")}>
          <span>Tetapan Akaun</span>
        </button>
        <button type="button" className="profil__menu-item" onClick={() => navigate("/profil/notifikasi")}>
          <span>Notifikasi</span>
        </button>
      </nav>

      <button type="button" className="profil__back-link" onClick={() => navigate("/")}>
        Tukar Tingkatan
      </button>
    </div>
  );
}
