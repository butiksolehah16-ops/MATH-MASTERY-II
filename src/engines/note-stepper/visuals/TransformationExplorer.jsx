import { useEffect, useState } from "react";
import "./TransformationExplorer.css";

// Visual transformasi — plot bentuk OBJEK dan IMEJ pada grid, dedah setiap
// pasangan bucu (objek → imej) satu demi satu dengan garis padanan, untuk
// tunjuk translasi/pantulan/putaran. Kandungan bekalkan koordinat objek DAN
// imej terus (pengiraan transformasi dibuat semasa penulisan kandungan),
// jadi komponen ini generik untuk ketiga-tiga jenis transformasi.
const GRID_MAX = 10;
const UNIT = 20;
const MARGIN = 20;
const SIZE = MARGIN * 2 + GRID_MAX * UNIT;

function toSvg(x, y) {
  return { sx: MARGIN + x * UNIT, sy: SIZE - MARGIN - y * UNIT };
}

function polygonPoints(vertices) {
  return vertices.map((v) => {
    const { sx, sy } = toSvg(v.x, v.y);
    return `${sx},${sy}`;
  }).join(" ");
}

export default function TransformationExplorer({ object, image, referenceLine, referencePoint, onFinished }) {
  const [revealed, setRevealed] = useState(0);
  const total = object.length;
  const done = revealed >= total;

  useEffect(() => {
    if (done) onFinished?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  const handleClick = () => {
    if (done) return;
    setRevealed((r) => Math.min(r + 1, total));
  };

  const ticks = [];
  for (let n = 0; n <= GRID_MAX; n += 2) ticks.push(n);

  return (
    <div className="tf-explorer">
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="tf-explorer__svg">
        {ticks.map((n) => (
          <line key={`v-${n}`} x1={toSvg(n, 0).sx} y1={toSvg(0, 0).sy} x2={toSvg(n, 0).sx} y2={toSvg(0, GRID_MAX).sy} className="tf-explorer__grid" />
        ))}
        {ticks.map((n) => (
          <line key={`h-${n}`} x1={toSvg(0, 0).sx} y1={toSvg(0, n).sy} x2={toSvg(GRID_MAX, 0).sx} y2={toSvg(0, n).sy} className="tf-explorer__grid" />
        ))}
        <line x1={toSvg(0, 0).sx} y1={toSvg(0, 0).sy} x2={toSvg(GRID_MAX, 0).sx} y2={toSvg(0, 0).sy} className="tf-explorer__axis" />
        <line x1={toSvg(0, 0).sx} y1={toSvg(0, 0).sy} x2={toSvg(0, 0).sx} y2={toSvg(0, GRID_MAX).sy} className="tf-explorer__axis" />

        {referenceLine && (
          <line
            x1={referenceLine.axis === "horizontal" ? toSvg(0, referenceLine.value).sx : toSvg(referenceLine.value, 0).sx}
            y1={referenceLine.axis === "horizontal" ? toSvg(0, referenceLine.value).sy : toSvg(0, 0).sy}
            x2={referenceLine.axis === "horizontal" ? toSvg(GRID_MAX, referenceLine.value).sx : toSvg(referenceLine.value, 0).sx}
            y2={referenceLine.axis === "horizontal" ? toSvg(0, referenceLine.value).sy : toSvg(0, GRID_MAX).sy}
            className="tf-explorer__reference-line"
          />
        )}
        {referencePoint && (
          <>
            <circle cx={toSvg(referencePoint.x, referencePoint.y).sx} cy={toSvg(referencePoint.x, referencePoint.y).sy} r="4" className="tf-explorer__reference-point" />
            <text x={toSvg(referencePoint.x, referencePoint.y).sx + 8} y={toSvg(referencePoint.x, referencePoint.y).sy - 8} className="tf-explorer__vertex-label">
              {referencePoint.label ?? "O"}
            </text>
          </>
        )}

        <polygon points={polygonPoints(object)} className="tf-explorer__object" />
        {object.map((v, i) => {
          const { sx, sy } = toSvg(v.x, v.y);
          return (
            <g key={`obj-${i}`}>
              <circle cx={sx} cy={sy} r="4" className="tf-explorer__object-point" />
              <text x={sx - 8} y={sy - 8} textAnchor="end" className="tf-explorer__vertex-label">
                {v.label}
              </text>
            </g>
          );
        })}

        {done && <polygon points={polygonPoints(image)} className="tf-explorer__image" />}

        {image.slice(0, revealed).map((v, i) => {
          const objPt = toSvg(object[i].x, object[i].y);
          const imgPt = toSvg(v.x, v.y);
          return (
            <g key={`img-${i}`}>
              <line x1={objPt.sx} y1={objPt.sy} x2={imgPt.sx} y2={imgPt.sy} className="tf-explorer__correspondence" />
              <circle cx={imgPt.sx} cy={imgPt.sy} r="4" className="tf-explorer__image-point" />
              <text x={imgPt.sx + 8} y={imgPt.sy - 8} className="tf-explorer__vertex-label">
                {v.label}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="tf-explorer__controls">
        <button type="button" className="tf-explorer__step-btn" onClick={handleClick} disabled={done}>
          {done ? "Selesai" : `Dedah imej bucu seterusnya (${revealed}/${total})`}
        </button>
        <button type="button" className="tf-explorer__reset-btn" onClick={() => setRevealed(0)} disabled={revealed === 0}>
          Ulang semula
        </button>
      </div>

      {done && <p className="tf-explorer__result">Sampai! Bentuk imej lengkap terbentuk — kongruen dengan objek asal.</p>}
    </div>
  );
}
