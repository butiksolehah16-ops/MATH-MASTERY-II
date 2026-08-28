import { useEffect, useState } from "react";
import "./SetBuilderExplorer.css";

// Visual set — dedah unsur set satu demi satu ke dalam bulatan, tunjuk
// notasi { } terbina dan bilangan unsur n(A) bertambah.
export default function SetBuilderExplorer({ setName = "A", elements, onFinished }) {
  const [revealed, setRevealed] = useState(0);
  const total = elements.length;
  const done = revealed >= total;

  useEffect(() => {
    if (done) onFinished?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  const handleClick = () => {
    if (done) return;
    setRevealed((r) => Math.min(r + 1, total));
  };

  const shown = elements.slice(0, revealed);

  return (
    <div className="set-builder">
      <svg viewBox="0 0 220 180" className="set-builder__svg">
        <circle cx="110" cy="95" r="70" className="set-builder__circle" />
        <text x="45" y="35" className="set-builder__set-label">
          {setName}
        </text>
        {shown.map((el, i) => {
          const angle = (360 / Math.max(total, 1)) * i;
          const rad = (angle * Math.PI) / 180;
          const x = 110 + 38 * Math.cos(rad);
          const y = 95 + 38 * Math.sin(rad);
          return (
            <text key={el} x={x} y={y} textAnchor="middle" className="set-builder__label">
              {el}
            </text>
          );
        })}
      </svg>
      <div className="set-builder__value">
        {setName} = {"{"}
        {shown.join(", ")}
        {"}"}
      </div>
      <div className="set-builder__controls">
        <button type="button" className="set-builder__step-btn" onClick={handleClick} disabled={done}>
          {done ? "Selesai" : `Tambah unsur (${revealed}/${total})`}
        </button>
        <button
          type="button"
          className="set-builder__reset-btn"
          onClick={() => setRevealed(0)}
          disabled={revealed === 0}
        >
          Ulang semula
        </button>
      </div>
      {done && (
        <p className="set-builder__result">
          Sampai! n({setName}) = {total}
        </p>
      )}
    </div>
  );
}
