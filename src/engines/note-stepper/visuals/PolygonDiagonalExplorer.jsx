import { useEffect, useState } from "react";
import "./PolygonDiagonalExplorer.css";

function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy - r * Math.sin(rad) };
}

// Visual pepenjuru poligon — lukis pepenjuru dari SATU bucu sehingga capai
// jumlah maksimum (n - 3), menunjukkan asal usul formula bilangan pepenjuru.
export default function PolygonDiagonalExplorer({ sides, onFinished }) {
  const [drawn, setDrawn] = useState(0);
  const maxDiagonals = sides - 3;
  const done = drawn >= maxDiagonals;

  useEffect(() => {
    if (done) onFinished?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  const handleClick = () => {
    if (done) return;
    setDrawn((d) => Math.min(d + 1, maxDiagonals));
  };

  const cx = 110;
  const cy = 105;
  const r = 85;
  const vertices = Array.from({ length: sides }, (_, i) => {
    const angleDeg = 90 + (360 / sides) * i;
    return polarToCartesian(cx, cy, r, angleDeg);
  });

  // bucu rujukan ialah bucu 0; pepenjuru dilukis ke bucu 2, 3, ... (elak jiran)
  const targetIndices = [];
  for (let i = 2; i < sides - 1; i++) targetIndices.push(i);

  return (
    <div className="polygon-diagonal">
      <svg viewBox="0 0 220 210" className="polygon-diagonal__svg">
        <polygon points={vertices.map((v) => `${v.x},${v.y}`).join(" ")} className="polygon-diagonal__shape" />
        {targetIndices.slice(0, drawn).map((idx, i) => (
          <line
            key={i}
            x1={vertices[0].x}
            y1={vertices[0].y}
            x2={vertices[idx].x}
            y2={vertices[idx].y}
            className="polygon-diagonal__line"
          />
        ))}
        {vertices.map((v, i) => (
          <circle key={i} cx={v.x} cy={v.y} r="3.5" className="polygon-diagonal__vertex" />
        ))}
      </svg>
      <div className="polygon-diagonal__value">{drawn} pepenjuru</div>
      <div className="polygon-diagonal__controls">
        <button type="button" className="polygon-diagonal__step-btn" onClick={handleClick} disabled={done}>
          {done ? "Selesai" : `Lukis pepenjuru (${drawn}/${maxDiagonals})`}
        </button>
        <button type="button" className="polygon-diagonal__reset-btn" onClick={() => setDrawn(0)} disabled={drawn === 0}>
          Ulang semula
        </button>
      </div>
      {done && (
        <p className="polygon-diagonal__result">
          Sampai! Daripada 1 bucu, poligon {sides} sisi ada {maxDiagonals} pepenjuru.
        </p>
      )}
    </div>
  );
}
