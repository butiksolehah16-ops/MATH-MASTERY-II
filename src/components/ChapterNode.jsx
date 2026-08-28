import ProgressRing from "./ProgressRing.jsx";
import "./ChapterNode.css";

const STATUS_LABEL = {
  locked: "Dikunci",
  active: "Sedang belajar",
  mastered: "Dikuasai",
};

export default function ChapterNode({ chapter, status, masteredTopics, totalTopics, onSelect }) {
  const locked = status === "locked";

  return (
    <button
      type="button"
      className={`chapter-node chapter-node--${status}`}
      style={{ "--chapter-theme": chapter.theme }}
      onClick={onSelect}
      disabled={locked}
      aria-label={`Bab ${chapter.number}: ${chapter.title} — ${STATUS_LABEL[status]}`}
    >
      <div className="chapter-node__ring">
        {status === "mastered" ? (
          <div className="chapter-node__badge chapter-node__badge--mastered">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        ) : locked ? (
          <div className="chapter-node__badge chapter-node__badge--locked">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
              <path d="M8 10V7a4 4 0 118 0v3" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        ) : (
          <ProgressRing
            value={masteredTopics}
            total={totalTopics}
            size={52}
            stroke={5}
            color={chapter.theme}
            label={chapter.number}
          />
        )}
      </div>

      <div className="chapter-node__body">
        <span className="chapter-node__eyebrow">
          Bab {chapter.number}
          {!chapter.confirmed && <span className="chapter-node__tbd"> · rujuk DSKP</span>}
        </span>
        <span className="chapter-node__title">{chapter.title}</span>
        <span className={`chapter-node__status chapter-node__status--${status}`}>{STATUS_LABEL[status]}</span>
      </div>
    </button>
  );
}
