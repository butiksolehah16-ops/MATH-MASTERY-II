import { useState } from "react";
import { useProgress } from "../state/ProgressContext.jsx";
import InfoBubble from "./InfoBubble.jsx";
import "./XPStreakBadge.css";

// Penerangan tap-to-reveal untuk pelajar yang langkau tutorial first-time —
// supaya "oo XP ni untuk apa" / "macam mana nak kumpul streak" tak jadi
// misteri walaupun tanpa tour.
const HINTS = {
  xp: "XP (Mata Pengalaman) — kamu dapat +20 XP setiap kali kuasai satu topik penuh (lulus Ujian Mastery), dan +30 XP setiap kali cuba satu set ujian UASA/UPSA.",
  streak: "Streak — bilangan hari berturut-turut kamu praktis dalam app ni. Makin panjang streak, makin kukuh ingatan jangka panjang kamu!",
};

export default function XPStreakBadge({ compact = false }) {
  const { state } = useProgress();
  const [openHint, setOpenHint] = useState(null); // "xp" | "streak" | null
  const [hintRect, setHintRect] = useState(null);

  const handleTap = (key) => (e) => {
    // Sengaja TAK stopPropagation — biar klik ni bubble ke document supaya
    // listener "klik di luar" InfoBubble lain (cth. fasa dikunci) sempat
    // tertutup, bukan tertinggal terbuka serentak dengan gelembung baharu ni.
    setHintRect(e.currentTarget.getBoundingClientRect());
    setOpenHint((prev) => (prev === key ? null : key));
  };

  return (
    <div className={`xp-badge${compact ? " xp-badge--compact" : ""}`} data-tour="xp-badge">
      <button
        type="button"
        className="xp-badge__item xp-badge__item--xp"
        onClick={handleTap("xp")}
        aria-label="Apa itu XP?"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" fill="currentColor" />
        </svg>
        {state.xp}
      </button>
      <button
        type="button"
        className="xp-badge__item xp-badge__item--streak"
        onClick={handleTap("streak")}
        aria-label="Apa itu streak?"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 2c1 3-2 4-2 7a4 4 0 108 0c0-1-.5-2-1-2 .3 2-1 3-2 3-1.5 0-2-1.3-1.5-2.5C14 6 13 4 12 2z"
            fill="currentColor"
          />
          <path d="M8 13a4 4 0 108 0c0 3-2 4-2 6a2 2 0 11-4 0c0-2-2-3-2-6z" fill="currentColor" opacity="0.55" />
        </svg>
        {state.streak}
      </button>

      {openHint && (
        <InfoBubble anchorRect={hintRect} onClose={() => setOpenHint(null)}>
          {HINTS[openHint]}
        </InfoBubble>
      )}
    </div>
  );
}
