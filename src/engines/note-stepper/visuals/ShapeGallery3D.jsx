import { ShapeIcon3D } from "./shapeIcons3D.jsx";
import "./ShapeGallery3D.css";

// Label berlabuh (callout) macam dalam buku teks — garis pendek dari teks ke
// titik sasaran pada bentuk, dengan bulatan kecil menandakan lokasi tepat.
function Callout({ text, tx, ty, lx, ly }) {
  return (
    <g className="shape-gallery-3d__callout">
      <line x1={tx} y1={ty - 12} x2={lx} y2={ly} />
      <circle cx={lx} cy={ly} r="2.5" />
      <text x={tx} y={ty} textAnchor="middle">
        {text}
      </text>
    </g>
  );
}

const SHAPES = [
  {
    key: "kuboid",
    name: "Kuboid",
    callouts: [{ text: "tapak", tx: 75, ty: 128, lx: 75, ly: 100 }],
  },
  {
    key: "piramid",
    name: "Piramid",
    callouts: [
      { text: "puncak", tx: 80, ty: 14, lx: 80, ly: 25 },
      { text: "tapak", tx: 80, ty: 128, lx: 80, ly: 100 },
    ],
  },
  {
    key: "silinder",
    name: "Silinder",
    callouts: [{ text: "tapak", tx: 80, ty: 128, lx: 80, ly: 115 }],
  },
  {
    key: "kon",
    name: "Kon",
    callouts: [
      { text: "puncak", tx: 80, ty: 14, lx: 80, ly: 25 },
      { text: "tapak", tx: 80, ty: 128, lx: 80, ly: 115 },
    ],
  },
  {
    key: "sfera",
    name: "Sfera",
    callouts: [{ text: "pusat sfera", tx: 80, ty: 128, lx: 80, ly: 65 }],
  },
];

// Rajah rujukan STATIK (bukan interaktif) yang senaraikan kelima-lima bentuk
// tiga dimensi bersebelahan, dengan label bahagian utama (tapak, puncak,
// pusat sfera) — macam jadual rajah dalam buku teks. Digunakan sebagai
// `figure` pada mana-mana sub-fasa Nota (lihat figureRegistry.js).
export default function ShapeGallery3D() {
  return (
    <div className="shape-gallery-3d">
      {SHAPES.map((shape) => (
        <figure key={shape.key} className="shape-gallery-3d__item">
          <svg viewBox="0 0 160 132" className="shape-gallery-3d__svg">
            <g transform="translate(0,10)">
              <ShapeIcon3D shapeKey={shape.key} />
            </g>
            {shape.callouts.map((callout) => (
              <Callout key={callout.text} {...callout} />
            ))}
          </svg>
          <figcaption>{shape.name}</figcaption>
        </figure>
      ))}
    </div>
  );
}
