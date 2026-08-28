import { useEffect, useState } from "react";
import "./PerimeterWalkExplorer.css";

function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy - r * Math.sin(rad) };
}

// Visual perimeter — "berjalan" keliling bentuk, dedah panjang setiap sisi
// satu demi satu dan jumlahkan sehingga kembali ke titik permulaan.
export default function PerimeterWalkExplorer({ sideLengths, unit = "cm", onFinished }) {
  const [revealed, setRevealed] = useState(0);
  const n = sideLengths.length;
  const done = revealed >= n;
  const total = sideLengths.slice(0, revealed).reduce((a, b) => a + b, 0);

  useEffect(() => {
    if (done) onFinished?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  const handleClick = () => {
    if (done) return;
    setRevealed((r) => Math.min(r + 1, n));
  };

  const cx = 110;
  const cy = 105;
  const r = 80;
  const vertices = Array.from({ length: n }, (_, i) => {
    const angleDeg = 90 + (360 / n) * i;
    return polarToCartesian(cx, cy, r, angleDeg);
  });

  return (
    <div className="perimeter-walk">
      <svg viewBox="0 0 220 210" className="perimeter-walk__svg">
        <polygon points={vertices.map((v) => `${v.x},${v.y}`).join(" ")} className="perimeter-walk__shape" />
        {vertices.map((v, i) => {
          const next = vertices[(i + 1) % n];
          const mx = (v.x + next.x) / 2;
          const my = (v.y + next.y) / 2;
          const active = i < revealed;
          return (
            <g key={i}>
              <line
                x1={v.x}
                y1={v.y}
                x2={next.x}
                y2={next.y}
                className={`perimeter-walk__side${active ? " perimeter-walk__side--active" : ""}`}
              />
              {active && (
                <text x={mx} y={my} textAnchor="middle" className="perimeter-walk__label">
                  {sideLengths[i]}
                </text>
              )}
            </g>
          );
        })}
      </svg>
      <div className="perimeter-walk__value">
        Jumlah setakat ini: {total} {unit}
      </div>
      <div className="perimeter-walk__controls">
        <button type="button" className="perimeter-walk__step-btn" onClick={handleClick} disabled={done}>
          {done ? "Selesai" : `Dedah sisi seterusnya (${revealed}/${n})`}
        </button>
        <button
          type="button"
          className="perimeter-walk__reset-btn"
          onClick={() => setRevealed(0)}
          disabled={revealed === 0}
        >
          Ulang semula
        </button>
      </div>
      {done && (
        <p className="perimeter-walk__result">
          Sampai! Perimeter = {total} {unit}
        </p>
      )}
    </div>
  );
}
