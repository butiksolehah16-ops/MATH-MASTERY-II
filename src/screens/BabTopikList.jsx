import { Navigate, useNavigate, useParams } from "react-router-dom";
import AppHeader from "../components/AppHeader.jsx";
import { getChapter } from "../data/chapters.js";
import { useProgress, getTopicStatus } from "../state/ProgressContext.jsx";
import "./BabTopikList.css";

const STATUS_LABEL = {
  locked: "Dikunci",
  active: "Sedang belajar",
  mastered: "Dikuasai",
};

export default function BabTopikList() {
  const { formId, babId } = useParams();
  const navigate = useNavigate();
  const { state } = useProgress();
  const chapter = getChapter(formId, babId);

  if (!chapter) return <Navigate to={`/f/${formId}/peta`} replace />;

  return (
    <div className="screen bab-topik-list" style={{ "--chapter-theme": chapter.theme }}>
      <AppHeader
        title={`Bab ${chapter.number}`}
        subtitle={chapter.title}
        onBack={() => navigate(`/f/${formId}/peta`)}
        showProfile
        accent={chapter.theme}
      />

      {!chapter.confirmed && (
        <p className="bab-topik-list__note">
          Tajuk topik bab ini belum disahkan terhadap DSKP rasmi — akan dikemas kini semasa fasa content-build.
        </p>
      )}

      <ol className="bab-topik-list__list">
        {chapter.topics.map((topik, index) => {
          const status = getTopicStatus(state, formId, babId, topik.id);
          const locked = status === "locked";

          return (
            <li key={topik.id}>
              <button
                type="button"
                className={`topik-row topik-row--${status}`}
                disabled={locked}
                onClick={() => navigate(`/f/${formId}/bab/${babId}/topik/${topik.id}`)}
              >
                <span className="topik-row__index">{index + 1}</span>
                <span className="topik-row__body">
                  <span className="topik-row__id">Topik {topik.id}</span>
                  <span className="topik-row__title">{topik.title}</span>
                </span>
                <span className={`topik-row__status topik-row__status--${status}`}>{STATUS_LABEL[status]}</span>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
