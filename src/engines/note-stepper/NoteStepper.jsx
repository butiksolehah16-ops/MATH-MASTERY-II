import { useMemo, useState } from "react";
import { getExplorationVisual } from "./visuals/registry.js";
import { shuffleArray } from "../shared/shuffle.js";
import "./NoteStepper.css";

const SUB_PHASES = ["hook", "exploration", "insight", "formula", "example", "check"];
const SUB_PHASE_LABEL = {
  hook: "Situasi",
  exploration: "Eksplorasi",
  insight: "Insight",
  formula: "Formula",
  example: "Contoh",
  check: "Check Pantas",
};

function getMentorLine(content, subPhase) {
  if (subPhase === "check") return content.checkQuestion?.mentorLine;
  return content[subPhase]?.mentorLine;
}

// Note Stepper Engine — orkestrat aliran "cikgu terangkan" (spec ms. 40-46):
// hook -> eksplorasi interaktif -> insight -> formula rasmi -> contoh -> check pantas.
// Engine ini generik; kandungan & jenis visual dibekalkan melalui prop `content`
// (lihat src/content/) supaya tambah topik baharu tak perlu ubah kod engine.
export default function NoteStepper({ content, onComplete }) {
  const [subIndex, setSubIndex] = useState(0);
  const [explorationDone, setExplorationDone] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null);

  const subPhase = SUB_PHASES[subIndex];
  const isFirstSub = subIndex === 0;
  const isLastSub = subIndex === SUB_PHASES.length - 1;
  // VISUAL_REGISTRY (registry.js) is a static module-level lookup, so this
  // always returns the same component reference for a given visualType —
  // the linter's "created during render" warning (at the JSX usage below)
  // is a false positive here.
  const ExplorationVisual = useMemo(
    () => getExplorationVisual(content.visualType),
    [content.visualType]
  );

  const isCorrect = selectedChoice !== null && selectedChoice === content.checkQuestion?.answer;
  const shuffledCheckChoices = useMemo(
    () => shuffleArray(content.checkQuestion?.choices ?? []),
    [content.checkQuestion]
  );

  const canContinue =
    (subPhase !== "exploration" || explorationDone) && (subPhase !== "check" || isCorrect);

  const handleContinue = () => {
    if (!canContinue) return;
    if (isLastSub) {
      onComplete?.();
      return;
    }
    setSubIndex((i) => i + 1);
  };

  const handleBack = () => {
    if (isFirstSub) return;
    setSubIndex((i) => i - 1);
  };

  return (
    <div className="note-stepper">
      <ol className="note-stepper__dots" aria-label="Kemajuan dalam Nota Interaktif">
        {SUB_PHASES.map((key, i) => (
          <li
            key={key}
            className={`note-stepper__dot${i === subIndex ? " note-stepper__dot--current" : ""}${
              i < subIndex ? " note-stepper__dot--done" : ""
            }`}
            title={SUB_PHASE_LABEL[key]}
          />
        ))}
      </ol>

      <div className="note-stepper__mentor">
        <div className="note-stepper__mentor-avatar" aria-hidden="true">
          🧑‍🏫
        </div>
        <div className="note-stepper__mentor-bubble">
          <p className="note-stepper__mentor-line">{getMentorLine(content, subPhase)}</p>
        </div>
      </div>

      <section className="note-stepper__card">
        <span className="note-stepper__eyebrow">{SUB_PHASE_LABEL[subPhase]}</span>

        {subPhase === "hook" && (
          <>
            <h3 className="note-stepper__title">{content.hook.title}</h3>
            <p className="note-stepper__body">{content.hook.body}</p>
          </>
        )}

        {subPhase === "exploration" && (
          <>
            <p className="note-stepper__body">{content.exploration.prompt}</p>
            {/* eslint-disable-next-line react/static-components -- ExplorationVisual is memoized off a static registry lookup, not a fresh component per render */}
            <ExplorationVisual
              visualType={content.visualType}
              {...content.exploration}
              onFinished={() => setExplorationDone(true)}
            />
          </>
        )}

        {subPhase === "insight" && (
          <>
            <h3 className="note-stepper__title">{content.insight.title}</h3>
            <p className="note-stepper__body">{content.insight.body}</p>
          </>
        )}

        {subPhase === "formula" && (
          <>
            <h3 className="note-stepper__title">{content.formula.title}</h3>
            <p className="note-stepper__expression">{content.formula.expression}</p>
            <p className="note-stepper__body">{content.formula.body}</p>
          </>
        )}

        {subPhase === "example" && (
          <>
            <h3 className="note-stepper__title">{content.example.title}</h3>
            <p className="note-stepper__problem">{content.example.problem}</p>
            <ol className="note-stepper__steps">
              {content.example.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </>
        )}

        {subPhase === "check" && (
          <>
            <p className="note-stepper__problem">{content.checkQuestion.prompt}</p>
            <div className="note-stepper__choices">
              {shuffledCheckChoices.map((choice) => {
                const isSelected = selectedChoice === choice;
                const showAsCorrect = isSelected && choice === content.checkQuestion.answer;
                const showAsWrong = isSelected && choice !== content.checkQuestion.answer;
                return (
                  <button
                    key={choice}
                    type="button"
                    className={`note-stepper__choice${showAsCorrect ? " note-stepper__choice--correct" : ""}${
                      showAsWrong ? " note-stepper__choice--wrong" : ""
                    }`}
                    onClick={() => setSelectedChoice(choice)}
                  >
                    {choice}
                  </button>
                );
              })}
            </div>
            {selectedChoice && (
              <p
                className={`note-stepper__feedback${
                  isCorrect ? " note-stepper__feedback--correct" : " note-stepper__feedback--wrong"
                }`}
              >
                {isCorrect ? content.checkQuestion.feedbackCorrect : content.checkQuestion.feedbackIncorrect}
              </p>
            )}
          </>
        )}
      </section>

      <div className="note-stepper__nav">
        {!isFirstSub && (
          <button type="button" className="note-stepper__back" onClick={handleBack}>
            ← Kembali
          </button>
        )}
        <button type="button" className="note-stepper__cta" onClick={handleContinue} disabled={!canContinue}>
          {isLastSub ? "Selesai Nota → Diagnostik" : "Teruskan"}
        </button>
      </div>
    </div>
  );
}
