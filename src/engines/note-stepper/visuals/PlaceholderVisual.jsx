import "./PlaceholderVisual.css";

// Slot fallback untuk jenis topik yang visual eksplorasinya belum dibina
// (cth. potongan bentuk untuk pecahan, timbangan untuk algebra, rajah untuk
// geometri — spec ms. 69-73). Bila visual sebenar siap, daftar dalam registry.js.
export default function PlaceholderVisual({ visualType, onFinished }) {
  return (
    <div className="placeholder-visual">
      <p className="placeholder-visual__label">
        Visual eksplorasi ({visualType ?? "jenis ini"}) belum dibina.
      </p>
      <button type="button" className="placeholder-visual__cta" onClick={() => onFinished?.()}>
        Teruskan (demo)
      </button>
    </div>
  );
}
