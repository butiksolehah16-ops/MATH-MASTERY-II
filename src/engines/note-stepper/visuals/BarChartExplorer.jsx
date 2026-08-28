import { useEffect, useState } from "react";
import "./BarChartExplorer.css";

// Visual carta palang — dedah setiap palang (kategori) satu demi satu,
// tunjuk kekerapan setiap kategori dan jumlah keseluruhan bertambah.
export default function BarChartExplorer({ categories, values, onFinished }) {
  const [revealed, setRevealed] = useState(0);
  const total = categories.length;
  const done = revealed >= total;
  const maxValue = Math.max(...values);
  const sumSoFar = values.slice(0, revealed).reduce((a, b) => a + b, 0);

  useEffect(() => {
    if (done) onFinished?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  const handleClick = () => {
    if (done) return;
    setRevealed((r) => Math.min(r + 1, total));
  };

  const chartHeight = 130;
  const barWidth = 34;
  const gap = 14;
  const startX = 20;

  return (
    <div className="bar-chart">
      <svg viewBox="0 0 220 190" className="bar-chart__svg">
        <line x1="15" y1="150" x2="210" y2="150" className="bar-chart__axis" />
        {categories.map((cat, i) => {
          const active = i < revealed;
          const h = active ? (values[i] / maxValue) * chartHeight : 0;
          const x = startX + i * (barWidth + gap);
          const y = 150 - h;
          return (
            <g key={cat}>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={h}
                className={`bar-chart__bar${active ? " bar-chart__bar--active" : ""}`}
              />
              {active && (
                <text x={x + barWidth / 2} y={y - 6} textAnchor="middle" className="bar-chart__value">
                  {values[i]}
                </text>
              )}
              <text x={x + barWidth / 2} y="165" textAnchor="middle" className="bar-chart__label">
                {cat}
              </text>
            </g>
          );
        })}
      </svg>
      <div className="bar-chart__value-line">Jumlah setakat ini: {sumSoFar}</div>
      <div className="bar-chart__controls">
        <button type="button" className="bar-chart__step-btn" onClick={handleClick} disabled={done}>
          {done ? "Selesai" : `Tambah palang seterusnya (${revealed}/${total})`}
        </button>
        <button
          type="button"
          className="bar-chart__reset-btn"
          onClick={() => setRevealed(0)}
          disabled={revealed === 0}
        >
          Ulang semula
        </button>
      </div>
      {done && <p className="bar-chart__result">Sampai! Jumlah keseluruhan = {sumSoFar}</p>}
    </div>
  );
}
