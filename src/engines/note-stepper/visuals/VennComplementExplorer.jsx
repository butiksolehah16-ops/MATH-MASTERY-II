import { useEffect, useState } from "react";
import "./VennComplementExplorer.css";

const INSIDE_SLOTS = [
  [110, 70],
  [88, 95],
  [132, 95],
  [110, 118],
  [95, 135],
  [125, 135],
];

const OUTSIDE_SLOTS = [
  [30, 35],
  [190, 35],
  [30, 155],
  [190, 155],
  [30, 95],
  [190, 95],
];

// Visual gambar rajah Venn — dedah unsur set semesta satu demi satu, letak
// unsur di dalam bulatan (ahli set A) atau di luar bulatan tapi dalam segi
// empat (ahli pelengkap A'), tunjuk n(A) dan n(A') bertambah.
export default function VennComplementExplorer({ universalElements, setElements, onFinished }) {
  const [revealed, setRevealed] = useState(0);
  const total = universalElements.length;
  const done = revealed >= total;

  useEffect(() => {
    if (done) onFinished?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  const handleClick = () => {
    if (done) return;
    setRevealed((r) => Math.min(r + 1, total));
  };

  const shown = universalElements.slice(0, revealed);
  const insideItems = shown.filter((el) => setElements.includes(el));
  const outsideItems = shown.filter((el) => !setElements.includes(el));

  return (
    <div className="venn-complement">
      <svg viewBox="0 0 220 180" className="venn-complement__svg">
        <rect x="10" y="10" width="200" height="160" rx="8" className="venn-complement__universal" />
        <text x="16" y="26" className="venn-complement__universal-label">
          ξ
        </text>
        <circle cx="110" cy="95" r="55" className="venn-complement__set" />
        <text x="110" y="48" textAnchor="middle" className="venn-complement__set-label">
          A
        </text>
        {insideItems.map((el, i) => (
          <text
            key={el}
            x={INSIDE_SLOTS[i][0]}
            y={INSIDE_SLOTS[i][1]}
            textAnchor="middle"
            className="venn-complement__label"
          >
            {el}
          </text>
        ))}
        {outsideItems.map((el, i) => (
          <text
            key={el}
            x={OUTSIDE_SLOTS[i][0]}
            y={OUTSIDE_SLOTS[i][1]}
            textAnchor="middle"
            className="venn-complement__label"
          >
            {el}
          </text>
        ))}
      </svg>
      <div className="venn-complement__value">
        n(A) = {insideItems.length}, n(A′) = {outsideItems.length}
      </div>
      <div className="venn-complement__controls">
        <button type="button" className="venn-complement__step-btn" onClick={handleClick} disabled={done}>
          {done ? "Selesai" : `Letak unsur seterusnya (${revealed}/${total})`}
        </button>
        <button
          type="button"
          className="venn-complement__reset-btn"
          onClick={() => setRevealed(0)}
          disabled={revealed === 0}
        >
          Ulang semula
        </button>
      </div>
      {done && (
        <p className="venn-complement__result">
          Sampai! n(ξ) = {total}, n(A) = {insideItems.length}, n(A′) = {outsideItems.length}
        </p>
      )}
    </div>
  );
}
