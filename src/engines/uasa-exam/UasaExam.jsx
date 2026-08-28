import { useEffect, useMemo, useRef, useState } from "react";
import { normalizeAnswer } from "../shared/shuffle.js";
import "./UasaExam.css";

// UASA Exam Engine — mensimulasikan format kertas UASA sebenar: berbahagian
// (Objektif/Struktur), bermasa, dan soalan TIDAK disemak satu-satu (macam
// peperiksaan betul — jawapan hanya disemak selepas "Hantar"), berbeza
// daripada QuestionSet (Diagnostik/Latihan/Mastery) yang beri maklum balas
// serta-merta. Bahagian C sengaja bertanda KBAT dalam kandungan.
//
// Struktur `content` (lihat src/content/uasa/uasaPaper1.js):
//   { title, subtitle, totalMarks, durationMinutes, sections: [
//       { key, label, instruction, type: "mcq" | "structured", questions: [...] }
//   ] }
// Soalan "mcq": { id, topic, marks, prompt, choices[], answer }
// Soalan "structured": { id, topic, isKbat, context, parts: [{label,prompt,answer,marks}], solution: [] }

function flattenQuestions(content) {
  const flat = [];
  content.sections.forEach((section) => {
    section.questions.forEach((q) => {
      flat.push({ section, question: q });
    });
  });
  return flat;
}

function scoreExam(content, answers) {
  const sectionResults = content.sections.map((section) => {
    let earned = 0;
    let max = 0;
    const questionResults = section.questions.map((q) => {
      if (section.type === "mcq") {
        const got = answers[q.id];
        const isCorrect = got === q.answer;
        earned += isCorrect ? q.marks : 0;
        max += q.marks;
        return { id: q.id, earned: isCorrect ? q.marks : 0, max: q.marks };
      }
      const partResults = q.parts.map((p) => {
        const key = `${q.id}${p.label}`;
        const got = answers[key] ?? "";
        const isCorrect = normalizeAnswer(got) === normalizeAnswer(p.answer) && got !== "";
        earned += isCorrect ? p.marks : 0;
        max += p.marks;
        return { label: p.label, earned: isCorrect ? p.marks : 0, max: p.marks };
      });
      const qEarned = partResults.reduce((a, r) => a + r.earned, 0);
      const qMax = partResults.reduce((a, r) => a + r.max, 0);
      return { id: q.id, earned: qEarned, max: qMax, partResults };
    });
    return { key: section.key, label: section.label, earned, max, questionResults };
  });
  const totalEarned = sectionResults.reduce((a, s) => a + s.earned, 0);
  const totalMax = sectionResults.reduce((a, s) => a + s.max, 0);
  return { totalEarned, totalMax, sectionResults };
}

function formatClock(seconds) {
  const s = Math.max(0, seconds);
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${String(m).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}

export default function UasaExam({ content, onFinish }) {
  const [stage, setStage] = useState("intro"); // intro | exam | review
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [secondsLeft, setSecondsLeft] = useState(content.durationMinutes * 60);
  const [result, setResult] = useState(null);
  const timerRef = useRef(null);

  const flat = useMemo(() => flattenQuestions(content), [content]);
  const totalItems = flat.length;
  const current = flat[index];
  const isFirst = index === 0;
  const isLast = index === totalItems - 1;
  const prevSectionKey = index > 0 ? flat[index - 1].section.key : null;
  const showSectionBanner = current.section.key !== prevSectionKey;

  useEffect(() => {
    if (stage !== "exam") return undefined;
    timerRef.current = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [stage]);

  useEffect(() => {
    if (stage === "exam" && secondsLeft === 0) {
      handleSubmit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondsLeft, stage]);

  const answeredCount = useMemo(() => {
    return flat.filter(({ section, question }) => {
      if (section.type === "mcq") return answers[question.id] != null;
      return question.parts.every((p) => (answers[`${question.id}${p.label}`] ?? "").trim() !== "");
    }).length;
  }, [flat, answers]);

  const handleStart = () => setStage("exam");

  const handleSubmit = () => {
    clearInterval(timerRef.current);
    setResult(scoreExam(content, answers));
    setStage("review");
  };

  const setMcqAnswer = (questionId, choice) => {
    setAnswers((a) => ({ ...a, [questionId]: choice }));
  };

  const setPartAnswer = (questionId, partLabel, value) => {
    setAnswers((a) => ({ ...a, [`${questionId}${partLabel}`]: value }));
  };

  if (stage === "intro") {
    return (
      <div className="uasa-exam">
        <div className="uasa-exam__intro">
          <span className="uasa-exam__intro-eyebrow">Format Sebenar {content.examTypeLabel ?? "UASA"}</span>
          <h2 className="uasa-exam__intro-title">{content.title}</h2>
          <p className="uasa-exam__intro-subtitle">{content.subtitle}</p>
          <div className="uasa-exam__intro-stats">
            <div className="uasa-exam__intro-stat">
              <span className="uasa-exam__intro-stat-value">{content.totalMarks}</span>
              <span className="uasa-exam__intro-stat-label">Jumlah Markah</span>
            </div>
            <div className="uasa-exam__intro-stat">
              <span className="uasa-exam__intro-stat-value">{content.durationMinutes} min</span>
              <span className="uasa-exam__intro-stat-label">Masa</span>
            </div>
            <div className="uasa-exam__intro-stat">
              <span className="uasa-exam__intro-stat-value">{totalItems}</span>
              <span className="uasa-exam__intro-stat-label">Soalan</span>
            </div>
          </div>
          <ul className="uasa-exam__intro-sections">
            {content.sections.map((s) => (
              <li key={s.key} className="uasa-exam__intro-section">
                <span className="uasa-exam__intro-section-key">{s.label}</span>
                <span className="uasa-exam__intro-section-desc">{s.instruction}</span>
              </li>
            ))}
          </ul>
          <p className="uasa-exam__intro-note">
            Jawapan HANYA disemak selepas kamu tekan "Hantar Jawapan" — sama macam kertas sebenar. Kamu boleh
            gerak bebas antara soalan bila-bila masa.
          </p>
          <button type="button" className="uasa-exam__cta" onClick={handleStart}>
            Mula Ujian
          </button>
        </div>
      </div>
    );
  }

  if (stage === "review" && result) {
    const pct = Math.round((result.totalEarned / result.totalMax) * 100);
    return (
      <div className="uasa-exam">
        <section className="uasa-exam__result-summary">
          <span className="uasa-exam__result-score">
            {result.totalEarned}/{result.totalMax} markah
          </span>
          <h2 className="uasa-exam__result-pct">{pct}%</h2>
          <div className="uasa-exam__result-sections">
            {result.sectionResults.map((s) => (
              <div key={s.key} className="uasa-exam__result-section-chip">
                <span>{s.label}</span>
                <span>
                  {s.earned}/{s.max}
                </span>
              </div>
            ))}
          </div>
          <p className="uasa-exam__result-note">
            {pct >= 80
              ? "Sangat bagus! Kamu dah kuasai kebanyakan bab yang diuji."
              : pct >= 50
                ? "Progress baik — semak semula bahagian yang tersasar di bawah."
                : "Jom semak semula setiap soalan di bawah dan ulangkaji bab yang lemah."}
          </p>
        </section>

        <div className="uasa-exam__review-list">
          {content.sections.map((section) => (
            <div key={section.key} className="uasa-exam__review-section">
              <h3 className="uasa-exam__review-section-title">{section.label}</h3>
              {section.questions.map((q) => {
                const sectionResult = result.sectionResults.find((s) => s.key === section.key);
                const qResult = sectionResult.questionResults.find((r) => r.id === q.id);
                const isFullyCorrect = qResult.earned === qResult.max;
                return (
                  <div
                    key={q.id}
                    className={`uasa-exam__review-card${
                      isFullyCorrect ? " uasa-exam__review-card--correct" : " uasa-exam__review-card--wrong"
                    }`}
                  >
                    <div className="uasa-exam__review-card-head">
                      <span className="uasa-exam__review-card-id">
                        {q.id} {q.isKbat && <span className="uasa-exam__kbat-tag">KBAT</span>}
                      </span>
                      <span className="uasa-exam__review-card-marks">
                        {qResult.earned}/{qResult.max} markah
                      </span>
                    </div>
                    <span className="uasa-exam__review-card-topic">{q.topic}</span>

                    {section.type === "mcq" ? (
                      <>
                        <p className="uasa-exam__review-card-prompt">{q.prompt}</p>
                        <p className="uasa-exam__review-card-answer">
                          Jawapan kamu: <strong>{answers[q.id] ?? "(tidak dijawab)"}</strong> · Jawapan betul:{" "}
                          <strong>{q.answer}</strong>
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="uasa-exam__review-card-prompt">{q.context}</p>
                        {q.parts.map((p) => {
                          const key = `${q.id}${p.label}`;
                          return (
                            <p key={key} className="uasa-exam__review-card-answer">
                              {p.label} {p.prompt} — Jawapan kamu:{" "}
                              <strong>{answers[key] || "(tidak dijawab)"}</strong> · Jawapan betul:{" "}
                              <strong>{p.answer}</strong>
                            </p>
                          );
                        })}
                        <div className="uasa-exam__review-card-solution">
                          <span className="uasa-exam__review-card-solution-label">Penyelesaian</span>
                          <ol>
                            {q.solution.map((line, i) => (
                              <li key={i}>{line}</li>
                            ))}
                          </ol>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <button type="button" className="uasa-exam__cta" onClick={() => onFinish?.(result)}>
          Selesai
        </button>
      </div>
    );
  }

  // stage === "exam"
  return (
    <div className="uasa-exam">
      <div className="uasa-exam__topbar">
        <span className={`uasa-exam__timer${secondsLeft <= 300 ? " uasa-exam__timer--low" : ""}`}>
          ⏱ {formatClock(secondsLeft)}
        </span>
        <span className="uasa-exam__answered">
          {answeredCount}/{totalItems} dijawab
        </span>
      </div>

      <div className="uasa-exam__palette" aria-label="Navigasi soalan">
        {flat.map(({ section, question }, i) => {
          const done =
            section.type === "mcq"
              ? answers[question.id] != null
              : question.parts.every((p) => (answers[`${question.id}${p.label}`] ?? "").trim() !== "");
          return (
            <button
              key={question.id}
              type="button"
              className={`uasa-exam__palette-dot${i === index ? " uasa-exam__palette-dot--current" : ""}${
                done ? " uasa-exam__palette-dot--done" : ""
              }`}
              onClick={() => setIndex(i)}
              title={question.id}
            >
              {question.id}
            </button>
          );
        })}
      </div>

      {showSectionBanner && (
        <div className="uasa-exam__section-banner">
          <span className="uasa-exam__section-banner-key">{current.section.label}</span>
          <span className="uasa-exam__section-banner-instruction">{current.section.instruction}</span>
        </div>
      )}

      <section className="uasa-exam__card">
        <div className="uasa-exam__card-head">
          <span className="uasa-exam__card-id">{current.question.id}</span>
          <span className="uasa-exam__card-topic">{current.question.topic}</span>
          {current.question.isKbat && <span className="uasa-exam__kbat-tag">KBAT</span>}
        </div>

        {current.section.type === "mcq" ? (
          <>
            <p className="uasa-exam__card-prompt">{current.question.prompt}</p>
            <div className="uasa-exam__choices">
              {current.question.choices.map((choice) => (
                <button
                  key={choice}
                  type="button"
                  className={`uasa-exam__choice${
                    answers[current.question.id] === choice ? " uasa-exam__choice--selected" : ""
                  }`}
                  onClick={() => setMcqAnswer(current.question.id, choice)}
                >
                  {choice}
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <p className="uasa-exam__card-prompt">{current.question.context}</p>
            <div className="uasa-exam__parts">
              {current.question.parts.map((p) => {
                const key = `${current.question.id}${p.label}`;
                return (
                  <div key={key} className="uasa-exam__part">
                    <p className="uasa-exam__part-prompt">
                      <span className="uasa-exam__part-label">{p.label}</span> {p.prompt}
                    </p>
                    <input
                      type="text"
                      className="uasa-exam__part-input"
                      value={answers[key] ?? ""}
                      onChange={(e) => setPartAnswer(current.question.id, p.label, e.target.value)}
                      placeholder="Taip jawapan kamu…"
                    />
                  </div>
                );
              })}
            </div>
          </>
        )}
      </section>

      <div className="uasa-exam__nav">
        <button
          type="button"
          className="uasa-exam__nav-btn"
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={isFirst}
        >
          ← Sebelum
        </button>
        {isLast ? (
          <button type="button" className="uasa-exam__cta uasa-exam__cta--submit" onClick={handleSubmit}>
            Hantar Jawapan
          </button>
        ) : (
          <button type="button" className="uasa-exam__nav-btn uasa-exam__nav-btn--primary" onClick={() => setIndex((i) => i + 1)}>
            Seterusnya →
          </button>
        )}
      </div>

      {!isLast && (
        <button type="button" className="uasa-exam__submit-link" onClick={handleSubmit}>
          Hantar Jawapan Sekarang
        </button>
      )}
    </div>
  );
}
