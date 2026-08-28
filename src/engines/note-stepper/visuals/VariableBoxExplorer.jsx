import { useEffect, useState } from "react";
import "./VariableBoxExplorer.css";

// Visual pengenalan pemboleh ubah — klik untuk cuba nilai berbeza bagi x dan
// lihat macam mana ungkapan berubah, tapi CORAKnya kekal sama.
// mode "add" (default): x + pemalar (untuk 1 pemboleh ubah).
// mode "subtractFromTotal": y = jumlah - x (untuk perkaitan 2 pemboleh ubah,
// mana x+y=jumlah kekal malar walaupun x & y berubah).
export default function VariableBoxExplorer({
  variableLabel = "x",
  resultLabel,
  constant,
  total,
  mode = "add",
  steps = 4,
  startValue = 1,
  onFinished,
}) {
  const [clicks, setClicks] = useState(0);
  const done = clicks >= steps;
  const currentValue = startValue + clicks;
  const evaluate = (v) => (mode === "subtractFromTotal" ? total - v : v + constant);
  const sign = constant >= 0 ? "+" : "−";
  const absConstant = Math.abs(constant);
  const label = resultLabel || "y";

  useEffect(() => {
    if (done) onFinished?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  const handleClick = () => {
    if (done) return;
    setClicks((c) => c + 1);
  };

  const handleReset = () => setClicks(0);

  const history = Array.from({ length: clicks }, (_, i) => startValue + i);

  const formatLine = (v) =>
    mode === "subtractFromTotal"
      ? `${variableLabel} = ${v} → ${label} = ${total} − ${v} = ${evaluate(v)}`
      : `${variableLabel} = ${v} → ${variableLabel} ${sign} ${absConstant} = ${evaluate(v)}`;

  return (
    <div className="variable-box">
      <div className="variable-box__display">{formatLine(currentValue)}</div>
      {history.length > 0 && (
        <ul className="variable-box__history">
          {history.map((v) => (
            <li key={v} className="variable-box__history-row">
              {mode === "subtractFromTotal"
                ? `${variableLabel} = ${v} → ${label} = ${evaluate(v)}`
                : `${variableLabel} = ${v} → ${evaluate(v)}`}
            </li>
          ))}
        </ul>
      )}
      <div className="variable-box__controls">
        <button type="button" className="variable-box__step-btn" onClick={handleClick} disabled={done}>
          {done ? "Selesai" : `Tukar nilai ${variableLabel} (${clicks}/${steps})`}
        </button>
        <button type="button" className="variable-box__reset-btn" onClick={handleReset} disabled={clicks === 0}>
          Ulang semula
        </button>
      </div>
      {done && (
        <p className="variable-box__result">
          {mode === "subtractFromTotal"
            ? `Perasan? ${variableLabel} berubah, ${label} pun berubah, tapi ${variableLabel} + ${label} kekal = ${total}!`
            : `Perasan? ${variableLabel} berubah, tapi corak ${sign} ${absConstant} kekal SAMA!`}
        </p>
      )}
    </div>
  );
}
