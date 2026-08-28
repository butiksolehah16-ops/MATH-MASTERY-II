import { useEffect, useState } from "react";
import "./DistributionExplorer.css";

function formatConstant(value) {
  return value < 0 ? `− ${Math.abs(value)}` : `+ ${value}`;
}

// Visual model kawasan (area model) untuk kembangan k(ax + b) — dedah setiap
// satu daripada k kumpulan (masing-masing ax + b) satu demi satu, kemudian
// jumlahkan kesemua kumpulan untuk tunjuk k(ax + b) = (k×a)x + (k×b). Topik
// Pemfaktoran (proses songsang) guna komponen sama — mekanik dedah-satu-
// demi-satu tak berubah, cuma naratif dalam nota diceritakan secara terbalik.
export default function DistributionExplorer({
  multiplier,
  coefficient,
  variableLabel = "x",
  constant,
  onFinished,
}) {
  const [revealed, setRevealed] = useState(0);
  const done = revealed >= multiplier;
  const totalCoefficient = coefficient * multiplier;
  const totalConstant = constant * multiplier;

  useEffect(() => {
    if (done) onFinished?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  const handleReveal = () => {
    if (done) return;
    setRevealed((r) => Math.min(r + 1, multiplier));
  };

  const handleReset = () => setRevealed(0);

  return (
    <div className="distribution">
      <div className="distribution__groups">
        {Array.from({ length: revealed }).map((_, i) => (
          <div key={i} className="distribution__group">
            <span className="distribution__group-label">Kumpulan {i + 1}</span>
            <span className="distribution__group-term">
              {coefficient}
              {variableLabel} {formatConstant(constant)}
            </span>
          </div>
        ))}
      </div>
      <div className="distribution__controls">
        <button type="button" className="distribution__step-btn" onClick={handleReveal} disabled={done}>
          {done ? "Selesai" : `Agihkan kumpulan seterusnya (${revealed}/${multiplier})`}
        </button>
        <button
          type="button"
          className="distribution__reset-btn"
          onClick={handleReset}
          disabled={revealed === 0}
        >
          Ulang semula
        </button>
      </div>
      {done && (
        <p className="distribution__result">
          Sampai! {multiplier}({coefficient}
          {variableLabel} {formatConstant(constant)}) = {totalCoefficient}
          {variableLabel} {formatConstant(totalConstant)}
        </p>
      )}
    </div>
  );
}
