import { useEffect, useState } from "react";

const DISMISS_KEY = "mm_install_dismissed_v1";

function isStandalone() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia?.("(display-mode: standalone)")?.matches ||
    window.navigator.standalone === true
  );
}

// Chrome/Edge (Android & desktop) fire `beforeinstallprompt` when their own
// installability heuristics are met, then let us defer + replay it via our
// own UI button. Safari (iOS/macOS) never fires this event — there is no
// programmatic install there, so this hook simply never becomes `available`
// on those browsers, and callers should fall back to "Add to Home Screen"
// instructions instead.
export function useInstallPrompt() {
  const [deferredEvent, setDeferredEvent] = useState(null);
  const [installed, setInstalled] = useState(isStandalone());
  const [dismissed, setDismissed] = useState(() => localStorage.getItem(DISMISS_KEY) === "1");

  useEffect(() => {
    const handleBeforeInstall = (e) => {
      e.preventDefault();
      setDeferredEvent(e);
    };
    const handleInstalled = () => {
      setInstalled(true);
      setDeferredEvent(null);
    };
    window.addEventListener("beforeinstallprompt", handleBeforeInstall);
    window.addEventListener("appinstalled", handleInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
      window.removeEventListener("appinstalled", handleInstalled);
    };
  }, []);

  const promptInstall = async () => {
    if (!deferredEvent) return;
    deferredEvent.prompt();
    await deferredEvent.userChoice;
    // Chrome only allows a saved prompt event to be used once.
    setDeferredEvent(null);
  };

  const dismiss = () => {
    localStorage.setItem(DISMISS_KEY, "1");
    setDismissed(true);
  };

  return {
    available: Boolean(deferredEvent) && !installed && !dismissed,
    promptInstall,
    dismiss,
  };
}
