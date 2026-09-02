import { useNavigate } from "react-router-dom";
import AppHeader from "../components/AppHeader.jsx";
import ProgressRing from "../components/ProgressRing.jsx";
import { FORMS } from "../data/forms.js";
import { getChapters, getChapter, getTopic } from "../data/chapters.js";
import { getExamPaper } from "../content/exams/index.js";
import { useProgress, getFormProgress } from "../state/ProgressContext.jsx";
import { useMisconception } from "../state/MisconceptionContext.jsx";
import { getAllDomainMastery, getMasteryLevel } from "../data/domains.js";
import "./LaporanProgress.css";

// Laporan Progress untuk Ibu Bapa — ringkasan HANYA-BACA (read-only) yang
// mengagregat data yang SEDIA ADA (ProgressContext + MisconceptionContext)
// merentasi SEMUA Tingkatan yang tersedia. Tiada akaun/backend — ini
// dipaparkan terus dalam app yang sama (pelajar tunjuk kepada ibu bapa),
// konsisten dengan app tanpa-login pada masa ini.
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

function summariseMistakes(log) {
  const counts = new Map();
  log.forEach((entry) => {
    const key = `${entry.formId}|${entry.babId}|${entry.topikId}`;
    counts.set(key, (counts.get(key) ?? 0) + 1);
  });
  return [...counts.entries()]
    .map(([key, count]) => {
      const [formId, babId, topikId] = key.split("|");
      const bab = getChapter(formId, babId);
      const topik = getTopic(formId, babId, topikId);
      const form = FORMS.find((f) => f.id === formId);
      return { formId, babId, topikId, count, bab, topik, form };
    })
    .filter((m) => m.bab && m.topik && m.form)
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
}

export default function LaporanProgress() {
  const navigate = useNavigate();
  const { state } = useProgress();
  const { log } = useMisconception();

  const availableForms = FORMS.filter((f) => f.status === "available");
  const formSummaries = availableForms.map((form) => summariseForm(state, form));
  const totalTopicsMastered = formSummaries.reduce((a, f) => a + f.topicsMastered, 0);
  const totalTopics = formSummaries.reduce((a, f) => a + f.topicsTotal, 0);

  const examEntries = Object.entries(state.examScores ?? {})
    .map(([paperId, score]) => ({ paperId, paper: getExamPaper(paperId), ...score }))
    .filter((e) => e.paper)
    .sort((a, b) => a.paper.title.localeCompare(b.paper.title));

  const topMistakes = summariseMistakes(log);
  const domainSummaries = getAllDomainMastery(state);
  const hasAnyActivity = totalTopicsMastered > 0 || examEntries.length > 0 || state.xp > 0;

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
        <>
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
                    <span className="laporan-progress__form-card-label">{s.form.label}</span>
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

          <section className="laporan-progress__section">
            <h2 className="laporan-progress__section-title">Analisis Mengikut Bidang</h2>
            <p className="laporan-progress__section-hint">
              Penguasaan merentasi Tingkatan 1-3, dikumpulkan ikut bidang matematik — bantu kenal pasti bahagian mana perlu diberi tumpuan.
            </p>
            <div className="laporan-progress__domain-list">
              {domainSummaries.map((d) => {
                const level = getMasteryLevel(d.percent);
                return (
                  <div key={d.id} className="laporan-progress__domain-card">
                    <div className="laporan-progress__domain-head">
                      <span className="laporan-progress__domain-label">{d.label}</span>
                      <span className={`laporan-progress__domain-badge laporan-progress__domain-badge--${level.tone}`}>
                        {level.label}
                      </span>
                    </div>
                    <div className="laporan-progress__bar-track">
                      <div
                        className={`laporan-progress__domain-bar-fill laporan-progress__domain-bar-fill--${level.tone}`}
                        style={{ width: `${d.percent}%` }}
                      />
                    </div>
                    <span className="laporan-progress__domain-sub">
                      {d.percent}% · {d.masteredTopics}/{d.totalTopics} topik dikuasai
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          {examEntries.length > 0 && (
            <section className="laporan-progress__section">
              <h2 className="laporan-progress__section-title">Keputusan Ujian UASA / UPSA</h2>
              <ul className="laporan-progress__exam-list">
                {examEntries.map((e) => (
                  <li key={e.paperId} className="laporan-progress__exam-item">
                    <div className="laporan-progress__exam-item-text">
                      <span className="laporan-progress__exam-item-title">{e.paper.title}</span>
                      <span className="laporan-progress__exam-item-sub">
                        {e.paper.subtitle} · {e.attempts} percubaan
                      </span>
                    </div>
                    <span className="laporan-progress__exam-item-pct">{e.bestPct}%</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {topMistakes.length > 0 && (
            <section className="laporan-progress__section">
              <h2 className="laporan-progress__section-title">Topik Perlu Perhatian</h2>
              <p className="laporan-progress__section-hint">
                Topik yang paling kerap tersilap semasa Latihan Berpandu — sesuai untuk ulangkaji bersama.
              </p>
              <ul className="laporan-progress__mistake-list">
                {topMistakes.map((m) => (
                  <li key={`${m.formId}-${m.babId}-${m.topikId}`} className="laporan-progress__mistake-item">
                    <div className="laporan-progress__mistake-item-text">
                      <span className="laporan-progress__mistake-item-title">
                        {m.topik.title}
                      </span>
                      <span className="laporan-progress__mistake-item-sub">
                        {m.form.label} · Bab {m.bab.number} · {m.bab.title}
                      </span>
                    </div>
                    <button
                      type="button"
                      className="laporan-progress__mistake-item-cta"
                      onClick={() => navigate(`/f/${m.formId}/bab/${m.babId}/topik/${m.topikId}`)}
                    >
                      Ulangkaji
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </>
      )}
    </div>
  );
}
