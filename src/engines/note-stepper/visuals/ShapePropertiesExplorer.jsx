import { useEffect, useState } from "react";
import { ShapeIcon3D } from "./shapeIcons3D.jsx";
import "./ShapePropertiesExplorer.css";

const SHAPES = [
  { key: "kuboid", name: "Kuboid", faces: 6, edges: 12, vertices: 8 },
  { key: "piramid", name: "Piramid Tegak Segi Empat Sama", faces: 5, edges: 8, vertices: 5 },
  { key: "silinder", name: "Silinder", faces: 3, edges: 2, vertices: 0 },
  { key: "kon", name: "Kon", faces: 2, edges: 1, vertices: 1 },
  { key: "sfera", name: "Sfera", faces: 1, edges: 0, vertices: 0 },
];

// Visual sifat bentuk tiga dimensi — dedah satu bentuk demi satu (kuboid,
// piramid, silinder, kon, sfera), tunjuk bilangan muka, tepi, dan bucu bagi
// setiap satu untuk banding-beza.
export default function ShapePropertiesExplorer({ onFinished }) {
  const [revealed, setRevealed] = useState(0);
  const done = revealed >= SHAPES.length;

  useEffect(() => {
    if (done) onFinished?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  const handleClick = () => {
    if (done) return;
    setRevealed((r) => Math.min(r + 1, SHAPES.length));
  };

  const current = SHAPES[Math.max(0, revealed - 1)];

  return (
    <div className="shape-properties">
      {revealed > 0 ? (
        <>
          <svg viewBox="0 0 160 110" className="shape-properties__svg">
            <ShapeIcon3D shapeKey={current.key} />
          </svg>
          <div className="shape-properties__name">{current.name}</div>
          <div className="shape-properties__stats">
            <span>Muka: {current.faces}</span>
            <span>Tepi: {current.edges}</span>
            <span>Bucu: {current.vertices}</span>
          </div>
        </>
      ) : (
        <div className="shape-properties__placeholder">Klik untuk mula</div>
      )}
      <div className="shape-properties__controls">
        <button type="button" className="shape-properties__step-btn" onClick={handleClick} disabled={done}>
          {done ? "Selesai" : `Bentuk seterusnya (${revealed}/${SHAPES.length})`}
        </button>
        <button
          type="button"
          className="shape-properties__reset-btn"
          onClick={() => setRevealed(0)}
          disabled={revealed === 0}
        >
          Ulang semula
        </button>
      </div>
      {done && (
        <p className="shape-properties__result">Sampai! Kamu dah bandingkan semua {SHAPES.length} bentuk tiga dimensi.</p>
      )}
    </div>
  );
}
