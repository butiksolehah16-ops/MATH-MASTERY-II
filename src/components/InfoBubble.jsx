import { useEffect } from "react";
import "./InfoBubble.css";

const BUBBLE_WIDTH = 240;
const GAP = 10;

// Gelembung penerangan ringkas (tap-to-reveal) — untuk pelajar yang langkau
// tutorial first-time dan tak faham sesuatu elemen (cth. XP, streak, fasa
// dikunci). Digunakan tap sahaja (bukan hover) sebab app ni phone-first.
// Dipaparkan `position: fixed` berdasarkan `anchorRect` (dari
// `getBoundingClientRect()` elemen pencetus) supaya tak terpotong oleh
// bekas yang skrol mendatar (cth. stepper fasa dalam Skrin Topik).
export default function InfoBubble({ anchorRect, children, onClose }) {
  useEffect(() => {
    if (!anchorRect) return undefined;
    const close = () => onClose?.();
    // tangguh sedikit supaya klik yang buka gelembung ni sendiri tak terus
    // tercetus sebagai "klik di luar" pada listener document yang sama.
    const timer = window.setTimeout(() => document.addEventListener("click", close), 0);
    window.addEventListener("scroll", close, true);
    window.addEventListener("resize", close);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("click", close);
      window.removeEventListener("scroll", close, true);
      window.removeEventListener("resize", close);
    };
  }, [anchorRect, onClose]);

  if (!anchorRect || typeof window === "undefined") return null;

  const viewportW = window.innerWidth;
  const viewportH = window.innerHeight;
  const left = Math.min(
    Math.max(12, anchorRect.left + anchorRect.width / 2 - BUBBLE_WIDTH / 2),
    viewportW - BUBBLE_WIDTH - 12
  );
  const spaceBelow = viewportH - anchorRect.bottom;
  const above = spaceBelow < 120;
  const positionStyle = above
    ? { bottom: viewportH - anchorRect.top + GAP }
    : { top: anchorRect.bottom + GAP };
  const arrowLeft = Math.max(
    14,
    Math.min(BUBBLE_WIDTH - 14, anchorRect.left + anchorRect.width / 2 - left)
  );

  return (
    <div
      className={`info-bubble${above ? " info-bubble--above" : ""}`}
      style={{ left, width: BUBBLE_WIDTH, ...positionStyle }}
      onClick={(e) => e.stopPropagation()}
      role="tooltip"
    >
      <span className="info-bubble__arrow" style={{ left: arrowLeft }} />
      {children}
    </div>
  );
}
