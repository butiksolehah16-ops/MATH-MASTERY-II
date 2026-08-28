import { useEffect, useState } from "react";
import "./AngleSumExplorer.css";

function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy - r * Math.sin(rad) };
}

function describeArc(cx, cy, r, startAngle, endAngle) {
  if (endAngle <= startAngle) return "";
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
}

// Visual sudut berputar — satu jejari tetap (0°) dan satu jejari berputar,
// klik untuk tambah darjah sehingga capai jumlah sasaran (180° garis lurus,
// 360° pusingan penuh, atau sebarang sudut lain).
export default function AngleSumExplorer({ totalDegrees, stepDegrees, onFinished }) {
  const [current, setCurrent] = useState(0);
  const done = current >= totalDegrees;
  const totalSteps = Math.round(totalDegrees / stepDegrees);
  const currentSteps = Math.round(current / stepDegrees);

  useEffect(() => {
    if (done) onFinished?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  const handleClick = () => {
    if (done) return;
    setCurrent((c) => Math.min(c + stepDegrees, totalDegrees));
  };

  const cx = 110;
  const cy = 115;
  const r = 90;
  const movingEnd = polarToCartesian(cx, cy, r, current);
  const fixedEnd = polarToCartesian(cx, cy, r, 0);

  return (
    <div className="angle-sum">
      <svg viewBox="0 0 220 230" className="angle-sum__svg">
        <path d={describeArc(cx, cy, 34, 0, current)} className="angle-sum__arc" fill="none" />
        <line x1={cx} y1={cy} x2={fixedEnd.x} y2={fixedEnd.y} className="angle-sum__ray" />
        <line x1={cx} y1={cy} x2={movingEnd.x} y2={movingEnd.y} className="angle-sum__ray angle-sum__ray--moving" />
        <circle cx={cx} cy={cy} r="3.5" className="angle-sum__vertex" />
      </svg>
      <div className="angle-sum__value">{current}°</div>
      <div className="angle-sum__controls">
        <button type="button" className="angle-sum__step-btn" onClick={handleClick} disabled={done}>
          {done ? "Selesai" : `Tambah ${stepDegrees}° (${currentSteps}/${totalSteps})`}
        </button>
        <button type="button" className="angle-sum__reset-btn" onClick={() => setCurrent(0)} disabled={current === 0}>
          Ulang semula
        </button>
      </div>
      {done && <p className="angle-sum__result">Sampai! Jumlah sudut = {totalDegrees}°</p>}
    </div>
  );
}
