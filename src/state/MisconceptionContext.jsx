import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "mm_misconceptions_v1";

// Misconception Tracker (spec ms. 54-58): setiap langkah salah dalam Pad
// direkod dengan langkah mana yang tersasar. Data ini:
//  - Memacu remedial yang bersasar — StepPad boleh tunjuk "langkah ni pernah
//    kamu tersasar X kali" supaya pelajar fokus di situ semasa ulangkaji.
//  - Boleh dikumpul merentas ramai pelajar untuk kenal pasti topik/langkah
//    paling ramai tersilap (penambahbaikan kandungan) — di luar skop app
//    single-learner ini buat masa sekarang; struktur log di sini sengaja
//    generik (satu rekod per insiden) supaya senang eksport/agregat kelak.
function loadInitialLog() {
  if (typeof window !== "undefined") {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch {
      // corrupt storage, fall through to empty log
    }
  }
  return [];
}

const MisconceptionContext = createContext(null);

export function MisconceptionProvider({ children }) {
  const [log, setLog] = useState(loadInitialLog);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(log));
    } catch {
      // storage unavailable — tracking just won't persist
    }
  }, [log]);

  const recordMistake = useCallback((formId, babId, topikId, stepIndex, attempt, stepPrompt) => {
    setLog((prev) => [
      ...prev,
      { formId, babId, topikId, stepIndex, attempt, stepPrompt, at: new Date().toISOString() },
    ]);
  }, []);

  const value = useMemo(() => ({ log, recordMistake }), [log, recordMistake]);

  return <MisconceptionContext.Provider value={value}>{children}</MisconceptionContext.Provider>;
}

export function useMisconception() {
  const ctx = useContext(MisconceptionContext);
  if (!ctx) throw new Error("useMisconception must be used within a MisconceptionProvider");
  return ctx;
}

// Bilangan kali langkah tertentu tersasar sepanjang sejarah (semua percubaan
// lepas), bukan sekadar sesi semasa — untuk StepPad tunjuk "pernah tersasar Nx".
export function getStepMistakeHistory(log, formId, babId, topikId, totalSteps) {
  const counts = new Array(totalSteps).fill(0);
  log.forEach((entry) => {
    if (entry.formId === formId && entry.babId === babId && entry.topikId === topikId) {
      counts[entry.stepIndex] = (counts[entry.stepIndex] ?? 0) + 1;
    }
  });
  return counts;
}

// Langkah paling lemah bagi satu topik (untuk banner/insight ringkas).
export function getWeakestStep(log, formId, babId, topikId, totalSteps) {
  const counts = getStepMistakeHistory(log, formId, babId, topikId, totalSteps);
  let weakestIndex = -1;
  let weakestCount = 0;
  counts.forEach((count, i) => {
    if (count > weakestCount) {
      weakestCount = count;
      weakestIndex = i;
    }
  });
  return weakestIndex === -1 ? null : { stepIndex: weakestIndex, count: weakestCount };
}
