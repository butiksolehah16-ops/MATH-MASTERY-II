import { useMemo, useState } from "react";
import { shuffleArray, normalizeAnswer } from "../shared/shuffle.js";
import "./QuestionSet.css";

// Mastery Engine — komponen soalan generik dikongsi oleh Diagnostik, Latihan
// Bersendirian dan Ujian Mastery (spec ms. 47, 49-50). Berbeza dengan Step-Pad:
// setiap soalan di sini berdiri sendiri (bukan satu soalan dipecah langkah),
// tiada hint, dan markah dikira di hujung set untuk tentukan keputusan.
//
// Setiap soalan boleh jenis "choice" (pilihan) atau "input" (taip jawapan
// sendiri) — dua jenis dicampur elak pelajar sekadar teka kedudukan pilihan.
//
// `passThreshold` null = tiada gate (Diagnostik, sekadar maklumat). Angka
// (cth. 0.85) = perlu capai nisbah tu untuk `passed: true` (Ujian Mastery).
export default function QuestionSet({
  content,
  eyebrow,
  passThreshold = null,
  resultLabels,
  onComplete,
}) {
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const [result, setResult] = useState(null); // { correct, total, passed }

  const totalQuestions = content.questions.length;
  const question = content.questions[qIndex];
  const isLast = qIndex === totalQuestions - 1;
  const isInputQuestion = question?.type === "input";

  const shuffledChoices = useMemo(
    () => (isInputQuestion ? [] : shuffleArray(question.choices)),
    [qIndex, isInputQuestion, question]
  );

  const isCorrect =
    selected !== null &&
    (isInputQuestion
      ? normalizeAnswer(selected) === normalizeAnswer(question.answer)
      : selected === question?.answer);

  const handleSelect = (choice) => {
    if (selected !== null) return;
    setSelected(choice);
  };

  const handleSubmitInput = () => {
    const value = inputValue.trim();
    if (!value || selected !== null) return;
    setSelected(value);
  };

  const handleNext = () => {
    const tallied = correctCount + (isCorrect ? 1 : 0);
    if (isLast) {
      const passed = passThreshold == null ? true : tallied / totalQuestions >= passThreshold;
      setResult({ correct: tallied, total: totalQuestions, passed });
      return;
    }
    setCorrectCount(tallied);
    setQIndex((i) => i + 1);
    setSelected(null);
    setInputValue("");
  };

  if (result) {
    const gated = passThreshold != null;
    const label = gated
      ? result.passed
        ? resultLabels?.pass ?? "Kamu dah kuasai!"
        : resultLabels?.fail ?? "Belum cukup — cuba lagi."
      : resultLabels?.neutral ?? "Selesai diagnostik.";
    const ctaLabel = gated
      ? result.passed
        ? resultLabels?.ctaPass ?? "Teruskan"
        : resultLabels?.ctaFail ?? "Cuba Semula"
      : resultLabels?.ctaNeutral ?? "Teruskan";

    return (
      <div className="question-set">
        <section
          className={`question-set__result${
            gated ? (result.passed ? " question-set__result--pass" : " question-set__result--fail") : ""
          }`}
        >
          <span className="question-set__result-score">
            {result.correct}/{result.total} betul
          </span>
          <h3 className="question-set__result-label">{label}</h3>
        </section>
        <button type="button" className="question-set__cta" onClick={() => onComplete?.(result)}>
          {ctaLabel}
        </button>
      </div>
    );
  }

  return (
    <div className="question-set">
      <ol className="question-set__dots" aria-label="Kemajuan soalan">
        {content.questions.map((_, i) => (
          <li
            key={i}
            className={`question-set__dot${i === qIndex ? " question-set__dot--current" : ""}${
              i < qIndex ? " question-set__dot--done" : ""
            }`}
          />
        ))}
      </ol>

      <section className="question-set__card">
        <span className="question-set__eyebrow">
          {eyebrow} · Soalan {qIndex + 1}/{totalQuestions}
        </span>
        <p className="question-set__prompt">{question.prompt}</p>

        {isInputQuestion ? (
          <div className="question-set__input-row">
            <input
              type="text"
              inputMode="text"
              className={`question-set__input${
                selected !== null ? (isCorrect ? " question-set__input--correct" : " question-set__input--wrong") : ""
              }`}
              value={selected ?? inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={selected !== null}
              placeholder="Taip jawapan kamu…"
              onKeyDown={(e) => e.key === "Enter" && handleSubmitInput()}
            />
            <button
              type="button"
              className="question-set__input-submit"
              onClick={handleSubmitInput}
              disabled={selected !== null || inputValue.trim() === ""}
            >
              Semak
            </button>
          </div>
        ) : (
          <div className="question-set__choices">
            {shuffledChoices.map((choice) => {
              const isSelected = selected === choice;
              const showAsCorrect = isSelected && choice === question.answer;
              const showAsWrong = isSelected && choice !== question.answer;
              return (
                <button
                  key={choice}
                  type="button"
                  className={`question-set__choice${showAsCorrect ? " question-set__choice--correct" : ""}${
                    showAsWrong ? " question-set__choice--wrong" : ""
                  }`}
                  onClick={() => handleSelect(choice)}
                  disabled={selected !== null}
                >
                  {choice}
                </button>
              );
            })}
          </div>
        )}

        {selected !== null && (
          <p
            className={`question-set__feedback${
              isCorrect ? " question-set__feedback--correct" : " question-set__feedback--wrong"
            }`}
          >
            {isCorrect ? "Betul!" : `Belum tepat. Jawapan: ${question.answer}`}
          </p>
        )}
      </section>

      <button type="button" className="question-set__cta" onClick={handleNext} disabled={selected === null}>
        {isLast ? "Lihat Keputusan" : "Soalan Seterusnya"}
      </button>
    </div>
  );
}
