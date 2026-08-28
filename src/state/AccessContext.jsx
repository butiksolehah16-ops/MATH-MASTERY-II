import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { findAccessCode } from "../data/accessCodes.js";

const STORAGE_KEY = "mm_access_v1";
// Nama key progres pelajar (ProgressContext) — dipakai untuk "grandfather"
// pengguna yang dah ada progres tersimpan SEBELUM gate ni wujud, supaya
// mereka tak terkunci tiba-tiba lepas update.
const PROGRESS_STORAGE_KEY = "mm_progress_v1";

function loadInitialState() {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // storan rosak, teruskan ke fallback di bawah
  }
  try {
    if (window.localStorage.getItem(PROGRESS_STORAGE_KEY)) {
      return { code: "GRANDFATHERED", type: "paid", expiresAt: null };
    }
  } catch {
    // storan tak tersedia
  }
  return null;
}

const AccessContext = createContext(null);

export function AccessProvider({ children }) {
  const [access, setAccess] = useState(loadInitialState);

  useEffect(() => {
    try {
      if (access) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(access));
      else window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // storan tak tersedia (mod peribadi dll.) — akses cuma tak persist
    }
  }, [access]);

  const isExpired = useMemo(() => {
    if (!access?.expiresAt) return false;
    return new Date(access.expiresAt).getTime() < Date.now();
  }, [access]);

  const isUnlocked = Boolean(access) && !isExpired;

  const tryUnlock = useCallback((input) => {
    const found = findAccessCode(input);
    if (!found) return { ok: false, reason: "invalid" };
    if (found.expiresAt && new Date(found.expiresAt).getTime() < Date.now()) {
      return { ok: false, reason: "expired" };
    }
    setAccess({ code: found.code, type: found.type, expiresAt: found.expiresAt ?? null });
    return { ok: true };
  }, []);

  const value = useMemo(
    () => ({ isUnlocked, isExpired, tryUnlock }),
    [isUnlocked, isExpired, tryUnlock]
  );

  return <AccessContext.Provider value={value}>{children}</AccessContext.Provider>;
}

export function useAccess() {
  const ctx = useContext(AccessContext);
  if (!ctx) throw new Error("useAccess must be used within AccessProvider");
  return ctx;
}
