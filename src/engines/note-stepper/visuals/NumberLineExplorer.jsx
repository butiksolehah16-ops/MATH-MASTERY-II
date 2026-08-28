import { useEffect, useMemo, useState } from "react";
import "./NumberLineExplorer.css";

export default function NumberLineExplorer({
  start,
  steps,
  stepUnit = 1,
  stepLabel = "Langkah",
  unitLabel = "",
  min = -10,
  max = 10,
  onFinished,
}) {
  const direction = steps < 0 ? -1 : 1;
  const distance = Math.abs(steps);
  const totalClicks = Math.round(distance / stepUnit);
  const target = start + steps;

  const [position, setPosition] = useState(start);
  const [taken, setTaken] = useState(0);
  const done = taken >= totalClicks;

  // Beritahu ibu bapa (parent) selepas render selesai, bukan semasa updater
  // setState — memanggil setState parent terus dalam updater `setTaken`
  // melanggar peraturan render tulen React (dikesan oleh StrictMode).
  useEffect(() => {
    if (done) onFinished?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  const trail = useMemo(() => {
    const points = [];
    for (let i = 0; i <= taken; i++) points.push(start + i * direction * stepUnit);
    return points;
  }, [start, direction, stepUnit, taken]);

  const handleStep = () => {
    if (done) return;
    setPosition((p) => p + direction * stepUnit);
    setTaken((t) => t + 1);
  };

  const handleReset = () => {
    setPosition(start);
    setTaken(0);
  };

  const ticks = [];
  for (let n = min; n <= max; n++) ticks.push(n);
  const toPct = (n) => ((n - min) / (max - min)) * 100;

  return (
    <div className="number-line">
      <div className="number-line__track">
        <div className="number-line__axis" />
        {trail.slice(0, -1).map((n) => (
          <div key={`trail-${n}`} className="number-line__trail-dot" style={{ left: `${toPct(n)}%` }} />
        ))}
        {ticks.map((n) => (
          <div key={n} className="number-line__tick" style={{ left: `${toPct(n)}%` }}>
            <span className="number-line__tick-mark" />
            {n % 2 === 0 && <span className="number-line__tick-label">{n}</span>}
          </div>
        ))}
        <div
          className={`number-line__marker${done ? " number-line__marker--done" : ""}`}
          style={{ left: `${toPct(position)}%` }}
        >
          <span className="number-line__marker-value">
            {position}
            {unitLabel}
          </span>
        </div>
      </div>

      <div className="number-line__controls">
        <button type="button" className="number-line__step-btn" onClick={handleStep} disabled={done}>
          {done ? "Selesai" : `${stepLabel} ${direction < 0 ? "◀ kiri" : "▶ kanan"} (${taken}/${totalClicks})`}
        </button>
        <button type="button" className="number-line__reset-btn" onClick={handleReset} disabled={taken === 0}>
          Ulang semula
        </button>
      </div>

      {done && (
        <p className="number-line__result">
          Sampai! {start}
          {unitLabel} {steps < 0 ? "−" : "+"} {distance} = {target}
          {unitLabel}
        </p>
      )}
    </div>
  );
}
