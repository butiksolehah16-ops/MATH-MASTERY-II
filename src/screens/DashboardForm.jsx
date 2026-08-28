import { useNavigate, useParams } from "react-router-dom";
import AppHeader from "../components/AppHeader.jsx";
import ModeSwitch from "../components/ModeSwitch.jsx";
import ProgressRing from "../components/ProgressRing.jsx";
import { getForm } from "../data/forms.js";
import { useProgress, getFormStats, getTopicStatus } from "../state/ProgressContext.jsx";
import "./DashboardForm.css";

export default function DashboardForm() {
  const { formId } = useParams();
  const navigate = useNavigate();
  const { state } = useProgress();
  const form = getForm(formId);
  const stats = getFormStats(state, formId);
  const activeChapter = stats.activeChapter;
  const firstUnfinishedTopic = activeChapter?.topics.find(
    (t) => getTopicStatus(state, formId, activeChapter.id, t.id) !== "mastered"
  );

  return (
    <div className="screen dashboard-form">
      <AppHeader
        title={form?.label ?? "Dashboard"}
        onBack={() => navigate("/")}
        showProfile
        accent={activeChapter?.theme}
      />

      <section className="dashboard-form__overview">
        <ProgressRing value={stats.mastered} total={stats.total} size={88} stroke={8} color="var(--accent)" />
        <div className="dashboard-form__overview-text">
          <span className="dashboard-form__overview-count">
            {stats.mastered}/{stats.total} bab dikuasai
          </span>
          <span className="dashboard-form__overview-hint">Terus konsisten untuk kekalkan streak kamu.</span>
        </div>
      </section>

      <section className="dashboard-form__mode">
        <span className="dashboard-form__section-label">Mod</span>
        <ModeSwitch />
      </section>

      {state.mode === "baharu" && activeChapter && (
        <section className="continue-card" style={{ "--continue-theme": activeChapter.theme }}>
          <span className="continue-card__label">Sambung dari mana ditinggalkan</span>
          <span className="continue-card__title">
            Bab {activeChapter.number}: {activeChapter.title}
          </span>
          {firstUnfinishedTopic && (
            <span className="continue-card__topic">
              Topik {firstUnfinishedTopic.id} · {firstUnfinishedTopic.title}
            </span>
          )}
          <button
            type="button"
            className="continue-card__cta"
            onClick={() =>
              firstUnfinishedTopic
                ? navigate(`/f/${formId}/bab/${activeChapter.id}/topik/${firstUnfinishedTopic.id}`)
                : navigate(`/f/${formId}/bab/${activeChapter.id}`)
            }
          >
            Sambung Belajar
          </button>
        </section>
      )}

      {state.mode === "ulangkaji" && (
        <section className="continue-card continue-card--review">
          <span className="continue-card__label">Mod Ulangkaji</span>
          <span className="continue-card__title">Recap ringkas + latih tubi bercampur</span>
          <span className="continue-card__topic">
            Bab yang pernah dipelajari boleh diakses terus dari Peta Bab.
          </span>
          <button type="button" className="continue-card__cta" onClick={() => navigate(`/f/${formId}/peta`)}>
            Pilih Bab untuk Ulangkaji
          </button>
          {(formId === "form1" || formId === "form2" || formId === "form3") && (
            <>
              <span className="continue-card__topic continue-card__topic--uasa">
                Nak cabaran sebenar? Cuba format ujian sekolah penuh (UASA/UPSA), dicampur soalan KBAT.
              </span>
              <button
                type="button"
                className="continue-card__cta continue-card__cta--uasa"
                onClick={() => navigate(`/f/${formId}/ujian`)}
              >
                Pilih Ujian UASA / UPSA
              </button>
            </>
          )}
        </section>
      )}

      <button type="button" className="dashboard-form__map-link" onClick={() => navigate(`/f/${formId}/peta`)}>
        <span>Lihat Peta Bab Penuh</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
