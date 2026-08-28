import { useEffect, useState } from "react";
import "./LikeTermsExplorer.css";

// Visual gabung sebutan serupa — dua kumpulan blok berlabel sama (cth "x")
// bergabung jadi satu kumpulan bila diklik, tunjuk ax + bx = (a+b)x.
export default function LikeTermsExplorer({ termLabel = "x", countA, countB, onFinished }) {
  const [combined, setCombined] = useState(false);
  const total = countA + countB;

  useEffect(() => {
    if (combined) onFinished?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [combined]);

  return (
    <div className="like-terms">
      {!combined ? (
        <div className="like-terms__groups">
          <div className="like-terms__group">
            <span className="like-terms__group-label">
              {countA}
              {termLabel}
            </span>
            <div className="like-terms__blocks">
              {Array.from({ length: countA }).map((_, i) => (
                <div key={i} className="like-terms__block like-terms__block--a">
                  {termLabel}
                </div>
              ))}
            </div>
          </div>
          <div className="like-terms__plus" aria-hidden="true">
            +
          </div>
          <div className="like-terms__group">
            <span className="like-terms__group-label">
              {countB}
              {termLabel}
            </span>
            <div className="like-terms__blocks">
              {Array.from({ length: countB }).map((_, i) => (
                <div key={i} className="like-terms__block like-terms__block--b">
                  {termLabel}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="like-terms__group">
          <span className="like-terms__group-label">
            {total}
            {termLabel}
          </span>
          <div className="like-terms__blocks">
            {Array.from({ length: total }).map((_, i) => (
              <div key={i} className="like-terms__block like-terms__block--combined">
                {termLabel}
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="like-terms__controls">
        <button
          type="button"
          className="like-terms__step-btn"
          onClick={() => setCombined(true)}
          disabled={combined}
        >
          {combined ? "Selesai" : "Gabungkan Sebutan Serupa"}
        </button>
        <button type="button" className="like-terms__reset-btn" onClick={() => setCombined(false)} disabled={!combined}>
          Ulang semula
        </button>
      </div>
      {combined && (
        <p className="like-terms__result">
          Sampai! {countA}
          {termLabel} + {countB}
          {termLabel} = {total}
          {termLabel}
        </p>
      )}
    </div>
  );
}
