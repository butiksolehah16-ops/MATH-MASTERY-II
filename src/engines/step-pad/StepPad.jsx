import { useMemo, useState } from "react";
import { shuffleArray, normalizeAnswer } from "../shared/shuffle.js";
import "./StepPad.css";

// Step-Pad Engine — latihan berpandu step-by-step (spec ms. 48):
// soalan dipecah kepada langkah kerja, SETIAP langkah disahkan betul/salah
// (bukan jawapan akhir sahaja), butang Bantuan bagi hint per-langkah, dan
// langkah salah minta semak semula langkah TU SAHAJA (bukan seluruh soalan).
//
// Setiap langkah boleh jenis "choice" (pilihan) atau "input" (taip jawapan
// sendiri) — campuran kedua-dua jenis elak pelajar sekadar teka kedudukan
// pilihan tanpa faham konsep.
//
// `onStepMistake(stepIndex, wrongAttempt)` didedahkan supaya Misconception
// Tracker (spec ms. 56-58) boleh sambung terus tanpa ubah engine ini.
// `stepMistakeHistory` (optional, array selari dengan `content.steps`) ialah
// bilangan tersasar dari SESI-SESI LEPAS (bukan sesi semasa) — bila diberi,
// dipaparkan sebagai amaran supaya pelajar sedar langkah mana perlu fokus
// semasa ulangkaji/remedial, memacu remedial yang bersasar (bukan generik).
export default function StepPad({ content, onComplete, onStepMistake, stepMistakeHistory }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [hintVisible, setHintVisible] = useState(false);
  const [mistakeCounts, setMistakeCounts] = useState(() => content.steps.map(() => 0));

  const step = content.steps[stepIndex];
  const totalSteps = content.steps.length;
  const isLastStep = stepIndex === totalSteps - 1;
  const isInputStep = step.type === "input";

  const shuffledChoices = useMemo(
    () => (isInputStep ? [] : shuffleArray(step.choices)),
    [stepIndex, isInputStep, step.choices]
  );

  const isCorrect =
    selected !== null &&
    (isInputStep ? normalizeAnswer(selected) === normalizeAnswer(step.answer) : selected === step.answer);

  const registerMistake = (attempt) => {
    setMistakeCounts((counts) => {
      const next = [...counts];
      next[stepIndex] += 1;
      return next;
    });
    onStepMistake?.(stepIndex, attempt);
  };

  const handleChoice = (choice) => {
    const isNewAttempt = choice !== selected;
    setSelected(choice);
    if (choice !== step.answer && isNewAttempt) registerMistake(choice);
  };

  const handleSubmitInput = () => {
    const value = inputValue.trim();
    if (!value) return;
    const isNewAttempt = value !== selected;
    setSelected(value);
    if (normalizeAnswer(value) !== normalizeAnswer(step.answer) && isNewAttempt) registerMistake(value);
  };

  const handleContinue = () => {
    if (!isCorrect) return;
    if (isLastStep) {
      onComplete?.({ mistakeCounts });
      return;
    }
    setStepIndex((i) => i + 1);
    setSelected(null);
    setInputValue("");
    setHintVisible(false);
  };

  return (
    <div className="step-pad" data-tour="step-pad-card">
      <div className="step-pad__problem">
        <span className="step-pad__problem-label">Soalan</span>
        <p className="step-pad__problem-text">{content.problem}</p>
      </div>

      <ol className="step-pad__dots" aria-label="Kemajuan langkah">
        {content.steps.map((_, i) => (
          <li
            key={i}
            className={`step-pad__dot${i === stepIndex ? " step-pad__dot--current" : ""}${
              i < stepIndex ? " step-pad__dot--done" : ""
            }`}
          />
        ))}
      </ol>

      <section className="step-pad__card">
        <span className="step-pad__eyebrow">
          Langkah {stepIndex + 1} / {totalSteps}
        </span>
        {stepMistakeHistory?.[stepIndex] > 0 && (
          <p className="step-pad__weak-flag">
            ⚠ Kamu pernah tersasar {stepMistakeHistory[stepIndex]}x di langkah ini sebelum ini — fokus betul-betul.
          </p>
        )}
        <p className="step-pad__prompt">{step.prompt}</p>

        {isInputStep ? (
          <div className="step-pad__input-row">
            <input
              type="text"
              inputMode="text"
              className={`step-pad__input${
                selected !== null ? (isCorrect ? " step-pad__input--correct" : " step-pad__input--wrong") : ""
              }`}
              value={isCorrect ? selected : inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isCorrect}
              placeholder="Taip jawapan kamu…"
              onKeyDown={(e) => e.key === "Enter" && handleSubmitInput()}
            />
            <button
              type="button"
              className="step-pad__input-submit"
              onClick={handleSubmitInput}
              disabled={isCorrect || inputValue.trim() === ""}
            >
              Semak
            </button>
          </div>
        ) : (
          <div className="step-pad__choices">
            {shuffledChoices.map((choice) => {
              const isSelected = selected === choice;
              const showAsCorrect = isSelected && choice === step.answer;
              const showAsWrong = isSelected && choice !== step.answer;
              return (
                <button
                  key={choice}
                  type="button"
                  className={`step-pad__choice${showAsCorrect ? " step-pad__choice--correct" : ""}${
                    showAsWrong ? " step-pad__choice--wrong" : ""
                  }`}
                  onClick={() => handleChoice(choice)}
                >
                  {choice}
                </button>
              );
            })}
          </div>
        )}

        {selected && !isCorrect && (
          <p className="step-pad__feedback step-pad__feedback--wrong">
            Belum tepat — semak semula langkah ini sahaja.
          </p>
        )}
        {isCorrect && <p className="step-pad__feedback step-pad__feedback--correct">Betul! Langkah ini sahkan.</p>}

        <div className="step-pad__helpers">
          <button
            type="button"
            className="step-pad__hint-btn"
            onClick={() => setHintVisible((v) => !v)}
            aria-expanded={hintVisible}
          >
            {hintVisible ? "Sembunyikan Bantuan" : "Bantuan"}
          </button>
          {mistakeCounts[stepIndex] > 0 && (
            <span className="step-pad__mistake-count">{mistakeCounts[stepIndex]}x tersasar di langkah ini</span>
          )}
        </div>

        {hintVisible && <p className="step-pad__hint">{step.hint}</p>}
      </section>

      <button type="button" className="step-pad__cta" onClick={handleContinue} disabled={!isCorrect}>
        {isLastStep ? "Selesai Pad → Latihan Sendiri" : "Langkah Seterusnya"}
      </button>
    </div>
  );
}
