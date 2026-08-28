import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppHeader from "../components/AppHeader.jsx";
import ChapterNode from "../components/ChapterNode.jsx";
import SpotlightTour from "../components/onboarding/SpotlightTour.jsx";
import { getForm } from "../data/forms.js";
import { getChapters } from "../data/chapters.js";
import { useProgress, getChapterStatus, getTopicStatus } from "../state/ProgressContext.jsx";
import { hasSeenTour, markTourSeen } from "../state/onboarding.js";
import "./PetaBab.css";

const PETA_BAB_TOUR_STEPS = [
  {
    target: '[data-tour="chapter-first"]',
    title: "Peta Bab kau 🗺️",
    body:
      "Setiap bab ada status: bulatan progress (sedang belajar) atau ✓ hijau (dikuasai). Ni app ulangkaji, jadi " +
      "semua bab terbuka bila-bila masa — pilih terus mana-mana bab nak rujuk semula.",
  },
  {
    target: '[data-tour="xp-badge"]',
    title: "XP & Streak korang ⚡",
    body:
      "Setiap kali kau selesaikan topik, kau dapat XP. Streak pulak kira berapa hari kau datang belajar " +
      "berturut-turut — cuba kekalkan!",
  },
  {
    target: '[data-tour="chapter-first"]',
    title: "Jom mula! 🚀",
    body: "Tekan bab pertama ni untuk mula belajar. Senang je — ikut je step dia satu-satu.",
  },
];

export default function PetaBab() {
  const { formId } = useParams();
  const navigate = useNavigate();
  const { state } = useProgress();
  const form = getForm(formId);
  const chapters = getChapters(formId);
  const [showTour, setShowTour] = useState(() => !hasSeenTour("peta-bab"));

  const handleFinishTour = () => {
    markTourSeen("peta-bab");
    setShowTour(false);
  };

  return (
    <div className="screen peta-bab">
      <AppHeader
        title="Peta Bab"
        subtitle={form?.label}
        onBack={() => navigate(`/f/${formId}`)}
        showXP
        showProfile
      />

      {state.mode === "ulangkaji" && (
        <p className="peta-bab__mode-note">
          Mod Ulangkaji: pilih mana-mana bab yang pernah dipelajari untuk recap + latih tubi bercampur.
        </p>
      )}

      <ol className="peta-bab__path">
        {chapters.map((chapter, i) => {
          const status = getChapterStatus(state, formId, chapter.id);
          const masteredTopics = chapter.topics.filter(
            (t) => getTopicStatus(state, formId, chapter.id, t.id) === "mastered"
          ).length;

          return (
            <li key={chapter.id} className="peta-bab__node" data-tour={i === 0 ? "chapter-first" : undefined}>
              <ChapterNode
                chapter={chapter}
                status={status}
                masteredTopics={masteredTopics}
                totalTopics={chapter.topics.length}
                onSelect={() => navigate(`/f/${formId}/bab/${chapter.id}`)}
              />
            </li>
          );
        })}
      </ol>

      {showTour && <SpotlightTour steps={PETA_BAB_TOUR_STEPS} onFinish={handleFinishTour} />}
    </div>
  );
}
