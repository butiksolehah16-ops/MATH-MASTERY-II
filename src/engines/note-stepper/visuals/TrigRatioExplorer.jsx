import { useEffect, useState } from "react";
import "./TrigRatioExplorer.css";

const DEFAULT_PARTS = ["angle", "opposite", "adjacent", "hypotenuse"];
const PART_LABEL = {
  angle: "Sudut Tirus θ",
  opposite: "Sisi Bertentangan",
  adjacent: "Sisi Bersebelahan",
  hypotenuse: "Sisi Miring (Hipotenus)",
};

// Visual segi tiga bersudut tegak — dedah sudut tirus θ dan tiga sisinya
// (bertentangan, bersebelahan, hipotenus) satu demi satu, relatif kepada θ
// yang terletak di bucu kanan bawah.
export default function TrigRatioExplorer({ parts = DEFAULT_PARTS, onFinished }) {
  const [revealed, setRevealed] = useState(0);
  const done = revealed >= parts.length;
  const shown = parts.slice(0, revealed);

  useEffect(() => {
    if (done) onFinished?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  const handleClick = () => {
    if (done) return;
    setRevealed((r) => Math.min(r + 1, parts.length));
  };

  // Bucu: A(atas) - (40,40), B(bawah-kiri) - (40,140), C(bawah-kanan, sudut θ) - (180,140)
  const A = { x: 40, y: 40 };
  const B = { x: 40, y: 140 };
  const C = { x: 180, y: 140 };

  return (
    <div className="trig-ratio">
      <svg viewBox="0 0 220 170" className="trig-ratio__svg">
        <polygon points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`} className="trig-ratio__triangle" />
        <rect x={B.x} y={B.y - 12} width="12" height="12" className="trig-ratio__right-angle" />
        {shown.includes("opposite") && (
          <line x1={A.x} y1={A.y} x2={B.x} y2={B.y} className="trig-ratio__side trig-ratio__side--opposite" />
        )}
        {shown.includes("adjacent") && (
          <line x1={B.x} y1={B.y} x2={C.x} y2={C.y} className="trig-ratio__side trig-ratio__side--adjacent" />
        )}
        {shown.includes("hypotenuse") && (
          <line x1={A.x} y1={A.y} x2={C.x} y2={C.y} className="trig-ratio__side trig-ratio__side--hypotenuse" />
        )}
        {shown.includes("angle") && (
          <path d={`M ${C.x - 24} ${C.y} A 24 24 0 0 0 ${C.x} ${C.y - 24}`} className="trig-ratio__angle-arc" fill="none" />
        )}
        <text x="26" y="94" textAnchor="middle" className="trig-ratio__label">
          {shown.includes("opposite") ? "dtg" : ""}
        </text>
        <text x="110" y="158" textAnchor="middle" className="trig-ratio__label">
          {shown.includes("adjacent") ? "bsb" : ""}
        </text>
        <text x="118" y="82" textAnchor="middle" className="trig-ratio__label">
          {shown.includes("hypotenuse") ? "hip" : ""}
        </text>
        {shown.includes("angle") && (
          <text x={C.x - 30} y={C.y - 10} textAnchor="middle" className="trig-ratio__theta">
            θ
          </text>
        )}
      </svg>
      <div className="trig-ratio__value">{revealed > 0 ? PART_LABEL[parts[revealed - 1]] : "—"}</div>
      <div className="trig-ratio__controls">
        <button type="button" className="trig-ratio__step-btn" onClick={handleClick} disabled={done}>
          {done ? "Selesai" : `Dedah bahagian seterusnya (${revealed}/${parts.length})`}
        </button>
        <button
          type="button"
          className="trig-ratio__reset-btn"
          onClick={() => setRevealed(0)}
          disabled={revealed === 0}
        >
          Ulang semula
        </button>
      </div>
      {done && (
        <p className="trig-ratio__result">
          Sampai! Relatif kepada θ: sisi bertentangan (dtg), sisi bersebelahan (bsb), dan hipotenus (hip) sentiasa
          sisi terpanjang.
        </p>
      )}
    </div>
  );
}
