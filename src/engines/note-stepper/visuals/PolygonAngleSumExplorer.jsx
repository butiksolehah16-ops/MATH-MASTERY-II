import { useEffect, useState } from "react";
import "./PolygonAngleSumExplorer.css";

const SHAPES = {
  triangle: {
    points: [
      [110, 20],
      [20, 180],
      [200, 180],
    ],
  },
  quad: {
    points: [
      [50, 30],
      [170, 30],
      [200, 180],
      [20, 180],
    ],
  },
};

// Visual jumlah sudut pedalaman poligon — dedah sudut satu demi satu (segi
// tiga atau sisi empat) dan jumlahkan sehingga semua sudut didedahkan.
export default function PolygonAngleSumExplorer({ shape = "triangle", angles, onFinished }) {
  const [revealed, setRevealed] = useState(0);
  const config = SHAPES[shape] ?? SHAPES.triangle;
  const done = revealed >= angles.length;
  const sum = angles.slice(0, revealed).reduce((a, b) => a + b, 0);

  useEffect(() => {
    if (done) onFinished?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  const handleClick = () => {
    if (done) return;
    setRevealed((r) => Math.min(r + 1, angles.length));
  };

  const points = config.points.map((p) => p.join(",")).join(" ");

  return (
    <div className="polygon-angle-sum">
      <svg viewBox="0 0 220 210" className="polygon-angle-sum__svg">
        <polygon points={points} className="polygon-angle-sum__shape" />
        {config.points.map((p, i) => (
          <text
            key={i}
            x={p[0]}
            y={p[1] < 100 ? p[1] - 8 : p[1] + 20}
            textAnchor="middle"
            className="polygon-angle-sum__label"
          >
            {i < revealed ? `${angles[i]}°` : "?"}
          </text>
        ))}
      </svg>
      <div className="polygon-angle-sum__value">Jumlah setakat ini: {sum}°</div>
      <div className="polygon-angle-sum__controls">
        <button type="button" className="polygon-angle-sum__step-btn" onClick={handleClick} disabled={done}>
          {done ? "Selesai" : `Dedah sudut seterusnya (${revealed}/${angles.length})`}
        </button>
        <button
          type="button"
          className="polygon-angle-sum__reset-btn"
          onClick={() => setRevealed(0)}
          disabled={revealed === 0}
        >
          Ulang semula
        </button>
      </div>
      {done && <p className="polygon-angle-sum__result">Sampai! Jumlah sudut pedalaman = {sum}°</p>}
    </div>
  );
}
