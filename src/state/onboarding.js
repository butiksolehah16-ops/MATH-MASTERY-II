const STORAGE_KEY = "mm_onboarding_v1";

// Status tutorial onboarding (spotlight tour) — sekali sahaja seumur hidup
// pelajar pada peranti ni, disimpan dalam localStorage. Setiap tour ada id
// sendiri (cth. "peta-bab", "pad-tutorial") supaya tour berbeza di skrin
// berbeza boleh dijejak berasingan.
function loadSeenTours() {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function hasSeenTour(tourId) {
  return Boolean(loadSeenTours()[tourId]);
}

export function markTourSeen(tourId) {
  const seen = loadSeenTours();
  seen[tourId] = true;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(seen));
  } catch {
    // storage unavailable — tour may reappear next visit, harmless
  }
}
