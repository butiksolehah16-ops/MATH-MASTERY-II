import { polarToCartesian, describeArc } from "./circleGeometry.js";
import "./CircleAllPartsFigure.css";

// Rajah rujukan STATIK yang tunjuk KESEMUA 7 bahagian bulatan SEKALI GUS
// (pusat, jejari, diameter, perentas, lengkok, sektor, tembereng), berlabel
// terus atas rajah — pelengkap kepada CirclePartsExplorer yang dedah satu
// bahagian pada satu masa secara interaktif. Sama koordinat asas (cx, cy, r)
// dengan explorer tu supaya bentuk kekal konsisten merentasi kedua-dua.
export default function CircleAllPartsFigure() {
  const cx = 110;
  const cy = 110;
  const r = 80;

  const radiusEnd = polarToCartesian(cx, cy, r, 0);
  const diameterA = polarToCartesian(cx, cy, r, 0);
  const diameterB = polarToCartesian(cx, cy, r, 180);
  const chordA = polarToCartesian(cx, cy, r, 100);
  const chordB = polarToCartesian(cx, cy, r, 170);
  const sectorA = polarToCartesian(cx, cy, r, 300);
  const sectorB = polarToCartesian(cx, cy, r, 340);

  return (
    <figure className="circle-all-parts">
      <svg viewBox="0 0 220 220" className="circle-all-parts__svg">
        <circle cx={cx} cy={cy} r={r} className="circle-all-parts__outline" />

        <path
          d={`M ${cx} ${cy} L ${sectorA.x} ${sectorA.y} A ${r} ${r} 0 0 0 ${sectorB.x} ${sectorB.y} Z`}
          className="circle-all-parts__sector"
        />
        <text x="168" y="150" className="circle-all-parts__label">sektor</text>

        <path
          d={`M ${chordA.x} ${chordA.y} A ${r} ${r} 0 0 0 ${chordB.x} ${chordB.y} Z`}
          className="circle-all-parts__segment"
        />
        <text x="48" y="42" className="circle-all-parts__label">tembereng</text>

        <path d={describeArc(cx, cy, r, 250, 290)} className="circle-all-parts__arc" fill="none" />
        <text x="98" y="205" className="circle-all-parts__label">lengkok</text>

        <line x1={diameterA.x} y1={diameterA.y} x2={diameterB.x} y2={diameterB.y} className="circle-all-parts__diameter" />
        <text x="55" y="123" className="circle-all-parts__label">diameter</text>

        <line x1={chordA.x} y1={chordA.y} x2={chordB.x} y2={chordB.y} className="circle-all-parts__chord" />
        <text x="30" y="68" className="circle-all-parts__label">perentas</text>

        <line x1={cx} y1={cy} x2={radiusEnd.x} y2={radiusEnd.y} className="circle-all-parts__radius" />
        <text x="145" y="103" className="circle-all-parts__label">jejari</text>

        <circle cx={cx} cy={cy} r="3.5" className="circle-all-parts__center" />
        <text x="88" y="126" className="circle-all-parts__label">pusat</text>
      </svg>
    </figure>
  );
}
