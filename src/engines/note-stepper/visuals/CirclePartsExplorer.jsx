import { useEffect, useState } from "react";
import { useLanguage } from "../../../state/LanguageContext.jsx";
import { polarToCartesian, describeArc } from "./circleGeometry.js";
import "./CirclePartsExplorer.css";

const DEFAULT_PARTS = ["center", "radius", "diameter", "chord", "arc", "sector"];
const PART_LABEL_MS = {
  center: "Pusat",
  radius: "Jejari",
  diameter: "Diameter",
  chord: "Perentas",
  arc: "Lengkok",
  sector: "Sektor",
  segment: "Tembereng",
};
const PART_LABEL_EN = {
  center: "Centre",
  radius: "Radius",
  diameter: "Diameter",
  chord: "Chord",
  arc: "Arc",
  sector: "Sector",
  segment: "Segment",
};

// Visual bahagian bulatan — dedah setiap bahagian (pusat, jejari, diameter,
// perentas, lengkok, sektor) satu demi satu di atas satu bulatan tetap.
export default function CirclePartsExplorer({ parts = DEFAULT_PARTS, onFinished }) {
  const { language } = useLanguage();
  const PART_LABEL = language === "en" ? PART_LABEL_EN : PART_LABEL_MS;
  const [revealed, setRevealed] = useState(0);
  const done = revealed >= parts.length;

  useEffect(() => {
    if (done) onFinished?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  const handleClick = () => {
    if (done) return;
    setRevealed((r) => Math.min(r + 1, parts.length));
  };

  const cx = 110;
  const cy = 110;
  const r = 80;
  const shown = parts.slice(0, revealed);

  const radiusEnd = polarToCartesian(cx, cy, r, 0);
  const diameterA = polarToCartesian(cx, cy, r, 0);
  const diameterB = polarToCartesian(cx, cy, r, 180);
  const chordA = polarToCartesian(cx, cy, r, 60);
  const chordB = polarToCartesian(cx, cy, r, 160);
  const sectorA = polarToCartesian(cx, cy, r, 20);
  const sectorB = polarToCartesian(cx, cy, r, 80);

  return (
    <div className="circle-parts">
      <svg viewBox="0 0 220 220" className="circle-parts__svg">
        <circle cx={cx} cy={cy} r={r} className="circle-parts__outline" />
        {shown.includes("sector") && (
          <path
            d={`M ${cx} ${cy} L ${sectorA.x} ${sectorA.y} A ${r} ${r} 0 0 0 ${sectorB.x} ${sectorB.y} Z`}
            className="circle-parts__sector"
          />
        )}
        {shown.includes("arc") && (
          <path d={describeArc(cx, cy, r, 200, 340)} className="circle-parts__arc" fill="none" />
        )}
        {shown.includes("segment") && (
          <path
            d={`M ${chordA.x} ${chordA.y} A ${r} ${r} 0 0 0 ${chordB.x} ${chordB.y} Z`}
            className="circle-parts__segment"
          />
        )}
        {shown.includes("diameter") && (
          <line x1={diameterA.x} y1={diameterA.y} x2={diameterB.x} y2={diameterB.y} className="circle-parts__diameter" />
        )}
        {shown.includes("chord") && (
          <line x1={chordA.x} y1={chordA.y} x2={chordB.x} y2={chordB.y} className="circle-parts__chord" />
        )}
        {shown.includes("radius") && (
          <line x1={cx} y1={cy} x2={radiusEnd.x} y2={radiusEnd.y} className="circle-parts__radius" />
        )}
        {shown.includes("center") && <circle cx={cx} cy={cy} r="3.5" className="circle-parts__center" />}
      </svg>
      <div className="circle-parts__value">{revealed > 0 ? PART_LABEL[parts[revealed - 1]] : "—"}</div>
      <div className="circle-parts__controls">
        <button type="button" className="circle-parts__step-btn" onClick={handleClick} disabled={done}>
          {done
            ? language === "en" ? "Done" : "Selesai"
            : language === "en"
              ? `Reveal next part (${revealed}/${parts.length})`
              : `Dedah bahagian seterusnya (${revealed}/${parts.length})`}
        </button>
        <button
          type="button"
          className="circle-parts__reset-btn"
          onClick={() => setRevealed(0)}
          disabled={revealed === 0}
        >
          {language === "en" ? "Reset" : "Ulang semula"}
        </button>
      </div>
      {done && (
        <p className="circle-parts__result">
          {language === "en"
            ? `Done! You've identified all ${parts.length} parts of the circle.`
            : `Sampai! Kamu dah kenal semua ${parts.length} bahagian bulatan.`}
        </p>
      )}
    </div>
  );
}
