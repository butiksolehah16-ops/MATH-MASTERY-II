import { useEffect, useMemo, useState } from "react";
import "./CoordinatePlaneExplorer.css";

// Visual satah Cartes — plot dua titik A dan B pada grid, dan dedah langkah
// demi langkah sama ada (a) jarak antara dua titik melalui segi tiga
// bersudut tegak (dx, dy, jarak), (b) titik tengah antara dua titik
// (min paksi-x, kemudian min paksi-y untuk dapat titik tengah penuh), atau
// (c) kecerunan garis lurus (dx, dy berTANDA, kemudian m = dy/dx).
const GRID_MAX = 10;
const UNIT = 20;
const MARGIN = 20;
const SIZE = MARGIN * 2 + GRID_MAX * UNIT;

function toSvg(x, y) {
  return { sx: MARGIN + x * UNIT, sy: SIZE - MARGIN - y * UNIT };
}

export default function CoordinatePlaneExplorer({ pointA, pointB, mode, onFinished }) {
  const [revealed, setRevealed] = useState(0);
  const totalSteps = mode === "midpoint" ? 2 : 3;
  const done = revealed >= totalSteps;

  const a = toSvg(pointA.x, pointA.y);
  const b = toSvg(pointB.x, pointB.y);
  const corner = toSvg(pointB.x, pointA.y);

  const dx = Math.abs(pointB.x - pointA.x);
  const dy = Math.abs(pointB.y - pointA.y);
  const distance = Math.round(Math.sqrt(dx * dx + dy * dy) * 100) / 100;
  const dxSigned = pointB.x - pointA.x;
  const dySigned = pointB.y - pointA.y;
  const gradient = Math.round((dySigned / dxSigned) * 100) / 100;
  const mx = (pointA.x + pointB.x) / 2;
  const my = (pointA.y + pointB.y) / 2;
  const midPoint = toSvg(mx, my);
  const midOnAxisX = toSvg(mx, 0);
  const midOnAxisY = toSvg(0, my);

  const ticks = useMemo(() => {
    const arr = [];
    for (let n = 0; n <= GRID_MAX; n += 2) arr.push(n);
    return arr;
  }, []);

  useEffect(() => {
    if (done) onFinished?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  const handleClick = () => {
    if (done) return;
    setRevealed((r) => Math.min(r + 1, totalSteps));
  };

  const stepLabel =
    mode === "midpoint"
      ? ["Dedah min paksi-x", "Dedah titik tengah penuh"][revealed] ?? "Selesai"
      : mode === "gradient"
      ? ["Dedah jarak mengufuk (dx)", "Dedah jarak mencancang (dy)", "Dedah kecerunan (m)"][revealed] ?? "Selesai"
      : ["Dedah jarak mengufuk (dx)", "Dedah jarak mencancang (dy)", "Dedah jarak sebenar (AB)"][revealed] ??
        "Selesai";

  return (
    <div className="coord-plane">
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="coord-plane__svg">
        {ticks.map((n) => (
          <line
            key={`v-${n}`}
            x1={toSvg(n, 0).sx}
            y1={toSvg(0, 0).sy}
            x2={toSvg(n, 0).sx}
            y2={toSvg(0, GRID_MAX).sy}
            className="coord-plane__grid"
          />
        ))}
        {ticks.map((n) => (
          <line
            key={`h-${n}`}
            x1={toSvg(0, 0).sx}
            y1={toSvg(0, n).sy}
            x2={toSvg(GRID_MAX, 0).sx}
            y2={toSvg(0, n).sy}
            className="coord-plane__grid"
          />
        ))}
        <line x1={toSvg(0, 0).sx} y1={toSvg(0, 0).sy} x2={toSvg(GRID_MAX, 0).sx} y2={toSvg(0, 0).sy} className="coord-plane__axis" />
        <line x1={toSvg(0, 0).sx} y1={toSvg(0, 0).sy} x2={toSvg(0, 0).sx} y2={toSvg(0, GRID_MAX).sy} className="coord-plane__axis" />

        {mode === "distance" || mode === "gradient" ? (
          <>
            {revealed >= 1 && (
              <>
                <line x1={a.sx} y1={a.sy} x2={corner.sx} y2={corner.sy} className="coord-plane__leg" />
                <text x={(a.sx + corner.sx) / 2} y={corner.sy + 14} textAnchor="middle" className="coord-plane__leg-label">
                  dx = {mode === "gradient" ? dxSigned : dx}
                </text>
              </>
            )}
            {revealed >= 2 && (
              <>
                <line x1={corner.sx} y1={corner.sy} x2={b.sx} y2={b.sy} className="coord-plane__leg" />
                <text x={corner.sx + 10} y={(corner.sy + b.sy) / 2} className="coord-plane__leg-label">
                  dy = {mode === "gradient" ? dySigned : dy}
                </text>
              </>
            )}
            {revealed >= 3 && (
              <line x1={a.sx} y1={a.sy} x2={b.sx} y2={b.sy} className="coord-plane__hypotenuse" />
            )}
          </>
        ) : (
          <>
            <line x1={a.sx} y1={a.sy} x2={b.sx} y2={b.sy} className="coord-plane__hypotenuse" />
            {revealed >= 1 && (
              <>
                <line x1={midOnAxisX.sx} y1={midOnAxisX.sy} x2={midOnAxisX.sx} y2={a.sy} className="coord-plane__guide" />
                <text x={midOnAxisX.sx} y={SIZE - 4} textAnchor="middle" className="coord-plane__leg-label">
                  x = {mx}
                </text>
              </>
            )}
            {revealed >= 2 && (
              <>
                <line x1={midOnAxisY.sx} y1={midOnAxisY.sy} x2={midPoint.sx} y2={midOnAxisY.sy} className="coord-plane__guide" />
                <text x={4} y={midOnAxisY.sy - 4} className="coord-plane__leg-label">
                  y = {my}
                </text>
                <circle cx={midPoint.sx} cy={midPoint.sy} r="5" className="coord-plane__midpoint" />
                <text x={midPoint.sx + 10} y={midPoint.sy - 8} className="coord-plane__point-label">
                  M({mx}, {my})
                </text>
              </>
            )}
          </>
        )}

        <circle cx={a.sx} cy={a.sy} r="5" className="coord-plane__point" />
        <text x={a.sx - 10} y={a.sy - 10} textAnchor="end" className="coord-plane__point-label">
          {pointA.label ?? "A"}({pointA.x}, {pointA.y})
        </text>
        <circle cx={b.sx} cy={b.sy} r="5" className="coord-plane__point" />
        <text x={b.sx + 10} y={b.sy - 10} className="coord-plane__point-label">
          {pointB.label ?? "B"}({pointB.x}, {pointB.y})
        </text>
      </svg>

      <div className="coord-plane__controls">
        <button type="button" className="coord-plane__step-btn" onClick={handleClick} disabled={done}>
          {done ? "Selesai" : `${stepLabel} (${revealed}/${totalSteps})`}
        </button>
        <button type="button" className="coord-plane__reset-btn" onClick={() => setRevealed(0)} disabled={revealed === 0}>
          Ulang semula
        </button>
      </div>

      {done && (
        <p className="coord-plane__result">
          {mode === "midpoint"
            ? `Sampai! Titik tengah AB = ((${pointA.x}+${pointB.x})/2, (${pointA.y}+${pointB.y})/2) = (${mx}, ${my})`
            : mode === "gradient"
            ? `Sampai! Kecerunan, m = dy ÷ dx = ${dySigned} ÷ ${dxSigned} = ${gradient}`
            : `Sampai! Jarak AB = √(dx² + dy²) = √(${dx}² + ${dy}²) = √${dx * dx + dy * dy} = ${distance}`}
        </p>
      )}
    </div>
  );
}
