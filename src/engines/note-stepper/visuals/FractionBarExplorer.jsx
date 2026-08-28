import { useEffect, useState } from "react";
import "./FractionBarExplorer.css";

// Visual eksplorasi untuk pecahan/perpuluhan bertanda (spec ms. 71: "Pecahan
// → potongan bentuk"). Sama corak interaksi dengan NumberLineExplorer (klik
// "Langkah" N kali) tetapi dipaparkan sebagai bar berpetak mengikut penyebut,
// dengan pilihan papar sebagai pecahan (n/denominator) atau perpuluhan —
// perpuluhan pun sebenarnya pecahan berpenyebut kuasa 10, jadi komponen yang
// sama boleh deja digunakan untuk kedua-dua Topik 1.3 (Pecahan) dan
// 1.4 (Perpuluhan) tanpa perlu visual baharu lagi.
export default function FractionBarExplorer({
  start,
  steps,
  denominator,
  format = "fraction",
  decimalPlaces,
  unitLabel = "",
  onFinished,
}) {
  const direction = steps < 0 ? -1 : 1;
  const totalSteps = Math.abs(steps);
  const target = start + steps;

  const [position, setPosition] = useState(start);
  const [taken, setTaken] = useState(0);
  const done = taken >= totalSteps;

  useEffect(() => {
    if (done) onFinished?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  const handleStep = () => {
    if (done) return;
    setPosition((p) => p + direction);
    setTaken((t) => t + 1);
  };

  const handleReset = () => {
    setPosition(start);
    setTaken(0);
  };

  const formatValue = (value) => {
    if (format === "decimal") {
      const places = decimalPlaces ?? 1;
      const decimal = value / denominator;
      const text = Math.abs(decimal).toFixed(places);
      return `${value < 0 ? "−" : ""}${text}${unitLabel}`;
    }
    const magnitude = Math.abs(value);
    return `${value < 0 ? "−" : ""}${magnitude}/${denominator}${unitLabel}`;
  };

  const magnitude = Math.abs(position);
  const isNegative = position < 0;
  const filledCells = magnitude;
  const cells = [];
  for (let i = 0; i < denominator; i++) cells.push(i);

  return (
    <div className="fraction-bar">
      <div className="fraction-bar__value">{formatValue(position)}</div>

      <div className={`fraction-bar__track${isNegative ? " fraction-bar__track--negative" : ""}`}>
        {cells.map((i) => (
          <div key={i} className={`fraction-bar__cell${i < filledCells ? " fraction-bar__cell--filled" : ""}`} />
        ))}
      </div>

      <div className="fraction-bar__controls">
        <button type="button" className="fraction-bar__step-btn" onClick={handleStep} disabled={done}>
          {done ? "Selesai" : `Langkah ${direction < 0 ? "− negatif" : "+ positif"} (${taken}/${totalSteps})`}
        </button>
        <button type="button" className="fraction-bar__reset-btn" onClick={handleReset} disabled={taken === 0}>
          Ulang semula
        </button>
      </div>

      {done && (
        <p className="fraction-bar__result">
          Sampai! {formatValue(start)} {steps < 0 ? "−" : "+"} {formatValue(totalSteps).replace(/^−/, "")} ={" "}
          {formatValue(target)}
        </p>
      )}
    </div>
  );
}
