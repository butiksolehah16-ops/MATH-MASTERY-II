import { useEffect, useState } from "react";
import "./ChordBisectorExplorer.css";

function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy - r * Math.sin(rad) };
}

const STEP_LABELS = ["Lukis perentas AB", "Lukis serenjang dari pusat O ke AB", "Tunjuk AM = MB"];

// Visual sifat simetri perentas — lukis perentas AB, kemudian lukis
// serenjang dari pusat O ke perentas tersebut, dan tunjuk yang serenjang
// itu membahagi dua sama panjang perentas (AM = MB).
export default function ChordBisectorExplorer({ onFinished }) {
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

  const cx = 110;
  const cy = 110;
  const r = 80;
  const A = polarToCartesian(cx, cy, r, 40);
  const B = polarToCartesian(cx, cy, r, 150);
  const M = { x: (A.x + B.x) / 2, y: (A.y + B.y) / 2 };

  return (
    <div className="chord-bisector">
      <svg viewBox="0 0 220 220" className="chord-bisector__svg">
        <circle cx={cx} cy={cy} r={r} className="chord-bisector__outline" />
        <circle cx={cx} cy={cy} r="3" className="chord-bisector__center" />
        <text x={cx - 14} y={cy - 8} className="chord-bisector__label">
          O
        </text>
        {step >= 1 && (
          <>
            <line x1={A.x} y1={A.y} x2={B.x} y2={B.y} className="chord-bisector__chord" />
            <text x={A.x - 14} y={A.y - 2} className="chord-bisector__label">
              A
            </text>
            <text x={B.x + 6} y={B.y - 2} className="chord-bisector__label">
              B
            </text>
          </>
        )}
        {step >= 2 && (
          <>
            <line x1={cx} y1={cy} x2={M.x} y2={M.y} className="chord-bisector__perp" />
            <circle cx={M.x} cy={M.y} r="3" className="chord-bisector__midpoint" />
            <text x={M.x + 6} y={M.y + 14} className="chord-bisector__label">
              M
            </text>
          </>
        )}
        {step >= 3 && (
          <>
            <text x={(A.x + M.x) / 2 - 4} y={(A.y + M.y) / 2 - 8} className="chord-bisector__tick">
              ✓
            </text>
            <text x={(M.x + B.x) / 2 - 4} y={(M.y + B.y) / 2 - 10} className="chord-bisector__tick">
              ✓
            </text>
          </>
        )}
      </svg>
      <div className="chord-bisector__value">{step > 0 ? STEP_LABELS[step - 1] : "—"}</div>
      <div className="chord-bisector__controls">
        <button type="button" className="chord-bisector__step-btn" onClick={handleClick} disabled={done}>
          {done ? "Selesai" : STEP_LABELS[step]}
        </button>
        <button
          type="button"
          className="chord-bisector__reset-btn"
          onClick={() => setStep(0)}
          disabled={step === 0}
        >
          Ulang semula
        </button>
      </div>
      {done && (
        <p className="chord-bisector__result">
          Sampai! AM = MB — serenjang dari pusat membahagi dua sama panjang perentas.
        </p>
      )}
    </div>
  );
}
