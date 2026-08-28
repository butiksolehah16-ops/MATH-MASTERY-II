import { Navigate, useNavigate, useParams } from "react-router-dom";
import AppHeader from "../components/AppHeader.jsx";
import { getForm } from "../data/forms.js";
import { UASA_PAPERS } from "../content/uasa/index.js";
import { UPSA_PAPERS } from "../content/upsa/index.js";
import { useProgress } from "../state/ProgressContext.jsx";
import "./SenaraiUjian.css";

function ExamCard({ paper, bestPct, onSelect }) {
  return (
    <li className="senarai-ujian__card">
      <div className="senarai-ujian__card-head">
        <span className="senarai-ujian__card-badge">{paper.examTypeLabel}</span>
        {bestPct != null && <span className="senarai-ujian__card-best">Terbaik: {bestPct}%</span>}
      </div>
      <h3 className="senarai-ujian__card-title">{paper.title}</h3>
      <p className="senarai-ujian__card-subtitle">{paper.subtitle}</p>
      <div className="senarai-ujian__card-stats">
        <span>{paper.totalMarks} markah</span>
        <span>{paper.durationMinutes} min</span>
      </div>
      <button type="button" className="senarai-ujian__card-cta" onClick={onSelect}>
        Mula Ujian
      </button>
    </li>
  );
}

export default function SenaraiUjian() {
  const { formId } = useParams();
  const navigate = useNavigate();
  const { state } = useProgress();
  const form = getForm(formId);

  if (!form) return <Navigate to="/" replace />;

  const getBestPct = (paperId) => state.examScores?.[paperId]?.bestPct;
  const uasaPapers = UASA_PAPERS.filter((paper) => paper.formId === formId);
  const upsaPapers = UPSA_PAPERS.filter((paper) => paper.formId === formId);

  return (
    <div className="screen senarai-ujian">
      <AppHeader title="Senarai Ujian" subtitle={form.label} onBack={() => navigate(`/f/${formId}`)} showXP />

      <p className="senarai-ujian__intro">
        Format sebenar peperiksaan sekolah, soalan dicampur dengan KBAT. Jawapan hanya disemak selepas kamu
        hantar — sama macam kertas sebenar.
      </p>

      <section className="senarai-ujian__section">
        <h2 className="senarai-ujian__section-title">UASA · Akhir Sesi (semua bab)</h2>
        <ul className="senarai-ujian__list">
          {uasaPapers.map((paper) => (
            <ExamCard
              key={paper.id}
              paper={paper}
              bestPct={getBestPct(paper.id)}
              onSelect={() => navigate(`/f/${formId}/ujian/${paper.id}`)}
            />
          ))}
        </ul>
      </section>

      <section className="senarai-ujian__section">
        <h2 className="senarai-ujian__section-title">UPSA · Pertengahan Tahun</h2>
        <ul className="senarai-ujian__list">
          {upsaPapers.map((paper) => (
            <ExamCard
              key={paper.id}
              paper={paper}
              bestPct={getBestPct(paper.id)}
              onSelect={() => navigate(`/f/${formId}/ujian/${paper.id}`)}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
