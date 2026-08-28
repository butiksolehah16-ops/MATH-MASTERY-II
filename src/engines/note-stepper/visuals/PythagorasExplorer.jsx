import { useEffect, useState } from "react";
import "./PythagorasExplorer.css";

// Visual Teorem Pythagoras — segi tiga bersudut tegak dengan sisi a, b, c
// dilabel, dedah luas kuasa dua setiap sisi satu demi satu (a², b², c²) dan
// sahkan a² + b² = c².
export default function PythagorasExplorer({ a, b, c, onFinished }) {
  const [revealed, setRevealed] = useState(0);
  const done = revealed >= 3;
  const values = [a * a, b * b, c * c];
  const labels = [`${a}²`, `${b}²`, `${c}²`];

  useEffect(() => {
    if (done) onFinished?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  const handleClick = () => {
    if (done) return;
    setRevealed((r) => Math.min(r + 1, 3));
  };

  return (
    <div className="pythagoras">
      <svg viewBox="0 0 220 170" className="pythagoras__svg">
        <polygon points="40,140 180,140 40,40" className="pythagoras__triangle" />
        <rect x="40" y="128" width="12" height="12" className="pythagoras__right-angle" />
        <text x="24" y="95" textAnchor="middle" className="pythagoras__side-label">
          {a}
        </text>
        <text x="110" y="158" textAnchor="middle" className="pythagoras__side-label">
          {b}
        </text>
        <text x="122" y="80" textAnchor="middle" className="pythagoras__side-label">
          {c}
        </text>
      </svg>
      <div className="pythagoras__areas">
        {labels.map((label, i) => (
          <div
            key={label}
            className={`pythagoras__area-card${i < revealed ? " pythagoras__area-card--active" : ""}`}
          >
            <span className="pythagoras__area-label">{label}</span>
            <span className="pythagoras__area-value">{i < revealed ? values[i] : "?"}</span>
          </div>
        ))}
      </div>
      <div className="pythagoras__controls">
        <button type="button" className="pythagoras__step-btn" onClick={handleClick} disabled={done}>
          {done ? "Selesai" : `Dedah luas seterusnya (${revealed}/3)`}
        </button>
        <button
          type="button"
          className="pythagoras__reset-btn"
          onClick={() => setRevealed(0)}
          disabled={revealed === 0}
        >
          Ulang semula
        </button>
      </div>
      {done && (
        <p className="pythagoras__result">
          Sampai! {a}² + {b}² = {values[0]} + {values[1]} = {values[0] + values[1]} = {c}²
        </p>
      )}
    </div>
  );
}
