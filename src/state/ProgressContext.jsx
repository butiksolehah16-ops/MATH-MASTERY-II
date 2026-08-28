import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getChapters } from "../data/chapters.js";

const STORAGE_KEY = "mm_progress_v1";

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

// Streak = bilangan HARI BERTURUT-TURUT pelajar praktis (masterTopic /
// recordExamResult) — bukan sekadar buka app. Dipanggil pada permulaan
// setiap updater yang mewakili "praktis sebenar" berlaku, supaya streak dan
// lastActiveDate sentiasa konsisten dengan XP yang diperoleh serentak.
function withStreakBump(prev) {
  const today = todayStr();
  if (prev.lastActiveDate === today) return prev;
  let nextStreak;
  if (!prev.lastActiveDate) {
    nextStreak = 1;
  } else {
    const diffDays = Math.round((new Date(today) - new Date(prev.lastActiveDate)) / 86400000);
    nextStreak = diffDays === 1 ? (prev.streak ?? 0) + 1 : 1;
  }
  return { ...prev, streak: nextStreak, lastActiveDate: today };
}

function seedFormProgress(formId) {
  const chapters = getChapters(formId);
  const chapterState = {};
  chapters.forEach((bab, index) => {
    const topics = {};
    bab.topics.forEach((topik, topikIndex) => {
      topics[topik.id] = { status: index === 0 && topikIndex === 0 ? "active" : "locked" };
    });
    chapterState[bab.id] = { status: index === 0 ? "active" : "locked", topics };
  });
  return { chapters: chapterState };
}

function loadInitialState() {
  if (typeof window !== "undefined") {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch {
      // corrupt storage, fall through to fresh seed
    }
  }
  return {
    mode: "baharu",
    xp: 0,
    streak: 0,
    lastActiveDate: null,
    lastReminderDate: null,
    profile: { name: "Pelajar", parentReportEnabled: false, dailyReminderEnabled: false },
    forms: {
      form1: seedFormProgress("form1"),
    },
  };
}

const ProgressContext = createContext(null);

export function ProgressProvider({ children }) {
  const [state, setState] = useState(loadInitialState);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // storage unavailable (private mode etc.) — progress just won't persist
    }
  }, [state]);

  const ensureForm = useCallback((formId) => {
    setState((prev) => {
      if (prev.forms[formId]) return prev;
      return { ...prev, forms: { ...prev.forms, [formId]: seedFormProgress(formId) } };
    });
  }, []);

  const setMode = useCallback((mode) => {
    setState((prev) => ({ ...prev, mode }));
  }, []);

  const masterTopic = useCallback((formId, babId, topikId) => {
    setState((prevRaw) => {
      const prev = withStreakBump(prevRaw);
      const chapters = getChapters(formId);
      const babIndex = chapters.findIndex((b) => b.id === babId);
      if (babIndex === -1) return prev;
      const bab = chapters[babIndex];
      const topikIndex = bab.topics.findIndex((t) => t.id === topikId);
      if (topikIndex === -1) return prev;

      const formProgress = structuredClone(prev.forms[formId] ?? seedFormProgress(formId));
      formProgress.chapters[babId].topics[topikId] = { status: "mastered" };

      const nextTopik = bab.topics[topikIndex + 1];
      if (nextTopik) {
        const nextState = formProgress.chapters[babId].topics[nextTopik.id];
        if (!nextState || nextState.status === "locked") {
          formProgress.chapters[babId].topics[nextTopik.id] = { status: "active" };
        }
      }

      const allTopicsMastered = bab.topics.every(
        (t) => formProgress.chapters[babId].topics[t.id]?.status === "mastered"
      );
      if (allTopicsMastered) {
        formProgress.chapters[babId].status = "mastered";
        const nextBab = chapters[babIndex + 1];
        if (nextBab) {
          if (formProgress.chapters[nextBab.id].status === "locked") {
            formProgress.chapters[nextBab.id].status = "active";
          }
          const firstTopik = nextBab.topics[0];
          if (firstTopik) {
            const firstTopikState = formProgress.chapters[nextBab.id].topics[firstTopik.id];
            if (!firstTopikState || firstTopikState.status === "locked") {
              formProgress.chapters[nextBab.id].topics[firstTopik.id] = { status: "active" };
            }
          }
        }
      }

      return {
        ...prev,
        xp: prev.xp + 20,
        forms: { ...prev.forms, [formId]: formProgress },
      };
    });
  }, []);

  const resetForm = useCallback((formId) => {
    setState((prev) => {
      const nextExamScores = Object.fromEntries(
        Object.entries(prev.examScores ?? {}).filter(([, score]) => score.formId !== formId)
      );
      return {
        ...prev,
        forms: { ...prev.forms, [formId]: seedFormProgress(formId) },
        examScores: nextExamScores,
      };
    });
  }, []);

  const setProfileName = useCallback((name) => {
    const trimmed = name.trim();
    if (!trimmed) return;
    setState((prev) => ({ ...prev, profile: { ...prev.profile, name: trimmed } }));
  }, []);

  const setDailyReminderEnabled = useCallback((enabled) => {
    setState((prev) => ({ ...prev, profile: { ...prev.profile, dailyReminderEnabled: enabled } }));
  }, []);

  // Dipanggil oleh useDailyReminder selepas notifikasi ditunjukkan, supaya
  // tak berulang > sekali sehari walaupun app dibuka semula.
  const markReminderShown = useCallback(() => {
    setState((prev) => ({ ...prev, lastReminderDate: todayStr() }));
  }, []);

  // Ganti SELURUH state (dipakai oleh import backup) — tiada gabungan separa,
  // fail backup mewakili snapshot PENUH, jadi ganti terus lebih selamat
  // daripada cuba "merge" (elak state longgar/tak konsisten).
  const replaceState = useCallback((nextState) => {
    setState(nextState);
  }, []);

  const recordExamResult = useCallback((formId, paperId, result) => {
    setState((prevRaw) => {
      const prev = withStreakBump(prevRaw);
      const pct = Math.round((result.totalEarned / result.totalMax) * 100);
      const prevScores = prev.examScores ?? {};
      const prevPaper = prevScores[paperId];
      const bestPct = Math.max(pct, prevPaper?.bestPct ?? 0);
      return {
        ...prev,
        xp: prev.xp + 30,
        examScores: {
          ...prevScores,
          [paperId]: {
            formId,
            attempts: (prevPaper?.attempts ?? 0) + 1,
            lastPct: pct,
            bestPct,
          },
        },
      };
    });
  }, []);

  const value = useMemo(
    () => ({
      state,
      ensureForm,
      setMode,
      masterTopic,
      resetForm,
      recordExamResult,
      setProfileName,
      replaceState,
      setDailyReminderEnabled,
      markReminderShown,
    }),
    [
      state,
      ensureForm,
      setMode,
      masterTopic,
      resetForm,
      recordExamResult,
      setProfileName,
      replaceState,
      setDailyReminderEnabled,
      markReminderShown,
    ]
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within a ProgressProvider");
  return ctx;
}

export function getFormProgress(state, formId) {
  return state.forms[formId] ?? seedFormProgress(formId);
}

// Bab/topik tak pernah dikunci — ini app ulangkaji, bukan kursus berjujukan.
// Pelajar dah belajar dalam kelas, jadi mereka perlu boleh terus ke mana-mana
// bab/topik untuk rujuk semula. "locked" (termasuk data lama dalam
// localStorage sebelum perubahan ni) dianggap sebagai "active".
function normalizeStatus(status) {
  return status === "locked" || !status ? "active" : status;
}

export function getChapterStatus(state, formId, babId) {
  return normalizeStatus(getFormProgress(state, formId).chapters[babId]?.status);
}

export function getTopicStatus(state, formId, babId, topikId) {
  return normalizeStatus(getFormProgress(state, formId).chapters[babId]?.topics[topikId]?.status);
}

export function getFormStats(state, formId) {
  const chapters = getChapters(formId);
  const progress = getFormProgress(state, formId);
  const masteredCount = chapters.filter((b) => progress.chapters[b.id]?.status === "mastered").length;
  const activeChapter = chapters.find((b) => progress.chapters[b.id]?.status === "active");
  return { total: chapters.length, mastered: masteredCount, activeChapter };
}
