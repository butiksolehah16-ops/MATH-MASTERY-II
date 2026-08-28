import { useEffect, useState } from "react";
import "./SquareGridExplorer.css";

// Visual petak persegi (grid) untuk kuasa dua — klik untuk tambah baris+lajur
// sehingga sisi mencapai targetSide, tunjuk jumlah petak = side x side.
// Prop pilihan `targetCols` (Bab 10, luas segiempat tepat): lajur kekal tetap
// pada targetCols, hanya baris berkembang sehingga targetSide — tunjuk
// panjang x lebar tak semestinya sama. Tanpa targetCols, kekal 100%
// serasi-belakang dengan penggunaan asal (Bab 3, sisi x sisi).
export default function SquareGridExplorer({ targetSide, targetCols, onFinished }) {
  const isRectMode = targetCols != null;
  const cols = isRectMode ? targetCols : targetSide;
  const [side, setSide] = useState(1);
  const done = side >= targetSide;

  useEffect(() => {
    if (done) onFinished?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  const handleGrow = () => {
    if (done) return;
    setSide((s) => Math.min(s + 1, targetSide));
  };

  const handleReset = () => setSide(1);

  const cells = Array.from({ length: side * cols });

  return (
    <div className="square-grid">
      <div className="square-grid__value">
        {side} × {cols} = {side * cols}
      </div>
      <div
        className="square-grid__board"
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {cells.map((_, i) => (
          <div key={i} className="square-grid__cell" />
        ))}
      </div>
      <div className="square-grid__controls">
        <button
          type="button"
          className="square-grid__step-btn"
          onClick={handleGrow}
          disabled={done}
        >
          {done
            ? "Selesai"
            : isRectMode
              ? `Tambah baris (${side}/${targetSide})`
              : `Tambah baris + lajur (${side}/${targetSide})`}
        </button>
        <button
          type="button"
          className="square-grid__reset-btn"
          onClick={handleReset}
          disabled={side === 1}
        >
          Ulang semula
        </button>
      </div>
      {done && (
        <p className="square-grid__result">
          Sampai! {targetSide} × {cols} = {targetSide * cols}
        </p>
      )}
    </div>
  );
}
