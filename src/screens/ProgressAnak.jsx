import { useNavigate, useSearchParams } from "react-router-dom";
import AppHeader from "../components/AppHeader.jsx";
import { FORMS } from "../data/forms.js";
import { getChapter, getTopic } from "../data/chapters.js";
import { getExamPaper } from "../content/exams/index.js";
import { useProgress } from "../state/ProgressContext.jsx";
import { useMisconception } from "../state/MisconceptionContext.jsx";
import { getAllDomainMastery, getMasteryLevel } from "../data/domains.js";
import "./LaporanProgress.css";

// Progress Anak — analisis TERPERINCI untuk ibu bapa, dipisahkan dari Laporan
// Progress (yang kekal ringkas) supaya laporan ringkas terus cepat dibaca.
// Guna kelas CSS "laporan-progress__*" yang sama (import LaporanProgress.css)
// sebab ini sambungan skrin yang sama, bukan reka bentuk baharu.
//
// Analisis DISKOP kepada SATU Tingkatan pada satu masa (tab di atas) — bukan
// gabung T1-3 sekali gus. Sebab: kalau kira merentasi semua Tingkatan, bab
// yang anak belum sampai lagi dikira "0" dan buat hampir semua bidang nampak
// "Lemah" walaupun anak sebenarnya on-track — laporan jadi sama je tak kira
// dari Tingkatan mana dibuka, dan mengelirukan ibu bapa.
function summariseMistakes(log, formId) {
  const counts = new Map();
  log
    .filter((entry) => entry.formId === formId)
    .forEach((entry) => {
      const key = `${entry.formId}|${entry.babId}|${entry.topikId}`;
      counts.set(key, (counts.get(key) ?? 0) + 1);
    });
  return [...counts.entries()]
    .map(([key, count]) => {
      const [entryFormId, babId, topikId] = key.split("|");
      const bab = getChapter(entryFormId, babId);
      const topik = getTopic(entryFormId, babId, topikId);
      const form = FORMS.find((f) => f.id === entryFormId);
      return { formId: entryFormId, babId, topikId, count, bab, topik, form };
    })
    .filter((m) => m.bab && m.topik && m.form)
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
}

export default function ProgressAnak() {
  const navigate = useNavigate();
  const { state } = useProgress();
  const { log } = useMisconception();
  const [searchParams, setSearchParams] = useSearchParams();

  const availableForms = FORMS.filter((f) => f.status === "available");
  const requestedFormId = searchParams.get("form");
  const activeFormId = availableForms.some((f) => f.id === requestedFormId)
    ? requestedFormId
    : availableForms[0]?.id;
  const activeForm = availableForms.find((f) => f.id === activeFormId);

  const examEntries = Object.entries(state.examScores ?? {})
    .map(([paperId, score]) => ({ paperId, paper: getExamPaper(paperId), ...score }))
    .filter((e) => e.paper && e.paper.formId === activeFormId)
    .sort((a, b) => a.paper.title.localeCompare(b.paper.title));

  const topMistakes = summariseMistakes(log, activeFormId);
  const domainSummaries = getAllDomainMastery(state, activeFormId);
  const hasAnyActivity = domainSummaries.some((d) => d.masteredTopics > 0) || examEntries.length > 0 || topMistakes.length > 0;

  return (
    <div className="screen laporan-progress">
      <AppHeader title="Progress Anak" subtitle="Analisis Terperinci" onBack={true} />

      <div className="laporan-progress__form-tabs" role="tablist">
        {availableForms.map((f) => (
          <button
            key={f.id}
            type="button"
            role="tab"
            aria-selected={f.id === activeFormId}
            className={`laporan-progress__form-tab${f.id === activeFormId ? " laporan-progress__form-tab--active" : ""}`}
            onClick={() => setSearchParams({ form: f.id })}
          >
            {f.label}
          </button>
        ))}
      </div>

      {!hasAnyActivity ? (
        <p className="laporan-progress__empty">
          Belum ada progress untuk {activeForm?.label ?? "Tingkatan ini"} lagi — mula belajar satu topik untuk analisis mula terisi di sini.
        </p>
      ) : (
        <>
          <section className="laporan-progress__section">
            <h2 className="laporan-progress__section-title">Analisis Mengikut Bidang</h2>
            <p className="laporan-progress__section-hint">
              Penguasaan {activeForm?.label} mengikut bidang matematik — bantu kenal pasti bahagian mana perlu diberi tumpuan.
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
