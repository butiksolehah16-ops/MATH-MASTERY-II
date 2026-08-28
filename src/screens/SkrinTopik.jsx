import { useMemo, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import AppHeader from "../components/AppHeader.jsx";
import InfoBubble from "../components/InfoBubble.jsx";
import NoteStepper from "../engines/note-stepper/NoteStepper.jsx";
import StepPad from "../engines/step-pad/StepPad.jsx";
import QuestionSet from "../engines/mastery/QuestionSet.jsx";
import SpotlightTour from "../components/onboarding/SpotlightTour.jsx";
import { getChapter, getTopic } from "../data/chapters.js";
import {
  getNoteContent,
  getPadContent,
  getDiagnostikContent,
  getLatihanContent,
  getMasteryContent,
} from "../content/index.js";
import { useProgress, getTopicStatus } from "../state/ProgressContext.jsx";
import { useMisconception, getStepMistakeHistory } from "../state/MisconceptionContext.jsx";
import { hasSeenTour, markTourSeen } from "../state/onboarding.js";
import "./SkrinTopik.css";

const PAD_TOUR_STEPS = [
  {
    target: '[data-tour="step-pad-card"]',
    title: "Cara Latihan Berpandu ni jalan 📝",
    body:
      "Jawab SATU langkah je pada satu masa, then tekan \"Semak\". Confuse? Ada butang Bantuan kat bawah — " +
      "jangan segan tekan!",
  },
];

const PHASES = [
  {
    key: "nota",
    label: "Nota Interaktif",
    mentorLine: "Jom kita terokai konsep ni sama-sama sebelum tengok formula rasminya.",
    description:
      "Hook situasi sebenar → eksplorasi interaktif → insight → formula rasmi → contoh diselesaikan → 1 soalan check pantas.",
  },
  {
    key: "diagnostik",
    label: "Diagnostik",
    mentorLine: "Beberapa soalan ringkas dulu — nak tengok apa yang kamu dah tahu.",
    description: "Kesan pengetahuan sedia ada pelajar sebelum masuk latihan berpandu.",
  },
  {
    key: "pad",
    label: "Latihan Berpandu (Pad)",
    mentorLine: "Kita selesaikan langkah demi langkah. Saya semak setiap langkah kamu.",
    description:
      "Soalan dipecah kepada langkah kerja, disahkan betul/salah setiap langkah, ada butang Bantuan (hint) per-langkah.",
  },
  {
    key: "latihan",
    label: "Latihan Bersendirian",
    mentorLine: "Sekarang giliran kamu — cuba tanpa bantuan.",
    description: "Soalan serupa tanpa hint, untuk uji kefahaman pelajar secara bersendirian.",
  },
  {
    key: "mastery",
    label: "Ujian Mastery",
    mentorLine: "Ini pusingan akhir. Tunjukkan kefahaman sebenar kamu!",
    description: "Soalan dibentangkan secara berbeza. Perlu 85% betul tanpa hint untuk dikuasai.",
  },
];

const PAD_PHASE_INDEX = PHASES.findIndex((p) => p.key === "pad");

export default function SkrinTopik() {
  const { formId, babId, topikId } = useParams();
  const navigate = useNavigate();
  const { state, masterTopic } = useProgress();
  const { log: misconceptionLog, recordMistake } = useMisconception();
  const chapter = getChapter(formId, babId);
  const topik = getTopic(formId, babId, topikId);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [maxPhaseReached, setMaxPhaseReached] = useState(0);
  const [padTourDismissed, setPadTourDismissed] = useState(false);
  const [lockedHintRect, setLockedHintRect] = useState(null);
  const status = getTopicStatus(state, formId, babId, topikId);
  const noteContent = getNoteContent(formId, babId, topikId);
  const padContent = getPadContent(formId, babId, topikId);
  const diagnostikContent = getDiagnostikContent(formId, babId, topikId);
  const latihanContent = getLatihanContent(formId, babId, topikId);
  const masteryContent = getMasteryContent(formId, babId, topikId);

  const phase = PHASES[phaseIndex];
  const isLastPhase = phaseIndex === PHASES.length - 1;
  const isNotaPhase = phase.key === "nota";
  const isPadPhase = phase.key === "pad";
  const isDiagnostikPhase = phase.key === "diagnostik";
  const isLatihanPhase = phase.key === "latihan";
  const isMasteryPhase = phase.key === "mastery";
  const progressPct = useMemo(() => Math.round(((phaseIndex + 1) / PHASES.length) * 100), [phaseIndex]);

  if (!chapter || !topik) return <Navigate to={`/f/${formId}/peta`} replace />;
  if (status === "locked") return <Navigate to={`/f/${formId}/bab/${babId}`} replace />;

  const goToPhase = (i) => {
    setPhaseIndex(i);
    setMaxPhaseReached((m) => Math.max(m, i));
  };

  const handlePrimaryAction = () => {
    if (!isLastPhase) {
      goToPhase(phaseIndex + 1);
      return;
    }
    masterTopic(formId, babId, topikId);
    navigate(`/f/${formId}/bab/${babId}`);
  };

  const useNoteStepperEngine = isNotaPhase && noteContent;
  const useStepPadEngine = isPadPhase && padContent;
  const stepMistakeHistory = padContent
    ? getStepMistakeHistory(misconceptionLog, formId, babId, topikId, padContent.steps.length)
    : undefined;
  const useDiagnostikEngine = isDiagnostikPhase && diagnostikContent;
  const useLatihanEngine = isLatihanPhase && latihanContent;
  const useMasteryEngine = isMasteryPhase && masteryContent;
  const showPadTour = useStepPadEngine && !padTourDismissed && !hasSeenTour("pad-tutorial");

  const handleFinishPadTour = () => {
    markTourSeen("pad-tutorial");
    setPadTourDismissed(true);
  };

  const handleMasteryComplete = (result) => {
    if (result.passed) {
      masterTopic(formId, babId, topikId);
      navigate(`/f/${formId}/bab/${babId}`);
      return;
    }
    goToPhase(PAD_PHASE_INDEX);
  };

  return (
    <div className="screen skrin-topik" style={{ "--chapter-theme": chapter.theme }}>
      <AppHeader
        title={`Topik ${topik.id}`}
        subtitle={topik.title}
        onBack={() => navigate(`/f/${formId}/bab/${babId}`)}
        showXP
        accent={chapter.theme}
      />

      <div className="skrin-topik__progress-track" aria-hidden="true">
        <div className="skrin-topik__progress-fill" style={{ width: `${progressPct}%` }} />
      </div>

      <ol className="skrin-topik__stepper">
        {PHASES.map((p, i) => {
          const unlocked = i <= maxPhaseReached;
          return (
            <li key={p.key}>
              <button
                type="button"
                className={`skrin-topik__step${i === phaseIndex ? " skrin-topik__step--current" : ""}${
                  i < phaseIndex ? " skrin-topik__step--done" : ""
                }${!unlocked ? " skrin-topik__step--locked" : ""}`}
                aria-disabled={!unlocked}
                onClick={(e) => {
                  if (!unlocked) {
                    // Sengaja TAK stopPropagation — biar klik ni bubble ke
                    // document supaya InfoBubble lain yang mungkin masih
                    // terbuka (cth. XP/streak) tertutup serentak.
                    setLockedHintRect(e.currentTarget.getBoundingClientRect());
                    return;
                  }
                  goToPhase(i);
                }}
                aria-current={i === phaseIndex ? "step" : undefined}
                title={unlocked ? `Pergi ke ${p.label} (ulangkaji)` : `${p.label} masih dikunci`}
              >
                <span className="skrin-topik__step-dot">{i < phaseIndex ? "✓" : i + 1}</span>
                <span className="skrin-topik__step-label">{p.label}</span>
              </button>
            </li>
          );
        })}
      </ol>

      {lockedHintRect && (
        <InfoBubble anchorRect={lockedHintRect} onClose={() => setLockedHintRect(null)}>
          Habiskan dulu <strong>{PHASES[maxPhaseReached].label}</strong> untuk buka fasa ini.
        </InfoBubble>
      )}

      <div className="skrin-topik__banner">
        <span className="skrin-topik__banner-icon" aria-hidden="true">
          {chapter.number}
        </span>
        <span className="skrin-topik__banner-text">
          Bab {chapter.number} · {chapter.title}
        </span>
      </div>

      {useNoteStepperEngine ? (
        <NoteStepper
          key={`${topikId}-nota`}
          content={noteContent}
          onComplete={() => goToPhase(phaseIndex + 1)}
        />
      ) : useStepPadEngine ? (
        <StepPad
          key={`${topikId}-pad`}
          content={padContent}
          stepMistakeHistory={stepMistakeHistory}
          onStepMistake={(stepIndex, attempt) =>
            recordMistake(formId, babId, topikId, stepIndex, attempt, padContent.steps[stepIndex]?.prompt)
          }
          onComplete={() => goToPhase(phaseIndex + 1)}
        />
      ) : useDiagnostikEngine ? (
        <QuestionSet
          key={`${topikId}-diagnostik`}
          content={diagnostikContent}
          eyebrow="Diagnostik"
          resultLabels={{ neutral: "Bagus! Itu titik permulaan kamu.", ctaNeutral: "Mula Belajar" }}
          onComplete={() => goToPhase(phaseIndex + 1)}
        />
      ) : useLatihanEngine ? (
        <QuestionSet
          key={`${topikId}-latihan`}
          content={latihanContent}
          eyebrow="Latihan Bersendirian"
          resultLabels={{ neutral: "Latihan selesai!", ctaNeutral: "Teruskan ke Ujian Mastery" }}
          onComplete={() => goToPhase(phaseIndex + 1)}
        />
      ) : useMasteryEngine ? (
        <QuestionSet
          key={`${topikId}-mastery`}
          content={masteryContent}
          eyebrow="Ujian Mastery"
          passThreshold={0.85}
          resultLabels={{
            pass: "Kamu dah kuasai topik ini!",
            fail: "Belum cukup 85%. Jom ulang Latihan Berpandu dulu.",
            ctaPass: "Tandakan Dikuasai",
            ctaFail: "Kembali ke Latihan Berpandu",
          }}
          onComplete={handleMasteryComplete}
        />
      ) : (
        <>
          <div className="mentor-card">
            <div className="mentor-card__avatar" aria-hidden="true">
              🧑‍🏫
            </div>
            <div className="mentor-card__bubble">
              <p className="mentor-card__line">{phase.mentorLine}</p>
            </div>
          </div>

          <section className="phase-placeholder">
            <span className="phase-placeholder__eyebrow">
              Fasa {phaseIndex + 1} / {PHASES.length}
            </span>
            <h2 className="phase-placeholder__title">{phase.label}</h2>
            <p className="phase-placeholder__desc">{phase.description}</p>
            <div className="phase-placeholder__stub">
              Engine &amp; kandungan fasa ini belum dibina — shell navigasi sahaja.
            </div>
          </section>

          <button type="button" className="skrin-topik__primary-cta" onClick={handlePrimaryAction}>
            {isLastPhase ? "Tandakan Topik Dikuasai (demo)" : "Teruskan"}
          </button>
        </>
      )}

      {showPadTour && <SpotlightTour steps={PAD_TOUR_STEPS} onFinish={handleFinishPadTour} />}
    </div>
  );
}
