import { useEffect, useState } from "react";
import "./BarChartExplorer.css";

// Visual carta palang — dedah setiap palang (kategori) satu demi satu,
// tunjuk kekerapan setiap kategori dan jumlah keseluruhan bertambah.
const CHART_WIDTH = 220;
const START_X = 20;
const RIGHT_MARGIN = 20;
const MAX_BAR_WIDTH = 34;
const MAX_GAP = 14;
const AXIS_Y = 150;
const CHART_HEIGHT = 130;
const LABEL_TOP_OFFSET = 15; // jarak dari axis ke baris label pertama
const LABEL_LINE_HEIGHT = 10;
const AVG_CHAR_WIDTH = 6.5; // anggaran lebar aksara untuk font-size 10 tebal

// Pecahkan label kategori kepada beberapa baris supaya tak bertindih dengan
// label bar sebelah bila ruang setiap bar sempit (banyak kategori) atau nama
// kategori panjang (contoh "Jarak AB (objek)").
function wrapLabel(text, maxChars) {
  const words = String(text).split(" ");
  const lines = [];
  let current = "";
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (current && candidate.length > maxChars) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);
  return lines;
}

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

  // Kecilkan lebar bar/gap secara berkadar bila kategori terlalu banyak untuk
  // muat dalam lebar carta yang tetap — elak bar terkeluar/terpotong.
  const availableWidth = CHART_WIDTH - START_X - RIGHT_MARGIN;
  const naturalWidth = total * MAX_BAR_WIDTH + (total - 1) * MAX_GAP;
  const scale = naturalWidth > availableWidth ? availableWidth / naturalWidth : 1;
  const barWidth = MAX_BAR_WIDTH * scale;
  const gap = MAX_GAP * scale;
  const spacing = barWidth + gap;
  const maxCharsPerLine = Math.max(3, Math.floor(spacing / AVG_CHAR_WIDTH));

  const wrappedLabels = categories.map((cat) => wrapLabel(cat, maxCharsPerLine));
  const maxLines = Math.max(1, ...wrappedLabels.map((lines) => lines.length));
  const chartViewBoxHeight = AXIS_Y + LABEL_TOP_OFFSET + maxLines * LABEL_LINE_HEIGHT;

  return (
    <div className="bar-chart">
      <svg viewBox={`0 0 ${CHART_WIDTH} ${chartViewBoxHeight}`} className="bar-chart__svg">
        <line x1="15" y1={AXIS_Y} x2={CHART_WIDTH - 10} y2={AXIS_Y} className="bar-chart__axis" />
        {categories.map((cat, i) => {
          const active = i < revealed;
          const h = active ? (values[i] / maxValue) * CHART_HEIGHT : 0;
          const x = START_X + i * spacing;
          const y = AXIS_Y - h;
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
              {wrappedLabels[i].map((line, li) => (
                <text
                  key={line + li}
                  x={x + barWidth / 2}
                  y={AXIS_Y + LABEL_TOP_OFFSET + li * LABEL_LINE_HEIGHT}
                  textAnchor="middle"
                  className="bar-chart__label"
                >
                  {line}
                </text>
              ))}
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
