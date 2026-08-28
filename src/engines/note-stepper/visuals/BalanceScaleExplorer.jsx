import { useEffect, useState } from "react";
import "./BalanceScaleExplorer.css";

// Visual penimbang dua pinggan — klik untuk buat operasi songsang pada
// KEDUA-DUA belah (tolak pemalar, atau bahagi dengan pekali), tunjuk
// penimbang kekal seimbang selepas operasi, menyelesaikan pemboleh ubah.
export default function BalanceScaleExplorer({
  variableLabel = "x",
  coefficient = 1,
  leftConstant = 0,
  rightValue,
  operation = "subtract",
  operand,
  actionLabel,
  onFinished,
}) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) onFinished?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  const result = operation === "divide" ? Math.round(rightValue / operand) : rightValue - operand;
  const displayCoefficient = done && operation === "divide" ? 1 : coefficient;
  const displayLeftConstant = done ? 0 : leftConstant;
  const displayRight = done ? result : rightValue;

  const defaultAction =
    operation === "divide" ? `Bahagi kedua-dua belah dengan ${operand}` : `Buang ${operand} dari kedua-dua belah`;

  return (
    <div className="balance-scale">
      <div className="balance-scale__beam">
        <div className="balance-scale__pan">
          <div className="balance-scale__items">
            {Array.from({ length: displayCoefficient }).map((_, i) => (
              <div key={`v${i}`} className="balance-scale__box">
                {variableLabel}
              </div>
            ))}
            {Array.from({ length: displayLeftConstant }).map((_, i) => (
              <div key={`c${i}`} className="balance-scale__weight" />
            ))}
          </div>
        </div>
        <div className="balance-scale__equals" aria-hidden="true">
          =
        </div>
        <div className="balance-scale__pan">
          <div className="balance-scale__items">
            {Array.from({ length: displayRight }).map((_, i) => (
              <div key={i} className="balance-scale__weight" />
            ))}
          </div>
        </div>
      </div>
      <div className="balance-scale__controls">
        <button type="button" className="balance-scale__step-btn" onClick={() => setDone(true)} disabled={done}>
          {done ? "Selesai" : actionLabel || defaultAction}
        </button>
        <button type="button" className="balance-scale__reset-btn" onClick={() => setDone(false)} disabled={!done}>
          Ulang semula
        </button>
      </div>
      {done && (
        <p className="balance-scale__result">
          Sampai! {variableLabel} = {result}
        </p>
      )}
    </div>
  );
}
