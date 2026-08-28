import { useEffect, useMemo, useState } from "react";
import "./FunctionGraphExplorer.css";

// Visual graf fungsi — dedah titik demi titik daripada jadual nilai atas
// grid, kemudian sambungkan dengan garis/lengkung untuk tunjuk bentuk graf
// fungsi (linear = garis lurus, bukan linear = lengkung).
const SIZE = 260;
const MARGIN = 30;

export default function FunctionGraphExplorer({ points, xMax, yMax, xStep = 1, yStep = 1, curveType = "line", onFinished }) {
  const [revealed, setRevealed] = useState(0);
  const total = points.length;
  const done = revealed >= total;

  const toSvg = (x, y) => ({
    sx: MARGIN + (x / xMax) * (SIZE - 2 * MARGIN),
    sy: SIZE - MARGIN - (y / yMax) * (SIZE - 2 * MARGIN),
  });

  const xTicks = useMemo(() => {
    const arr = [];
    for (let n = 0; n <= xMax; n += xStep) arr.push(n);
    return arr;
  }, [xMax, xStep]);
  const yTicks = useMemo(() => {
    const arr = [];
    for (let n = 0; n <= yMax; n += yStep) arr.push(n);
    return arr;
  }, [yMax, yStep]);

  useEffect(() => {
    if (done) onFinished?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  const handleClick = () => {
    if (done) return;
    setRevealed((r) => Math.min(r + 1, total));
  };

  const visiblePoints = points.slice(0, revealed);
  const polylinePoints = visiblePoints.map((p) => {
    const { sx, sy } = toSvg(p.x, p.y);
    return `${sx},${sy}`;
  }).join(" ");

  return (
    <div className="fn-graph">
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="fn-graph__svg">
        {xTicks.map((n) => (
          <line
            key={`v-${n}`}
            x1={toSvg(n, 0).sx}
            y1={toSvg(0, 0).sy}
            x2={toSvg(n, 0).sx}
            y2={toSvg(0, yMax).sy}
            className="fn-graph__grid"
          />
        ))}
        {yTicks.map((n) => (
          <line
            key={`h-${n}`}
            x1={toSvg(0, 0).sx}
            y1={toSvg(0, n).sy}
            x2={toSvg(xMax, 0).sx}
            y2={toSvg(0, n).sy}
            className="fn-graph__grid"
          />
        ))}
        <line x1={toSvg(0, 0).sx} y1={toSvg(0, 0).sy} x2={toSvg(xMax, 0).sx} y2={toSvg(0, 0).sy} className="fn-graph__axis" />
        <line x1={toSvg(0, 0).sx} y1={toSvg(0, 0).sy} x2={toSvg(0, 0).sx} y2={toSvg(0, yMax).sy} className="fn-graph__axis" />

        {revealed >= 2 && <polyline points={polylinePoints} className="fn-graph__curve" />}

        {visiblePoints.map((p) => {
          const { sx, sy } = toSvg(p.x, p.y);
          return (
            <g key={`${p.x}-${p.y}`}>
              <circle cx={sx} cy={sy} r="4.5" className="fn-graph__point" />
              <text x={sx} y={sy - 10} textAnchor="middle" className="fn-graph__point-label">
                ({p.x}, {p.y})
              </text>
            </g>
          );
        })}
      </svg>

      <div className="fn-graph__controls">
        <button type="button" className="fn-graph__step-btn" onClick={handleClick} disabled={done}>
          {done ? "Selesai" : `Tambah titik seterusnya (${revealed}/${total})`}
        </button>
        <button type="button" className="fn-graph__reset-btn" onClick={() => setRevealed(0)} disabled={revealed === 0}>
          Ulang semula
        </button>
      </div>

      {done && (
        <p className="fn-graph__result">
          {curveType === "line"
            ? "Sampai! Titik-titik ni membentuk satu GARIS LURUS — inilah graf fungsi linear."
            : "Sampai! Titik-titik ni membentuk satu LENGKUNG — inilah graf fungsi bukan linear."}
        </p>
      )}
    </div>
  );
}
