import { Navigate, useNavigate, useParams } from "react-router-dom";
import AppHeader from "../components/AppHeader.jsx";
import UasaExam from "../engines/uasa-exam/UasaExam.jsx";
import { getForm } from "../data/forms.js";
import { getExamPaper } from "../content/exams/index.js";
import { useProgress } from "../state/ProgressContext.jsx";
import "./UjianUasa.css";

export default function UjianUasa() {
  const { formId, paperId } = useParams();
  const navigate = useNavigate();
  const { recordExamResult } = useProgress();
  const form = getForm(formId);
  const paper = getExamPaper(paperId);

  if (!form || !paper) return <Navigate to={`/f/${formId}`} replace />;

  const handleFinish = (result) => {
    recordExamResult?.(formId, paper.id, result);
    navigate(`/f/${formId}`);
  };

  return (
    <div className="screen ujian-uasa">
      <AppHeader
        title={`Ujian ${paper.examTypeLabel ?? ""}`}
        subtitle={form.label}
        onBack={() => navigate(`/f/${formId}/ujian`)}
        showXP
      />
      <UasaExam content={paper} onFinish={handleFinish} />
    </div>
  );
}
