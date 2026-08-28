import { useNavigate } from "react-router-dom";
import { FORMS } from "../data/forms.js";
import { useProgress, getFormStats } from "../state/ProgressContext.jsx";
import "./PilihForm.css";

export default function PilihForm() {
  const navigate = useNavigate();
  const { state, ensureForm } = useProgress();

  return (
    <div className="screen pilih-form">
      <div className="pilih-form__intro">
        <span className="pilih-form__brand">Math Mastery</span>
        <h1 className="pilih-form__heading">Pilih Tingkatan</h1>
        <p className="pilih-form__sub">Kuasai Matematik KSSM, satu bab pada satu masa.</p>
      </div>

      <div className="pilih-form__list">
        {FORMS.map((form) => {
          const available = form.status === "available";
          const stats = available ? getFormStats(state, form.id) : null;

          return (
            <button
              key={form.id}
              type="button"
              className={`form-card${available ? "" : " form-card--locked"}`}
              disabled={!available}
              onClick={() => {
                ensureForm(form.id);
                navigate(`/f/${form.id}`);
              }}
            >
              <div className="form-card__badge">{form.shortLabel}</div>
              <div className="form-card__body">
                <span className="form-card__title">{form.label}</span>
                <span className="form-card__tagline">{form.tagline}</span>
                {available && stats && (
                  <span className="form-card__progress">
                    {stats.mastered}/{stats.total} bab dikuasai
                  </span>
                )}
              </div>
              {!available && <span className="form-card__soon">Akan Datang</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
