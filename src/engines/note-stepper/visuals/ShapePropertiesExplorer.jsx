import { useEffect, useState } from "react";
import "./ShapePropertiesExplorer.css";

const SHAPES = [
  { key: "kuboid", name: "Kuboid", faces: 6, edges: 12, vertices: 8 },
  { key: "piramid", name: "Piramid Tegak Segi Empat Sama", faces: 5, edges: 8, vertices: 5 },
  { key: "silinder", name: "Silinder", faces: 3, edges: 2, vertices: 0 },
  { key: "kon", name: "Kon", faces: 2, edges: 1, vertices: 1 },
  { key: "sfera", name: "Sfera", faces: 1, edges: 0, vertices: 0 },
];

function ShapeIcon({ shapeKey }) {
  switch (shapeKey) {
    case "kuboid":
      return (
        <g className="shape-icon__stroke">
          <polygon points="40,90 110,90 110,40 40,40" />
          <polygon points="40,40 60,20 130,20 110,40" />
          <polygon points="110,90 130,70 130,20 110,40" />
          <line x1="40" y1="90" x2="60" y2="70" />
          <line x1="60" y1="70" x2="130" y2="70" />
          <line x1="60" y1="70" x2="60" y2="20" />
        </g>
      );
    case "piramid":
      return (
        <g className="shape-icon__stroke">
          <polygon points="30,90 130,90 100,55 55,55" />
          <line x1="30" y1="90" x2="80" y2="15" />
          <line x1="130" y1="90" x2="80" y2="15" />
          <line x1="100" y1="55" x2="80" y2="15" />
          <line x1="55" y1="55" x2="80" y2="15" />
        </g>
      );
    case "silinder":
      return (
        <g className="shape-icon__stroke">
          <ellipse cx="80" cy="30" rx="45" ry="15" />
          <ellipse cx="80" cy="90" rx="45" ry="15" />
          <line x1="35" y1="30" x2="35" y2="90" />
          <line x1="125" y1="30" x2="125" y2="90" />
        </g>
      );
    case "kon":
      return (
        <g className="shape-icon__stroke">
          <ellipse cx="80" cy="90" rx="45" ry="15" />
          <line x1="35" y1="90" x2="80" y2="15" />
          <line x1="125" y1="90" x2="80" y2="15" />
        </g>
      );
    case "sfera":
    default:
      return (
        <g className="shape-icon__stroke">
          <circle cx="80" cy="55" r="45" />
          <ellipse cx="80" cy="55" rx="45" ry="16" className="shape-icon__equator" />
        </g>
      );
  }
}

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
            <ShapeIcon shapeKey={current.key} />
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
