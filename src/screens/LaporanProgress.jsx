import { useNavigate } from "react-router-dom";
import AppHeader from "../components/AppHeader.jsx";
import ProgressRing from "../components/ProgressRing.jsx";
import { FORMS } from "../data/forms.js";
import { getChapters } from "../data/chapters.js";
import { useProgress, getFormProgress } from "../state/ProgressContext.jsx";
import "./LaporanProgress.css";

// Laporan Progress untuk Ibu Bapa — ringkasan HANYA-BACA (read-only) yang
// mengagregat data yang SEDIA ADA (ProgressContext) merentasi SEMUA Tingkatan
// yang tersedia. Tiada akaun/backend — ini dipaparkan terus dalam app yang
// sama (pelajar tunjuk kepada ibu bapa), konsisten dengan app tanpa-login.
//
// Skrin ni sengaja ringkas (hero + progress ikut Tingkatan sahaja) — analisis
// terperinci (bidang matematik, topik perlu perhatian, keputusan ujian)
// dipindahkan ke skrin "Progress Anak" berasingan supaya skrin ni terus jadi
// gambaran ringkas yang cepat dibaca.
function summariseForm(state, form) {
  const chapters = getChapters(form.id);
  const progress = getFormProgress(state, form.id);
  let topicsTotal = 0;
  let topicsMastered = 0;
  let babMastered = 0;
  chapters.forEach((bab) => {
    const babState = progress.chapters[bab.id];
    if (babState?.status === "mastered") babMastered += 1;
    bab.topics.forEach((topik) => {
      topicsTotal += 1;
      if (babState?.topics[topik.id]?.status === "mastered") topicsMastered += 1;
    });
  });
  return {
    form,
    theme: chapters[0]?.theme ?? "var(--accent)",
    babTotal: chapters.length,
    babMastered,
    topicsTotal,
    topicsMastered,
  };
}

export default function LaporanProgress() {
  const navigate = useNavigate();
  const { state } = useProgress();

  const availableForms = FORMS.filter((f) => f.status === "available");
  const formSummaries = availableForms.map((form) => summariseForm(state, form));
  const totalTopicsMastered = formSummaries.reduce((a, f) => a + f.topicsMastered, 0);
  const totalTopics = formSummaries.reduce((a, f) => a + f.topicsTotal, 0);

  const hasAnyActivity = totalTopicsMastered > 0 || state.xp > 0;

  return (
    <div className="screen laporan-progress">
      <AppHeader title="Laporan Progress" subtitle="Untuk Ibu Bapa" onBack={true} />

      <section className="laporan-progress__hero">
        <ProgressRing value={totalTopicsMastered} total={Math.max(totalTopics, 1)} size={88} stroke={8} color="var(--accent)" />
        <div className="laporan-progress__hero-text">
          <span className="laporan-progress__hero-name">{state.profile.name}</span>
          <span className="laporan-progress__hero-stat">
            {state.xp} XP · {state.streak} hari streak
          </span>
          <span className="laporan-progress__hero-stat">{totalTopicsMastered}/{totalTopics} topik dikuasai keseluruhan</span>
        </div>
      </section>

      {!hasAnyActivity ? (
        <p className="laporan-progress__empty">
          Belum ada progress lagi — mula belajar satu topik untuk laporan mula terisi di sini.
        </p>
      ) : (
        <section className="laporan-progress__section">
          <h2 className="laporan-progress__section-title">Progress Ikut Tingkatan</h2>
          <div className="laporan-progress__form-list">
            {formSummaries.map((s) => (
              <div
                key={s.form.id}
                className="laporan-progress__form-card"
                style={{ "--form-theme": s.theme }}
              >
                <div className="laporan-progress__form-card-head">
                  <span className="laporan-progress__form-card-label">
                    <span className="laporan-progress__form-card-badge">{s.form.shortLabel}</span>
                    {s.form.label}
                  </span>
                  <span className="laporan-progress__form-card-count">
                    {s.babMastered}/{s.babTotal} bab
                  </span>
                </div>
                <div className="laporan-progress__bar-track">
                  <div
                    className="laporan-progress__bar-fill"
                    style={{ width: `${s.babTotal > 0 ? (s.babMastered / s.babTotal) * 100 : 0}%` }}
                  />
                </div>
                <span className="laporan-progress__form-card-sub">
                  {s.topicsMastered}/{s.topicsTotal} topik dikuasai
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      <button
        type="button"
        className="laporan-progress__anak-cta"
        onClick={() => navigate("/profil/laporan/anak")}
      >
        <span className="laporan-progress__anak-cta-text">
          <span className="laporan-progress__anak-cta-title">Progress Anak</span>
          <span className="laporan-progress__anak-cta-sub">Analisis ikut bidang, topik perlu perhatian &amp; keputusan ujian</span>
        </span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
