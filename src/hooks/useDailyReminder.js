import { useEffect } from "react";
import { useProgress } from "../state/ProgressContext.jsx";

const REMINDER_TITLE = "Jangan lupa praktis hari ni! 🔥";
const REMINDER_BODY = "Sambung streak kamu — cuma beberapa minit je lagi.";

// Peringatan HARIAN — hanya berfungsi semasa app/tab TERBUKA (tiada backend
// push server, jadi tiada notifikasi bila app tertutup sepenuhnya; lihat
// nota di Notifikasi.jsx). Dipanggil sekali di App.jsx supaya jalan
// merentasi SEMUA skrin, bukan terikat pada satu route sahaja.
export function useDailyReminder() {
  const { state, markReminderShown } = useProgress();

  useEffect(() => {
    if (!state.profile.dailyReminderEnabled) return undefined;
    if (typeof window === "undefined" || typeof Notification === "undefined") return undefined;
    if (Notification.permission !== "granted") return undefined;

    const today = new Date().toISOString().slice(0, 10);
    if (state.lastActiveDate === today) return undefined;
    if (state.lastReminderDate === today) return undefined;

    const timer = setTimeout(() => {
      try {
        new Notification(REMINDER_TITLE, { body: REMINDER_BODY, icon: "/icon.svg" });
        markReminderShown();
      } catch {
        // Sesetengah platform (cth. iOS Safari bukan-PWA) tak sokong
        // Notification langsung — abaikan senyap, tiada kesan lain.
      }
    }, 3000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.profile.dailyReminderEnabled, state.lastActiveDate, state.lastReminderDate]);
}
