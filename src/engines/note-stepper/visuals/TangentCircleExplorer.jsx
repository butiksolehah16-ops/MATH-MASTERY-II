import { useEffect, useState } from "react";
import "./TangentCircleExplorer.css";

function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy - r * Math.sin(rad) };
}

const STEP_LABELS = ["Lukis jejari OP ke titik P", "Lukis tangen pada titik P", "Tunjuk OP berserenjang dengan tangen"];

// Visual tangen kepada bulatan — lukis jejari OP ke titik sentuhan P,
// kemudian lukis tangen pada P, dan tunjuk jejari SENTIASA berserenjang
// dengan tangen pada titik sentuhan.
export default function TangentCircleExplorer({ onFinished }) {
  const [step, setStep] = useState(0);
  const done = step >= STEP_LABELS.length;

  useEffect(() => {
    if (done) onFinished?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  const handleClick = () => {
    if (done) return;
    setStep((s) => Math.min(s + 1, STEP_LABELS.length));
  };

  const cx = 100;
  const cy = 120;
  const r = 70;
  const P = polarToCartesian(cx, cy, r, 30);
  // Tangen pada P berserenjang dengan OP: arah tangen = arah OP + 90°.
  const tangentDir = polarToCartesian(cx, cy, 1, 30 + 90);
  const tdx = tangentDir.x - cx;
  const tdy = tangentDir.y - cy;
  const tangentA = { x: P.x - tdx * 55, y: P.y - tdy * 55 };
  const tangentB = { x: P.x + tdx * 55, y: P.y + tdy * 55 };

  return (
    <div className="tangent-circle">
      <svg viewBox="0 0 220 220" className="tangent-circle__svg">
        <circle cx={cx} cy={cy} r={r} className="tangent-circle__outline" />
        <circle cx={cx} cy={cy} r="3" className="tangent-circle__center" />
        <text x={cx - 14} y={cy - 8} className="tangent-circle__label">
          O
        </text>
        {step >= 1 && (
          <>
            <line x1={cx} y1={cy} x2={P.x} y2={P.y} className="tangent-circle__radius" />
            <circle cx={P.x} cy={P.y} r="3" className="tangent-circle__point" />
            <text x={P.x + 8} y={P.y - 4} className="tangent-circle__label">
              P
            </text>
          </>
        )}
        {step >= 2 && (
          <line x1={tangentA.x} y1={tangentA.y} x2={tangentB.x} y2={tangentB.y} className="tangent-circle__tangent" />
        )}
        {step >= 3 && (
          <rect
            x={P.x - 8}
            y={P.y - 8}
            width="16"
            height="16"
            className="tangent-circle__right-angle"
            transform={`rotate(${30} ${P.x} ${P.y})`}
          />
        )}
      </svg>
      <div className="tangent-circle__value">{step > 0 ? STEP_LABELS[step - 1] : "—"}</div>
      <div className="tangent-circle__controls">
        <button type="button" className="tangent-circle__step-btn" onClick={handleClick} disabled={done}>
          {done ? "Selesai" : STEP_LABELS[step]}
        </button>
        <button
          type="button"
          className="tangent-circle__reset-btn"
          onClick={() => setStep(0)}
          disabled={step === 0}
        >
          Ulang semula
        </button>
      </div>
      {done && (
        <p className="tangent-circle__result">
          Sampai! Jejari OP SENTIASA berserenjang (90°) dengan tangen pada titik sentuhan P.
        </p>
      )}
    </div>
  );
}
