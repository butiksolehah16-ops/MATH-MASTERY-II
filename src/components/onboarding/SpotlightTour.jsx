import { useLayoutEffect, useState } from "react";
import "./SpotlightTour.css";

const HOLE_PADDING = 8;

// Tutorial onboarding gaya spotlight — bahagian lain skrin digelapkan,
// satu elemen (dicari via CSS selector `data-tour="..."`) disorot terang,
// dengan gelembung penerangan + butang "Seterusnya"/"Langkau". Muncul
// sekali sahaja per tour — dijejak dalam src/state/onboarding.js.
export default function SpotlightTour({ steps, onFinish }) {
  const [index, setIndex] = useState(0);
  const [rect, setRect] = useState(null);
  const step = steps[index];
  const isLast = index === steps.length - 1;

  useLayoutEffect(() => {
    function updateRect() {
      const el = document.querySelector(step.target);
      setRect(el ? el.getBoundingClientRect() : null);
    }
    updateRect();
    // elemen sasaran kadang mount sepesat mili-saat lepas render pertama
    // (cth. selepas layout fon/gambar settle) — cuba semula sekali.
    const retry = window.setTimeout(updateRect, 200);
    window.addEventListener("resize", updateRect);
    window.addEventListener("scroll", updateRect, true);
    return () => {
      window.clearTimeout(retry);
      window.removeEventListener("resize", updateRect);
      window.removeEventListener("scroll", updateRect, true);
    };
  }, [step.target]);

  const handleNext = () => {
    if (isLast) {
      onFinish?.();
    } else {
      setIndex((i) => i + 1);
    }
  };

  const holeStyle = rect
    ? {
        top: rect.top - HOLE_PADDING,
        left: rect.left - HOLE_PADDING,
        width: rect.width + HOLE_PADDING * 2,
        height: rect.height + HOLE_PADDING * 2,
      }
    : null;

  const bubbleStyle = (() => {
    if (typeof window === "undefined") return {};
    if (!rect) {
      return { top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
    }
    const viewportW = window.innerWidth;
    const viewportH = window.innerHeight;
    const bubbleWidth = 290;
    const left = Math.min(Math.max(16, rect.left), viewportW - bubbleWidth - 16);
    const spaceBelow = viewportH - rect.bottom;
    if (spaceBelow > 190) {
      return { top: rect.bottom + HOLE_PADDING + 12, left };
    }
    return { bottom: viewportH - rect.top + HOLE_PADDING + 12, left };
  })();

  return (
    <div className="spotlight-tour" role="dialog" aria-modal="true">
      <div className="spotlight-tour__blocker" />
      {holeStyle && <div className="spotlight-tour__hole" style={holeStyle} />}
      <div className="spotlight-tour__bubble" style={bubbleStyle}>
        <p className="spotlight-tour__title">{step.title}</p>
        <p className="spotlight-tour__body">{step.body}</p>
        <div className="spotlight-tour__footer">
          <button type="button" className="spotlight-tour__skip" onClick={onFinish}>
            Langkau
          </button>
          {steps.length > 1 && (
            <span className="spotlight-tour__progress">
              {index + 1}/{steps.length}
            </span>
          )}
          <button type="button" className="spotlight-tour__next" onClick={handleNext}>
            {isLast ? "Faham!" : "Seterusnya"}
          </button>
        </div>
      </div>
    </div>
  );
}
