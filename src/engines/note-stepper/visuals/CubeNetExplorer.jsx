import { useEffect, useState } from "react";
import "./CubeNetExplorer.css";

const FACES = [
  { key: "atas", label: "Atas", col: 1, row: 0 },
  { key: "kiri", label: "Kiri", col: 0, row: 1 },
  { key: "hadapan", label: "Hadapan", col: 1, row: 1 },
  { key: "kanan", label: "Kanan", col: 2, row: 1 },
  { key: "belakang", label: "Belakang", col: 3, row: 1 },
  { key: "bawah", label: "Bawah", col: 1, row: 2 },
];

const SIZE = 34;
const GAP = 2;

// Visual bentangan kubus — dedah setiap satu daripada 6 muka segi empat sama
// (disusun dalam bentuk salib) satu demi satu, tunjuk bentangan ini boleh
// dilipat menjadi sebuah kubus.
export default function CubeNetExplorer({ onFinished }) {
  const [revealed, setRevealed] = useState(0);
  const done = revealed >= FACES.length;

  useEffect(() => {
    if (done) onFinished?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  const handleClick = () => {
    if (done) return;
    setRevealed((r) => Math.min(r + 1, FACES.length));
  };

  return (
    <div className="cube-net">
      <svg viewBox="0 0 160 130" className="cube-net__svg">
        {FACES.map((f, i) => {
          const x = f.col * (SIZE + GAP) + 10;
          const y = f.row * (SIZE + GAP) + 10;
          const shown = i < revealed;
          return (
            <g key={f.key}>
              <rect
                x={x}
                y={y}
                width={SIZE}
                height={SIZE}
                className={`cube-net__face${shown ? " cube-net__face--shown" : ""}`}
              />
              {shown && (
                <text x={x + SIZE / 2} y={y + SIZE / 2 + 4} textAnchor="middle" className="cube-net__label">
                  {f.label}
                </text>
              )}
            </g>
          );
        })}
      </svg>
      <div className="cube-net__value">{revealed > 0 ? `Muka: ${FACES[revealed - 1].label}` : "—"}</div>
      <div className="cube-net__controls">
        <button type="button" className="cube-net__step-btn" onClick={handleClick} disabled={done}>
          {done ? "Selesai" : `Dedah muka seterusnya (${revealed}/${FACES.length})`}
        </button>
        <button type="button" className="cube-net__reset-btn" onClick={() => setRevealed(0)} disabled={revealed === 0}>
          Ulang semula
        </button>
      </div>
      {done && (
        <p className="cube-net__result">
          Sampai! Bentangan ini ada 6 muka segi empat sama — bila dilipat, ia membentuk sebuah KUBUS.
        </p>
      )}
    </div>
  );
}
