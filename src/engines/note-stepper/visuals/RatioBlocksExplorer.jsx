import { useEffect, useState } from "react";
import "./RatioBlocksExplorer.css";

// Visual dua kumpulan blok untuk nisbah — klik untuk ubah daripada nisbah asal
// (fromA:fromB) kepada bentuk sasaran (toA:toB), sama ada permudahkan (bahagi)
// atau skalakan (darab).
export default function RatioBlocksExplorer({ fromA, fromB, toA, toB, labelA = "A", labelB = "B", onFinished }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) onFinished?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  const a = done ? toA : fromA;
  const b = done ? toB : fromB;

  return (
    <div className="ratio-blocks">
      <div className="ratio-blocks__value">
        {a} : {b}
      </div>
      <div className="ratio-blocks__row">
        <span className="ratio-blocks__label">{labelA}</span>
        <div className="ratio-blocks__blocks">
          {Array.from({ length: a }).map((_, i) => (
            <div key={i} className="ratio-blocks__block ratio-blocks__block--a" />
          ))}
        </div>
      </div>
      <div className="ratio-blocks__row">
        <span className="ratio-blocks__label">{labelB}</span>
        <div className="ratio-blocks__blocks">
          {Array.from({ length: b }).map((_, i) => (
            <div key={i} className="ratio-blocks__block ratio-blocks__block--b" />
          ))}
        </div>
      </div>
      <div className="ratio-blocks__controls">
        <button
          type="button"
          className="ratio-blocks__step-btn"
          onClick={() => setDone(true)}
          disabled={done}
        >
          {done ? "Selesai" : "Ubah Nisbah"}
        </button>
        <button
          type="button"
          className="ratio-blocks__reset-btn"
          onClick={() => setDone(false)}
          disabled={!done}
        >
          Ulang semula
        </button>
      </div>
      {done && (
        <p className="ratio-blocks__result">
          Sampai! {fromA}:{fromB} → {toA}:{toB}
        </p>
      )}
    </div>
  );
}
