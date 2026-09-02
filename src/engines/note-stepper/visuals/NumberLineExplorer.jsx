import { useEffect, useMemo, useState } from "react";
import "./NumberLineExplorer.css";

export default function NumberLineExplorer({
  start,
  steps,
  stepUnit = 1,
  stepLabel = "Langkah",
  unitLabel = "",
  min: minProp,
  max: maxProp,
  onFinished,
}) {
  const direction = steps < 0 ? -1 : 1;
  const distance = Math.abs(steps);
  const totalClicks = Math.round(distance / stepUnit);
  const target = start + steps;

  // Kira julat paksi (min/max) ikut DUA senario:
  // 1. Kandungan bekalkan min/max sendiri (cth. 0-220 untuk konteks visual
  //    "sehingga 220g") — hormati pilihan tu, cuma lebarkan jika perjalanan
  //    sebenar (start→target) tak muat di dalamnya.
  // 2. Tiada min/max dibekalkan langsung — kira KETAT ikut perjalanan sebenar
  //    (bukan default tetap −10..10) supaya tiada ruang paksi terbuang bila
  //    perjalanan sebenar jauh lebih kecil/di luar julat itu.
  const journeyMin = Math.min(start, target);
  const journeyMax = Math.max(start, target);
  const journeySpan = journeyMax - journeyMin || 1;
  const padding = Math.max(2, Math.round(journeySpan * 0.2));

  let min;
  let max;
  if (minProp !== undefined || maxProp !== undefined) {
    min = Math.min(minProp ?? journeyMin - padding, journeyMin);
    max = Math.max(maxProp ?? journeyMax + padding, journeyMax);
  } else {
    min = journeyMin - padding;
    max = journeyMax + padding;
  }

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

  // Kira jarak antara label tanda paksi secara dinamik ("nice number") ikut
  // julat min-max — julat kecil (cth. −10 hingga 10) kekal label tiap 2 unit
  // macam asal, tapi julat besar (cth. 0 hingga 220) elak >100 label
  // bertindih dengan langkau ke gandaan bersih (5, 10, 20, 50...).
  const range = max - min;
  const tickStep = useMemo(() => {
    const targetCount = 10;
    const rough = range / targetCount || 1;
    const magnitude = Math.pow(10, Math.floor(Math.log10(rough)));
    const residual = rough / magnitude;
    const niceResidual = residual > 5 ? 10 : residual > 2 ? 5 : residual > 1 ? 2 : 1;
    return Math.max(1, niceResidual * magnitude);
  }, [range]);

  const ticks = [];
  for (let n = min; n <= max; n += tickStep) ticks.push(Math.round(n * 100) / 100);
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
            <span className="number-line__tick-label">{n}</span>
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
          {done ? "Selesai" : `${stepLabel} seterusnya ${direction < 0 ? "◀" : "▶"} (${taken}/${totalClicks})`}
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
